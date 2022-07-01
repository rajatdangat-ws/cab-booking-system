const SequelizeAuto = require('sequelize-auto');

// Edit your database settings in config.js
const config = require('./sequelize-auto-config');

var auto = new SequelizeAuto(
    config.dbname,
    config.user,
    config.pass,
    config.autoOptions
);

auto.run().then(data => {
    const tableNames = Object.keys(data.tables);
    console.log('Models for the following tables are generated');
    console.log(tableNames); // table list
    // console.log(data.foreignKeys); // foreign key list
    // console.log(data.text)         // text of generated files
});
