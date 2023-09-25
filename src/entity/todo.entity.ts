import { Entity } from "typeorm";
import { PrimaryGeneratedColumn, Column } from "typeorm";
@Entity('todos')
export class todo_entity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: todo_status;

    @Column()
    userId:number;




}

export enum todo_status {
    OPEN = 'OPEN',
    WIP = 'WIP',
    COMPLETED = 'COMPLETED'
}