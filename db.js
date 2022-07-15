const {Sequelize} = require('sequelize');


const DB_NAME = 'roma00041';
const DB_USER =  'roma00041';
const DB_PASSWORD = '**';
const DB_HOST = 'lara777.zzz.com.ua';
const DB_PORT = '3306';


const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect:  'mysql',
    port: DB_PORT
  });

module.exports = sequelize; 
