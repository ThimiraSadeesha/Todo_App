import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { todo_entity } from './todo.entity';
import * as bcrypt from 'bcryptjs';

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;


    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    salt: string;
 
    async verifypassword(password:string){
        // const hasgh = await bcrypt.hash(password,this.salt);

        // return hasgh === this.password;
        return  await bcrypt.compare(password,this.password);  
    }
}

