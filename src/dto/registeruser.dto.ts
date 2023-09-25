import { MinLength, IsNotEmpty, MaxLength, Matches } from 'class-validator';

export class RegisterUserDto {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(12)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'password is too weak' })
    password: string;
}