/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { UserDTO } from "src/class/user-dto";
import { PrismaService } from "src/db/prisma.service";
import { UseRepository } from "./repositories/user-repository";
import * as bcrypt from 'bcrypt';
import { BadRequestException, UnauthorizedException } from "@nestjs/common/exceptions";
import { AuthService } from "./auth/auth.service";
import { LoginRepository } from "./repositories/login-repository";

@Injectable()
export class UserService implements UseRepository {

    constructor (
        private  prisma: PrismaService, 
        private  authService:AuthService,
        private loginRepository: LoginRepository
    ){}

  
    async register(userDTO:UserDTO): Promise<any> {

        const existsEmail = await this.prisma.clients.findFirst({
            where:{
                email: userDTO.email
            }
        })

        if(existsEmail){
            throw new BadRequestException('Email already exists')
        }
        const hash = bcrypt.hashSync(userDTO.password, 10)
        const createUser = await this.prisma.clients.create({data:{
            email: userDTO.email,
            password:hash
        }})
        console.log(hash)
        return createUser
    }
    
    list(): Promise<any> {
        return this.prisma.clients.findMany()
    }

    async login(userDTO:UserDTO): Promise<any> {

        const findEmail = await this.loginRepository.findUserByEmail(userDTO.email);

        const result = bcrypt.compareSync(userDTO.password, findEmail.password)

        if(result){
            return this.authService.login(findEmail)
        }else{
            throw new UnauthorizedException('Email or password invalid')
        }
    }
    
    async findEmail(email:string){
        return await this.prisma.clients.findFirstOrThrow({where:{email}})
    }
    

    async delete(id: string): Promise<any> {
        
        const destroy = await this.prisma.clients.findUnique({
            where:{
                id
            }
        })
        if(!destroy){
            throw new BadRequestException('Id not found')
        }
        return await this.prisma.clients.delete({
            where: {id}
        })
    }

    
}