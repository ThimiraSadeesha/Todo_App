import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;
  deleteTodo(id: number) {
    throw new Error('Method not implemented.');
  }
  deleteTask(taskId: number) {
    throw new Error('Method not implemented.');
  }
  updateTodoStatus(taskid: number, value: any) {
    throw new Error('Method not implemented.');
  }
  createTodo(title: any, description: any) {
    throw new Error('Method not implemented.');
  }
  getAllTodos() {
    throw new Error('Method not implemented.');
  }
  jwtUserToken: any;

  constructor() { }
}
