import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoItem } from '../models/todo-item.model';
import { todoListMock } from './todo-list.mock';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _todoList: TodoItem[] = todoListMock;
  private _todoListSubject = new BehaviorSubject<TodoItem[]>(this._todoList);

  public get todoList$(): Observable<TodoItem[]> {
    return this._todoListSubject.asObservable().pipe(
      map(todoList => todoList.sort(this.todoSortCompareFn))
    );
  }

  private setTodoList(todoList: TodoItem[]) {
    this._todoList = [...todoList];
    this._todoListSubject.next(this._todoList);
  }

  delete(id: number) {
    this.setTodoList(this._todoList.filter(item => item.id !== id));
  }

  edit(updatedItem: TodoItem) {
    const index = this._todoList.findIndex(item => item.id === updatedItem.id);

    const newTodoList = [
      ...this._todoList.slice(0, index),
      updatedItem,
      ...this._todoList.slice(index + 1, this._todoList.length)
    ];
    
    this.setTodoList(newTodoList);
  }

  create(newItem: TodoItem) {
    // I dont have a lot of time to think this through
    // Gonna increment biggest id by 1 for new item id
    const maxId = Math.max(...this._todoList.map(item => item.id));
    this.setTodoList([
      ...this._todoList, 
      {
        ...newItem,
        id: maxId + 1,
      }
    ]);
  }

  todoSortCompareFn = (first, second) => {
    if (first.completed && !second.completed) {
      return -1;
    } else if (!first.completed && second.completed) {
      return 1;
    } else if (first.favourite && !second.favourite) {
      return -1;
    } else if (!first.favourite && second.favourite) {
      return 1;
    } else if (first.expirationDate.getTime() < second.expirationDate.getTime()) {
      return -1;
    } else {
      return 1;
    }
  };
}
