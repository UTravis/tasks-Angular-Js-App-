import { Component, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() submitEmitter = new EventEmitter()

  text: string = '';
  day: string = '';
  reminder: boolean = false;

  showAddTask: boolean = false;
  subscription: any;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle()
    .subscribe((value) => (this.showAddTask = value))
  }

  onSubmit() {
    if(!this.text){
      alert('Please add a task')
      return;
    }

    if(!this.day){
      alert('Please add a day')
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.submitEmitter.emit(newTask)

    // Clearing form after
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
