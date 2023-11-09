import Sequelize from "sequelize"
import dotenv from 'dotenv/config';

const db = new Sequelize(process.env.DB_URI,{
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false

});

export default db;