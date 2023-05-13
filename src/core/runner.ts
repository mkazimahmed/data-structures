type Task = () => Promise<string>

export class Runner {
    concurrency;
    tasks: Array<Task>;
    tasksInProgress
  
    constructor(concurrency: number) {
      this.concurrency = concurrency;
      this.tasks = [];
      this.tasksInProgress = 0;
    }
  
    push(task: () => void) {
      this.tasks.push(task);
    }
  
    execute() {
        if (this.tasks.length === 0) {
            console.log('no tasks available')
            return;
        }

        if (this.tasksInProgress >= this.concurrency) {
            console.log('concurrency limit exceeded')
            return;
        }
    
        while (
            this.tasksInProgress <= this.concurrency - 1 &&
            this.tasks.length > 0
        ) {
    
            const task = this.tasks.shift();
            this.executeTask(task);
    
            this.tasksInProgress++;
        }
    }
  
    executeTask(task: Task) {
      task()
        .then(() => {
          this.tasksInProgress--;
          this.execute();
        })
        .catch((ex) => {
          this.executeTask(task);
        });
    }
  }
  
  // Task 1 will take 300ms to complete
  // Task 2 will take 300ms to complete
  // Task 3 will take 300ms to complete
  // Task 4 will take 200ms to complete


  