'use strict';

const carTypes = {
    sedan: 'sedan',
    suv: 'suv',
    hatchback: 'hatchback',
    micro: 'micro'
};

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('cabs', [
            {
                current_location: Sequelize.fn(
                    'ST_GeomFromText',
                    'POINT(0.1 -1.01)'
                ),
                car_model: carTypes.sedan,
                vehicle_number: 'mh14cd3214'
            },
            {
                current_location: Sequelize.fn(
                    'ST_GeomFromText',
                    'POINT(56.31 2.81)'
                ),
                car_model: carTypes.micro,
                vehicle_number: 'mh14dg7624'
            },
            {
                current_location: Sequelize.fn(
                    'ST_GeomFromText',
                    'POINT(11.1 1.176)'
                ),
                car_model: carTypes.hatchback,
                vehicle_number: 'mh14fe8273'
            },
            {
                current_location: Sequelize.fn(
                    'ST_GeomFromText',
                    'POINT(9.1 2.1)'
                ),
                car_model: carTypes.sedan,
                vehicle_number: 'mh14hi1174'
            },
            {
                current_location: Sequelize.fn(
                    'ST_GeomFromText',
                    'POINT(10 5.3)'
                ),
                car_model: carTypes.suv,
                vehicle_number: 'mh14bc2327'
            }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        queryInterface.bulkDelete('cabs', null, {});
    }
};
