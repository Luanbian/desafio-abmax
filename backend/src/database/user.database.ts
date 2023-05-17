import { IUserDatabase, inputUser } from "../interfaces/interface";
import knex from "../config/database";

export class UserDatabase implements IUserDatabase {
    private table = 'users'
    async insertUser(register: inputUser) {
        const existingUser = await knex.select('email').from(this.table).where('email', register.email);
        if(existingUser.length != 0) return Promise.reject({message: 'E-mail already used'});
        const result = await knex(this.table).insert(register);
        return result;
    }

    async listUsers() {
        const list = await knex.select('*').from(this.table);
        if(list.length == 0) return Promise.reject({message: 'no-content'});
        return list;
    }

    async update(body: inputUser, id: string) {
        const consult = await knex.select('id').from(this.table).where('id', id);
        if(consult.length == 0) return Promise.reject({message: 'not found'})
        await knex(this.table).update(body).where('id', id);
    }

    async delete(id: string) {
        const consult = await knex.select('id').from(this.table).where('id', id);
        if(consult.length == 0) return Promise.reject({message: 'not found'})
        await knex(this.table).delete().where('id', id);
    }
}