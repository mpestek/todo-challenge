import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoItem } from '../../models/todo-item.model';

@Component({
  selector: 'app-todo-item-manage',
  templateUrl: './todo-item-manage.component.html',
  styleUrls: ['./todo-item-manage.component.css']
})
export class TodoItemManageComponent implements OnChanges {

  @Input() todoItem: TodoItem;

  @Output() save = new EventEmitter<TodoItem>();
  @Output() cancel = new EventEmitter<void>();

  todoItemFormGroup: FormGroup;

  constructor(
    formBuilder: FormBuilder
  ) { 
    this.todoItemFormGroup = formBuilder.group({
      'id': [null],
      'name': [null, [Validators.required]],
      'description': [null, [Validators.required]],
      'completed': new FormControl(false),
      'favourite': new FormControl(false),
      'expirationDate': [null, [Validators.required]],
    });
  }

  ngOnChanges(): void {
    this.handleInputChanges();
  }

  handleInputChanges() {
    if (this.todoItem) {
      this.todoItemFormGroup.patchValue(this.todoItem);
    } else {
      this.todoItemFormGroup.reset();
    }
  }

  saveItem() {
    if (this.todoItemFormGroup.valid) {
      this.save.emit(this.todoItemFormGroup.value);
    }
  }

  cancelChanged() {
    this.cancel.emit();
  }
}
