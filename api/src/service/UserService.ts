import { BadRequestError, NotFoundError } from 'routing-controllers';
import { EntityManagerService } from './EntityManagerService';
import { RequestValidationService } from './RequestValidationService'
import { User } from '../entity/User'

export class UserService {
    entityManagerService = new EntityManagerService();
    requestValidationService = new RequestValidationService();
    async getAllUsers(): Promise<User[]> {
        try {
            const user = this.entityManagerService.getEntityManager().find(User)
            return user;
        } catch (error) {
            throw error;
        }
    }

    async getUser(userId: string) {
        try {
            if (!RequestValidationService.isUserIdValid(userId)) throw new BadRequestError("UserId is required")

            const user = await this.entityManagerService.getEntityManager().findOneById(User, userId);
            if (!user) {
                throw new NotFoundError();
            }
            return user;
        } catch (error) {
            throw error;
        }
    }

    async createUser(user: Partial<User>) {
        try {
            if (user.userId) {
                const checkUser = await this.entityManagerService.getEntityManager().findOneById(User, user.userId);
                if (checkUser) {
                    throw new Error("User with the same userId already exist");
                } else {
                    const createdUser = this.entityManagerService.getEntityManager().create(User, user);
                    const savedUser = await this.entityManagerService.getEntityManager().save(createdUser);
                    if (!savedUser) {
                        throw new Error("Counld not create user")
                    }
                    return savedUser;
                }
            } else throw new BadRequestError("UserId is required")
        } catch (error) {
            throw error;
        }
    }
}