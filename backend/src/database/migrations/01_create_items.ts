import knex from 'knex';

export async function up(Knex: knex) {
  return Knex.schema.createTable('items', table => {
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('title').notNullable();
  })
}

export async function down(Knex: knex) {
  return Knex.schema.dropTable('items');
}