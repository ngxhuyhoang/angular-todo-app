import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app';

  todoList = [
    {
      id: 1,
      name: 'Learn Angular',
      isCompleted: true,
    },
    {
      id: 2,
      name: 'Learn ReactJS',
      isCompleted: false,
    },
    {
      id: 3,
      name: 'Learn Vue',
      isCompleted: false,
    },
  ];

  onSubmit(): void {
    console.log('Hello World');
  }
}
