import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Task } from '../models/task.model';
import { MatDialog } from '@angular/material/dialog';
import { AddTask } from '../../ngrx-store/board-column.actions';
import { AppState } from '../../ngrx-store/board-column.state';

@Component({
  selector: 'app-task-add-button',
  templateUrl: './task-add-button.component.html',
  styleUrls: ['./task-add-button.component.scss']
})
export class TaskAddButtonComponent implements OnInit {

  @Input() colId!: string;
  @Input() tasks!: Task[]

  showAddNewTaskInput = false;  // to display the form only when add a task button is clicked
  taskTitleFormControl:any = new FormControl("", Validators.required);

  constructor(
    public dialog: MatDialog, private store: Store<AppState>,

  ) {

  }

  ngOnInit(): void {

  }

  addTask(): void {
    let lastCardId = 'task-0'
    let newCardId = ''
    for (let item of this.tasks) {
      item.id === lastCardId ? newCardId = 'task-1' : newCardId = `task-${parseInt(this.tasks[this.tasks.length - 1].id.split("-")[1]) + 1}`
    }

    const newTask = new Task(newCardId, this.taskTitleFormControl.value, "");
    this.store.dispatch(new AddTask({
      colId: this.colId,
      newTask
    }));
    this.showAddNewTaskInput = false

  }

  // function to cancel task addition by disappearing the the form 
  cancelAddition() {
    this.showAddNewTaskInput = false

  }

  // function to disply the user form when "Add a Task" button is clicked 
  showAddTask(): void {
    this.showAddNewTaskInput = true
  }
}
