import express from 'express'
import 'reflect-metadata';
import bodyparser from 'body-parser'
import {useExpressServer} from 'routing-controllers'
// import { CustomerController } from './controllers/CustomerController';
import { UserController } from './controller/UserController';
import {createDbConnection} from './service/dbConnection';

const app = express();
app.use(bodyparser.json({limit: '15mb'}));
createDbConnection();
useExpressServer(app, {
controllers: [UserController]
});

app.listen(3000, () =>
    console.log("Listening at localhost port 3000"));
