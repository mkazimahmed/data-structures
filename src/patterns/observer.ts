class Observer {
    subscribers;

    constructor(){
        this.subscribers = []
    }

    subscribe(id, fn) {
        this.subscribers.push({
            id,
            fn,
        })
    }

    unSubscribe(id) {
        this.subscribers = this.subscribers.filter(sub => sub.id != id)
    }

    notify(event) {
        this.subscribers.forEach(sub => {
            sub.fn(event)
        })
    }
}