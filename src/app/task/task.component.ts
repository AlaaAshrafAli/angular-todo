import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() title: string = '';
  @Input() completed: boolean = false;
  @Output() onDelete = new EventEmitter<void>();
  @Output() onUpdate = new EventEmitter<string>();
  @Output() onToggle = new EventEmitter<void>();

  updateTitle(newTitle: string) {
    this.onUpdate.emit(newTitle);
  }

  delete() {
    this.onDelete.emit();
  }

  toggle() {
    this.onToggle.emit();
  }

  editTitle: string = '';
  isEditing: boolean = false;

  startEditing() {
    this.isEditing = true;
    this.editTitle = this.title;
  }

  finishEditing() {
    this.isEditing = false;
    this.updateTitle(this.editTitle);
  }
}
