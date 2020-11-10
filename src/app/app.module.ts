import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './todo/todo.component';

import { MaterialModule } from './material.module';
import { RemoveItemConfirmationDialogComponent } from './todo/components/remove-item-confirmation-dialog/remove-item-confirmation-dialog.component';
import { TodoItemManageComponent } from './todo/components/todo-item-manage/todo-item-manage.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    RemoveItemConfirmationDialogComponent,
    TodoItemManageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
