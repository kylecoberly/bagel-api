exports.up = function(knex) {
    return knex.schema.createTable("bagel", table => {
        table.increments()
        table.string("type")
        table.integer("rating")
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("bagel")
};
