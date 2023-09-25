import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { todo_entity } from 'src/entity/todo.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([todo_entity]),
    AuthModule
  ],

  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule { }
