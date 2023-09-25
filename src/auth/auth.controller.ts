import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from 'src/dto/registeruser.dto';
import { useroginDto } from 'src/dto/userlogin.dto';

//http://localhost:3000/auth/regiter
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('register')
    registration(@Body(ValidationPipe) regDto: RegisterUserDto) {
       // console.log(regDto);
       return this.authService.userRegistration(regDto)
    }

    @Post('login')
    loginUser(@Body(ValidationPipe) userlogdto:useroginDto) {
        return this.authService.login(userlogdto)
    }

}
