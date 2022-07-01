import express from 'express'
import 'reflect-metadata';
import bodyparser from 'body-parser'
import {useExpressServer} from 'routing-controllers'
// import { CustomerController } from './controllers/CustomerController';
import { UserController } from './controller/UserController';
import {createDbConnection} from './service/dbConnection';
import {LoggerMidleware} from './middleware/logging'
import ErrorHandlerMiddleware from './middleware/ErrorHandlerMiddleware'

const app = express();
app.use(bodyparser.json({limit: '15mb'}));
createDbConnection();
app.use(bodyparser.json({limit: '15mb'}));
app.use(LoggerMidleware);
useExpressServer(app, {
routePrefix: '/api',
cors: true,
middlewares: [ErrorHandlerMiddleware],
controllers: [UserController]
});

app.listen(3000, () =>
    console.log("Express server running at localhost port 3000"));
