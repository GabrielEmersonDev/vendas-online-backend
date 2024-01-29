import { Controller, Post, ValidationPipe } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
  @UsePipes(ValidationPipe)
  @Post()
  async login(@Body() loginDto: LoginDto): ReturnUserDto {}
}
