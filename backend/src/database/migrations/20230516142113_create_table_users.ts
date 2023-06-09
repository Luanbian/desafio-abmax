import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', (table) => {
        table.increments('id')
        table.string('firstName')
        table.string('lastName')
        table.string('email')
        table.string('phone')
        table.string('gender')
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}

