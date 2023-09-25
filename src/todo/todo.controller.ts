import { Controller, Get, Post, Body, ValidationPipe, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreteTodoDto } from '../dto/create-todo.dto';
import { todo_status } from 'src/entity/todo.entity';
import { TodoStatusValidationPipe } from 'src/pipes/todo_statusValidationsPipe';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/auth/user.decorator';
import { UserEntity } from 'src/entity/user.entity';

//http://localhost:3000/api/todos
@Controller('todos')
@UseGuards(AuthGuard())
export class TodoController {

    constructor(private todoService: TodoService) { }
    //get the todo list form to doservices
    @Get()
    getalltodos(@User() user: UserEntity) {

        
        return this.todoService.getalltodos(user);

    }
    //create new todo
    @Post()
    createNewTodo(@Body(ValidationPipe) body: CreteTodoDto, @User() user: UserEntity) {

        return this.todoService.createNewTodo(body, user);
    }

    @Patch(':id')
    updatetodo(@Body('status', TodoStatusValidationPipe) status: todo_status,
        @Param('id') id: number) {
        return this.todoService.updatetodo(id, status)
    }

    @Delete(':id')
    deleteTodo(@Param('id') id: number) {
        return this.todoService.deletetodo(id);
    }

}
