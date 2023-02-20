/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserDTO } from 'src/class/user-dto';
import { sign } from 'jsonwebtoken';
import { LoginRepository } from '../repositories/login-repository';

@Injectable()
export class AuthService {
  constructor(
    private loginRepository: LoginRepository,
  ) {}

  async validateUser(email:string): Promise<any> {
    const user = await this.loginRepository.findUserByEmail(email);

    if (user) {
        console.log(user)
        return user;
    }
    throw new UnauthorizedException('Usario não encotrado.');
  }

  async login(userDTO: UserDTO) {
    console.log(userDTO)
    const payload = { email: userDTO.email, sub: userDTO.password };


    return sign(payload, '21i2419u40192u40129hrf0fhn1', {expiresIn:'60s'})
    
    /* return {
      access_token: this.jwtService.sign(payload),
    }; */
  }
}