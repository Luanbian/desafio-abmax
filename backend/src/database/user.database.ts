import { IUserDatabase, inputNewUser } from "../interfaces/interface";
import knex from "../config/database";

export class UserDatabase implements IUserDatabase {
    public dbName = 'users'
    async insertUser(register: inputNewUser) {
        const result = await knex(this.dbName).insert(register);
        return result;
    }
}