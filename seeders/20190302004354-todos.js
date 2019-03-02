'use strict';
const faker = require('faker');
const Todo = require('../config/sequelize.config').Todo;
module.exports = {
    up: (queryInterface, Sequelize) => {
        return Todo.findAndCountAll({
            attributes: ['id']
        }).then(async todos => {

            const todoCount = todos.count;
            let todosToSeed = 36;
            todosToSeed -= todoCount;
            for (let i = 0; i < todosToSeed; i++) {
                await Todo.create({
                    title: faker.lorem.words(faker.random.number({min: 2, max: 5})),
                    // you can also use faker.lorem.text()
                    description: faker.lorem.sentences(faker.random.number({min: 5, max: 10})),
                    completed: faker.random.boolean() && faker.random.boolean() // make it harder to be true
                }).then(todo => {

                }).catch(err => {
                    throw err;
                })
            }

        }).catch(err => {
            throw err;
        });
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
    }
};
