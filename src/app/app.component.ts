import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}

  title = 'todo-app';

  inputValue = '';

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

  onAddTask(): void {
    this.todoList = [
      ...this.todoList,
      {
        id: this.todoList.length + 1,
        name: this.inputValue,
        isCompleted: false,
      },
    ];
  }

  onChange = (value: string) => {
    this.inputValue = 'Haha';
  };
}
