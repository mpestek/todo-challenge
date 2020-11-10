import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { RemoveItemConfirmationDialogComponent } from './components/remove-item-confirmation-dialog/remove-item-confirmation-dialog.component';
import { TodoItem } from './models/todo-item.model';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoItems$: Observable<TodoItem[]> = this.todoService.todoList$;
  tableColumns = [
    'name', 
    'description', 
    'completed', 
    'favourite', 
    'expirationDate', 
    'actions'
  ];

  isSidebarOpen = false;
  selectedItem: TodoItem = null;

  constructor(
    private todoService: TodoService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openSidebar(): void {
    this.selectedItem = null;
    this.isSidebarOpen = true;
  }
  
  closeSidebar(): void {
    this.isSidebarOpen = false;
  }

  saveItem(item: TodoItem) {
    if (this.selectedItem) {
      this.todoService.edit(item);
    } else {
      this.todoService.create(item);
    }

    this.isSidebarOpen = false;
  }

  editItem(item: TodoItem): void {
    if (item) {
      this.selectedItem = item;
      this.isSidebarOpen = true;
    }
  }

  deleteItem(id: number) {
    let dialogRef = this.dialog.open(RemoveItemConfirmationDialogComponent, {
      'width': '350px',
      'height': '160px'
    });

    dialogRef.afterClosed().subscribe((shouldRemove: boolean) => {
      if (shouldRemove) {
        this.todoService.delete(id);
      }
    });
  }

  isExpired(expirationDate: Date) {
    return Date.now() > expirationDate.getTime();
  }
}
