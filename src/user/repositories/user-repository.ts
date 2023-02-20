/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { UserDTO } from "src/class/user-dto";


@Injectable()
export abstract class UseRepository {

    abstract register(userDTO:UserDTO): Promise<any>
    abstract list (): Promise<any>
    abstract delete (id:string): Promise<any>
    abstract login(userDTO:UserDTO): Promise<any>

}