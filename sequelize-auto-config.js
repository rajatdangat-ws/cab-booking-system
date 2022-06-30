const path = require('path');
const output = path.join(__dirname, './lib/models');
const options = {
    directory: output,
    caseProp: 'c',
    lang: 'js',
    spaces: false,
    indentation: 1,
    skipTables: ['SequelizeMeta'],
    additional: {
        timestamps: false
    }
};

const mysql = {
    dbname: 'temp_dev',
    user: 'root',
    pass: 'password',
    options: { dialect: 'mysql' },
    autoOptions: { dialect: 'mysql', ...options }
};

module.exports = mysql;
