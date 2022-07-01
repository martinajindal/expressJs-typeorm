import { EntityManagerService } from './EntityManagerService';

export class RequestValidationService {
    entityManagerService = new EntityManagerService(); 
    public static isUserIdValid(userId: string) {
            if (userId) {
                return true;
            }
            return false;
    }
    // public async isUserExist(user: Partial<User>) {
    //     try {
    //         if (RequestValidationService.isUserIdValid(user)) {
    //             return false;
    //         } else {
    //             const checkUser = await this.entityManagerService.getEntityManager().findOneById(User, user.userId);
    //             if (checkUser) {
    //                 return true;
    //                 // throw new Error("User with the same userId already exist");
    //             }
    //             return false;
    //         }
    //     } catch(error) {
    //         throw error;
    //     }
    // }
}