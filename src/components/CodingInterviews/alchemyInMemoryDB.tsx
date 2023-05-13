type Store = Record<string, string | number>;

export class InMemoryDB {
  store: Store;
  backups: Array<Store>;

  constructor() {
    this.store = {};
    this.backups = [];
  }

  set(key: string, value: number) {
    if (!key) {
      return;
    }

    this.store[key] = value;
  }

  get(key: string) {
    if (!key) {
      return;
    }

    if (!Object.hasOwn(this.store, key)) {
      return;
    }

    return this.store[key];
  }

  begin() {
    this.backups.push({ ...this.store });
  }

  commit() {
    if (this.backups.length === 0) {
      console.log("No transaction");
      return false;
    }

    this.backups.pop();
  }

  rollback() {
    if (this.backups.length === 0) {
      console.log("No transaction");
      return false;
    }

    const backup = this.backups.pop();
    this.store = { ...backup };
  }
}

const db = new InMemoryDB();
db.set("a", 5);
db.set("b", 10);
db.set("c", 15);
db.get("a");
db.get("b");
db.get("c");
db.begin();
db.set("a", 35);
db.begin();
db.set("a", 45);
db.rollback();
db.commit();
db.get("a");
