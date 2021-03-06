import { Controller, Post, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
	constructor(private userService: UserService) {}

	@Post()
	createUser() {
		return this.userService.createUser();
	}

	@Get()
	getUser() {
		return this.userService.findByUsername();
	}
}
