import { Component } from '@angular/core';
import { Task } from './interface/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  newTask: string = '';
  tasks: Task[] = [];

  addTask() {
    if (this.newTask) {
      this.tasks.push({ name: this.newTask, isCompleted: false });
      this.newTask = '';
    }
  }
}
