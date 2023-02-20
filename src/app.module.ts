/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaService } from './db/prisma.service';
import { AuthModule } from './user/auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [PrismaService],
  exports:[]
})
export class AppModule {}
