import { IsNotEmpty } from 'class-validator';

export class useroginDto {

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;
}