import { IsNotEmpty,MaxLength,IsDate,IsOptional } from 'class-validator';

export class CreteTodoDto {
    @IsNotEmpty()
    @MaxLength(15 , {message: 'Your Title is too Long!'})
    title: string;

    @IsNotEmpty()
    description: string;

    @IsDate()
    @IsOptional()
    createDate
}