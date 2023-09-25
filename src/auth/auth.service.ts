import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterUserDto } from 'src/dto/registeruser.dto';
import { UserEntity } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { useroginDto } from 'src/dto/userlogin.dto';
import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserEntity) private repo: Repository<UserEntity>,private jwt:JwtService) { }



    async userRegistration(registerDto: RegisterUserDto) {
        const { username, password } = registerDto;

        const hashed = await bcrypt.hash(password, 12);
        const salt = await bcrypt.getSalt(hashed);
        console.log(salt);

        const user = new UserEntity();
        user.username = username;
        user.password = hashed;
        user.salt = salt;

        this.repo.create(user);
       

        try {
            return await this.repo.save(user);
        } catch (err) {
            throw new InternalServerErrorException('Ooops Somthing went wrong :(')
        }
    }

    async login(userlogdto:useroginDto) {
        // console.log(userlogdto);
        // return userlogdto;

        const {username,password} = userlogdto;
        const user = await this.repo.findOneBy({username});
        if(!user){
            throw new UnauthorizedException('Invalid Username');
        }
        //const ispasswordMatch = await bcrypt.compare(password,user.password); 
        const ispasswordMatch = await user.verifypassword(password); 

        if(ispasswordMatch){
            const jwtPayload={username};
            const jwtToken = await this.jwt.signAsync(jwtPayload,{expiresIn:'1d',algorithm:'HS512'});
            return {token:jwtToken};
           //return{ 'message':'Login Successfull'}
        }else{
            throw new UnauthorizedException('Invalid Credentials :(');
        }


    }
}
