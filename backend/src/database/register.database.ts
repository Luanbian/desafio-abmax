import { IRegisterDatabase, inputNewUser } from "../interfaces/interface";
import knex from "../config/database";

export class RegisterDatabase implements IRegisterDatabase {
    public dbName = 'users'
    async insertUser(register: inputNewUser) {
        const result = await knex(this.dbName).insert(register);
        return result;
    }
}