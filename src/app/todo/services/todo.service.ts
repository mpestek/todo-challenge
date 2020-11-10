import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TodoItem } from '../models/todo-item.model';
import { todoListMock } from './todo-list.mock';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _todoList: TodoItem[] = todoListMock;
  private _todoListSubject = new BehaviorSubject<TodoItem[]>(this._todoList);

  public get todoList$(): Observable<TodoItem[]> {
    return this._todoListSubject.asObservable();
  }

  private setTodoList(todoList: TodoItem[]) {
    this._todoList = [...todoList];
    this._todoListSubject.next(this._todoList);
  }

  delete(name: string) {
    this.setTodoList(this._todoList.filter(item => item.name !== name));
  }
}
