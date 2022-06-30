import {Body, Get, JsonController, Post} from 'routing-controllers';
import { UserService } from '../service/UserService';
import { User } from '../entity/User';

@JsonController('/users')
export class UserController {
    private userService: UserService = new UserService();

    @Get('/')
    async getAllUsers() {

        console.log("organisationId: " + "organisationId");
        return this.userService.getAllUsers();
        // return "Hello"
    }

    @Post('/create')
    async createUser(@Body()user: Partial<User>) {
        return this.userService.createUser(user);        
    }
}