import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TodoComponent } from '../todo/todo.component';
import { ApiService } from '../services/api.service';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todos: any = [];
  filteredTodos: any[] = [];
  completed_todo: any;

  constructor(private apiService: ApiService,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getalltodo();

  }

  getalltodo() {
    this.apiService.getAllTodos().subscribe((todos) => {
      this.todos = todos;
      this.filteredTodos = this.todos;
    });


  }

  filterChanged(ev: MatSelectChange) {


    if (ev.value === 'COMPLETED') {
      const completed_todo = this.todos.filter((t: { todo_status: string; }) => t.todo_status === 'COMPLETED');
      this.filteredTodos = completed_todo;

    }
    else if (ev.value === 'WIP') {
      const pending_todo = this.todos.filter((t: { todo_status: string; }) => t.todo_status === 'WIP');
      this.filteredTodos = pending_todo;

    }
    else if (ev.value === 'OPEN') {
      const todo = this.todos.filter((t: { todo_status: string; }) => t.todo_status === 'OPEN');
      this.filteredTodos = todo;

    }
    else {
      this.filteredTodos = this.todos;
    }
    return this.completed_todo;

  }

  openDialog() {
    const dialogRef = this.dialog.open(TodoComponent, {
      width: '500px',
      hasBackdrop: true,
      role: 'dialog',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(data => {

      this.apiService.createTodo(data.title, data.description).subscribe((result: any) => {
        this.todos.push(result);
        this.filteredTodos = this.todos;
        window.location.reload();
      });
    });
  }

  updatetodo(ev: MatSelectChange, todoId: number, index: number) {
    const value = ev.value;
    this.apiService.updatetodo(value, todoId).subscribe(todo => {
      this.todos[index] = todo;
      this.filteredTodos = this.todos;
      window.location.reload();
    });
  }


  deletetodo(id: number) {
    if (confirm('Do you want to remove the Todo?')) {
      this.apiService.deletetodo(id).subscribe((result: any) => {
        if (result.success) {
          this.todos = this.todos.filter((t: any) => t.id !== id);
          this.filteredTodos = this.todos;

        }
        alert('Delete was successful');
        window.location.reload();
      });
    } else {

    }
  }


}