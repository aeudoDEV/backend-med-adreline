/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Delete, Param } from "@nestjs/common";
import { UserDTO } from "src/class/user-dto";
import { UserService } from "./user.service";


@Controller()
export class UserController {

    constructor (private userService: UserService){}

    @Post('create')
    async create(@Body() userDTO:UserDTO){
        return await this.userService.register(userDTO)
    }

    @Get('get')
    async list(){
       return await this.userService.list();
    }

    @Delete('/:id')
    async delete(@Param('id') id:string){
        return await this.userService.delete(id)
    }

    @Post('sign')
    async login(@Body() UserDTO:UserDTO){
        return this.userService.login(UserDTO)
    }
}
