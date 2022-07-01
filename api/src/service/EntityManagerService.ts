import { getConnection, EntityManager } from 'typeorm';

export class EntityManagerService {
    private entityManager: EntityManager = getConnection().createEntityManager();

    public getEntityManager(): EntityManager {
        return this.entityManager;
    }
}
