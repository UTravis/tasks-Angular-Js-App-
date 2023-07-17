import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task: any;
  @Output() rvTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleEmitter: EventEmitter<Task> = new EventEmitter()

  faTimesIcon = faTimes;

  rmTask(task: any){
    this.rvTask.emit(task)
  }

  onToggle(task: Task) {
    this.onToggleEmitter.emit(task)
  }
}
