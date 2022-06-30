"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
class UserService {
    constructor() {
        this.entityManager = (0, typeorm_1.getConnection)().createEntityManager();
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("getAllUsers");
                const user = this.entityManager.find(User_1.User);
                console.log("user:: " + user);
                return user;
            }
            catch (error) {
                throw error;
            }
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("createUser");
                const createduser = this.entityManager.create(User_1.User, user);
                return yield this.entityManager.save(createduser);
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.UserService = UserService;
