import { Body, Get, JsonController, Param, Post } from 'routing-controllers';
import { UserService } from '../service/UserService';
import { User } from '../entity/User';

@JsonController('/users')
export class UserController {
    private userService: UserService = new UserService();

    @Get('/')
    async getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Get('/:id')
    async getOne(@Param('id') id: string) {
        return await this.userService.getUser(id)
    }

    @Post('/create')
    async createUser(@Body() user: Partial<User>) {
        return this.userService.createUser(user);
    }
}