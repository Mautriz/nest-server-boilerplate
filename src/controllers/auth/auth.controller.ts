import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('AUTH')
@Controller()
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('login')
	login(@Body() loginDto: LoginDto): Promise<LoginDto> {
		return this.authService.login(loginDto);
	}
}
