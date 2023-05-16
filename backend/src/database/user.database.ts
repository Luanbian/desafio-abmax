import { IUserDatabase, inputNewUser } from "../interfaces/interface";
import knex from "../config/database";

export class UserDatabase implements IUserDatabase {
    public dbName = 'users'
    async insertUser(register: inputNewUser) {
        const existingUser = await knex.select('email').from(this.dbName).where('email', register.email);
        if(existingUser.length != 0) return Promise.reject({message: 'E-mail já registrado'});
        const result = await knex(this.dbName).insert(register);
        return result;
    }

    async listUsers() {
        const list = await knex.select('*').from(this.dbName);
        if(list.length == 0) return Promise.reject({message: 'no-content'});
        return list;
    }
}