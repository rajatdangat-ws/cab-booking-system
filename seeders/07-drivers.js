'use strict';

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
        queryInterface.bulkInsert('drivers', [
            {
                name: 'Cortie Elgram',
                phone_no: '9511436894',
                adhaar_no: '197066010050',
                cab_id: '6',
                email: 'celgram0@drupal.org',
                password: 'test'
            },
            {
                name: 'Nerita Furse',
                phone_no: '7562730171',
                adhaar_no: '974651989038',
                cab_id: '7',
                email: 'nfurse1@walmart.com',
                password: 'test'
            },
            {
                name: 'Lance Merveille',
                phone_no: '8122514814',
                adhaar_no: '455209890727',
                cab_id: '8',
                email: 'lmerveille2@economist.com',
                password: 'test'
            },
            {
                name: 'Perceval Joesbury',
                phone_no: '8143505792',
                adhaar_no: '929257430690',
                cab_id: '9',
                email: 'pjoesbury3@ucla.edu',
                password: 'test'
            },
            {
                name: 'Tony Spry',
                phone_no: '6733434551',
                adhaar_no: '019752905166',
                cab_id: '10',
                email: 'tspry4@prnewswire.com',
                password: 'test'
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
        queryInterface.bulkDelete('drivers', null, {});
    }
};
