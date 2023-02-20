/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/db/prisma.service";


@Injectable()

export class LoginRepository {
    constructor(private readonly prisma:PrismaService){}

    async findUserByEmail(email:string){
        return await this.prisma.clients.findFirstOrThrow({where:{email}})
    }
}