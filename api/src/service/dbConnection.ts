
import {createConnection, getConnectionOptions} from 'typeorm'

export const createDbConnection = async() => {
    try {
        console.log('Creating new DB connection');
        const options = await getConnectionOptions();
        (options as any).connectionLimit = 2;
        return await createConnection(options);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}