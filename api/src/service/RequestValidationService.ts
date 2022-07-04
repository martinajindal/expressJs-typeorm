import { EntityManagerService } from './EntityManagerService';

export class RequestValidationService {
    entityManagerService = new EntityManagerService();
    public static isUserIdValid(userId: string) {
        if (userId) {
            return true;
        }
        return false;
    }
}