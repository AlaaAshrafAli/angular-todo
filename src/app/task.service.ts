// import { Injectable } from '@angular/core';
// import { Task } from './task';

// @Injectable({
//   providedIn: 'root',
// })
// export class TaskService {
//   tasks: Task[] = [];

//   constructor() {}

//   addTask(task: Task) {
//     this.tasks.push(task);
//   }

//   editTask(id: number, newDescription: string) {
//     const task = this.tasks.find((t) => t.id === id);
//     if (task) task.description = newDescription;
//   }

//   deleteTask(id: number) {
//     this.tasks = this.tasks.filter((t) => t.id !== id);
//   }

//   toggleCompletion(id: number) {
//     const task = this.tasks.find((t) => t.id === id);
//     if (task) task.isCompleted = !task.isCompleted;
//   }
// }
