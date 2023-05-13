import * as React from "react";
import "./styles.css";
import { Runner } from "../../core/runner";

export default function App() {
  // Javascript
  // Implement a task runner that executes an array of tasks. When the runner is passed a number, it only executes that number tasks concurrently and it passes the other ones into a queue to be executed later. We want to execute all tasks as quickly as possible given the concurrent task limits. Feel free to edit the interface as you see fit.

  // 0 ms
  // ~~300 ms: Task 1 completed. Task 3 begins
  // ~~300 ms: Task 2 completed. Task 4 begins
  // ~~500 ms: Task 4 completed
  // ~~600 ms: Task 3 completed

  const getTaskFunc = (time: number, taskId: string) => {
    return () => {
      return new Promise((resolve, reject) => {
        const random = Math.random();

        setTimeout(() => {
          if (random > 0.5) {
            console.log(`Task ${taskId} completed`);
            resolve(taskId);
          } else {
            console.log(`Task ${taskId} rejected`);
            reject(taskId);
          }
        }, time);
      });
    };
  };

  const task0 = getTaskFunc(3000, "0");
  const task1 = getTaskFunc(300, "1");
  const task2 = getTaskFunc(300, "2");
  const task3 = getTaskFunc(300, "3");
  const task4 = getTaskFunc(200, "4");
  const task5 = getTaskFunc(2000, "5");

  React.useEffect(() => {
    const runner = new Runner(2);
    runner.push(task1);
    runner.push(task2);
    runner.push(task3);
    runner.push(task4);
    runner.execute();
  });

  return <div className="App"></div>;
}
