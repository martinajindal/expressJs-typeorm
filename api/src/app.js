"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const body_parser_1 = __importDefault(require("body-parser"));
const routing_controllers_1 = require("routing-controllers");
const UserController_1 = require("./controller/UserController");
const dbConnection_1 = require("./service/dbConnection");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json({ limit: '15mb' }));
(0, dbConnection_1.createDbConnection)();
(0, routing_controllers_1.useExpressServer)(app, {
    controllers: [UserController_1.UserController]
});
app.listen(3000, () => console.log("Listening at localhost port 3000"));
