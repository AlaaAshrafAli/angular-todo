import { Component } from '@angular/core';

interface Task {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  tasks: Task[] = [];
  newTaskTitle: string = '';

  addTask() {
    if (this.newTaskTitle.trim() === '') return;

    this.tasks.push({ title: this.newTaskTitle, completed: false });
    this.newTaskTitle = '';
  }

  updateTask(index: number, newTitle: string) {
    this.tasks[index].title = newTitle;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  toggleTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}
