/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/db/prisma.service';
import { AuthService } from './auth/auth.service';
import { LoginRepository } from './repositories/login-repository';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers:[UserController],
  providers: [PrismaService, UserService, LoginRepository, AuthService, JwtService],
  exports:[],
})
export class UserModule {}
