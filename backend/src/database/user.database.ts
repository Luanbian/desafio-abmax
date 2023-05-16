import { IUserDatabase, inputLogin, inputNewUser } from "../interfaces/interface";
import knex from "../config/database";

export class UserDatabase implements IUserDatabase {
    public dbName = 'users'
    async insertUser(register: inputNewUser) {
        const result = await knex(this.dbName).insert(register);
        return result;
    }

    async login(login: inputLogin) {
        const existingUser = await knex.select('email', 'password').from(this.dbName).where(login);
        if(existingUser.length != 0) return existingUser
        return Promise.reject({message: 'Usuário não encontrado'})
    }
}