
import {createConnection, getConnectionOptions} from 'typeorm'

export const createDbConnection = async() => {
    console.log('Creating new DB connection');
    const options = await getConnectionOptions();
    (options as any).connectionLimit = 2;
    return await createConnection(options);
}

// {
//     "type": "mysql",
//     "host": "localhost",
//     "port": 3306,
//     "username": "root",
//     "password": "confidential",
//     "database": "dev",
//     "entities": ["src/entity/*.ts"],
//     "logging": true,
//     "synchronize": true
//   } 