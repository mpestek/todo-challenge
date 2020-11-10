import { TodoItem } from "../models/todo-item.model";

export const todoListMock: TodoItem[] = [
  {
    name: 'TodoItem1',
    description: 'This is TodoItem1',
    completed: true,
    favourite: false,
    expirationDate: new Date()
  },
  {
    name: 'TodoItem2',
    description: 'This is TodoItem2',
    completed: true,
    favourite: true,
    expirationDate: new Date()
  },
  {
    name: 'TodoItem3',
    description: 'This is TodoItem3',
    completed: false,
    favourite: true,
    expirationDate: new Date()
  },
  {
    name: 'TodoItem4',
    description: 'This is TodoItem4',
    completed: false,
    favourite: false,
    expirationDate: new Date()
  },
  {
    name: 'TodoItem5',
    description: 'This is TodoItem5',
    completed: true,
    favourite: false,
    expirationDate: new Date()
  },
  {
    name: 'TodoItem6',
    description: 'This is TodoItem6',
    completed: true,
    favourite: false,
    expirationDate: new Date()
  },
];