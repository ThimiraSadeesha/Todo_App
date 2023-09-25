import {PassportStrategy} from '@nestjs/passport';
import {ExtractJwt, Strategy} from 'passport-jwt';
import { UserEntity } from 'src/entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UnauthorizedException } from '@nestjs/common';



export class JwtCustomStrategy  extends PassportStrategy (Strategy){
    constructor(@InjectRepository(UserEntity)private repo :Repository<UserEntity>){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'MaximImpressions.com',
        });

    }

    async validate(payload:{username:string}){
        const {username} = payload;
        const user = await this.repo.findOneBy({username});
        if(!user){
            throw new UnauthorizedException('Invalid Username');
        }
        return user;
    }
}