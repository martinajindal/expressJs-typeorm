import { getConnection } from 'typeorm';
import {User} from '../entity/User'
// import { getDbConnection } from './dbConnection';

export class UserService {
    private entityManager = getConnection().createEntityManager();
    
    async getAllUsers(): Promise<User[]> {
        try {
            console.log("getAllUsers");
           const user = this. entityManager.find(User)
            // const user = await this.entityManager.find(User);
            console.log("user:: " + user);
            return user;
        } catch(error) {
            throw error;
        }
    }

    async createUser(user: Partial<User>) {
        try {
        console.log("createUser");
        const createduser = this.entityManager.create(User, user);
        return await this.entityManager.save(createduser);
        } catch(error) {
            throw error;
        }
    }
}