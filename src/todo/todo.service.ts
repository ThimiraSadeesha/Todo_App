import { Injectable, Body, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { todo_entity, todo_status } from 'src/entity/todo.entity';
import { Repository } from 'typeorm';
import { CreteTodoDto } from '../dto/create-todo.dto';
import { UserEntity } from 'src/entity/user.entity';

@Injectable()
export class TodoService {

    constructor(@InjectRepository(todo_entity) private repo: Repository<todo_entity>) { }

    async getalltodos(user: UserEntity) {
        const query = await this.repo.createQueryBuilder('todo');
        query.where('todo.userId=:userId', { userId: user.id });
        try {

            //
            const todos = await query.select([
                'todo.id AS todoId',
                'todo.status',
                'todo.title',
                'todo.description'
            ]).getRawMany();

            return todos;
        }
        catch (err) {
            throw new NotFoundException('No Todo found :(');
        }
        //return await this.repo.find();
    }

    async createNewTodo(@Body() body: CreteTodoDto, user: UserEntity) {
        const { title, description } = body;
        const todo = new todo_entity();
        todo.title = title;
        todo.description = description;
        todo.status = todo_status.OPEN;
        todo.userId = user.id;
        this.repo.create(todo);
        return await this.repo.save(todo);
    }
    async updatetodo(id: number, status: todo_status) {

        try {

            await this.repo.update({ id }, { status });
            return await this.repo.findOneBy({ id });

        } catch (err) {
            throw new InternalServerErrorException('Something went Wrong!');
        }

    }
    async deletetodo(id: number) {

        try {
            return await this.repo.delete({ id });
        } catch (err) {

            throw new InternalServerErrorException('Something went Wrong!');

        }


    }


}
