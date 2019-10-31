exports.seed = function(knex) {
  return knex('bagel').del().then(function () {
      return knex('bagel').insert([{
            type: 'Everything',
            rating: 2,
        },{
            type: '4 Cheese',
            rating: 10,
        }]);
    });
};
