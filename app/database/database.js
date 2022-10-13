import mysql from 'mysql2/promise';
import { Sequelize } from 'sequelize';
import * as jsonRepository from '../repositories/jsonRespository.js';
import * as mysqlRepository from '../repositories/mysqlRepository.js';
import {STATE} from '../enum/stateEnum.js';
import { DataTypes } from 'sequelize';

export const sequelize = new Sequelize("sql_ToDO", "root", "swordfish", {
    host: "localhost",
    dialect: "mysql"
});

export const TaskModelSQL = sequelize.define("task", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING
    },
    user: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.STRING,
        defaultValue: STATE.PENDING
    },
    createdAt: {
        type: DataTypes.STRING,
        defaultValue: new Date().toLocaleTimeString()
    },
    completedAt: {
        type: DataTypes.STRING,
        defaultValue: null
    }
}, {
    timestamps: false
});

export const createMySQLDatabase = async () => {

    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'swordfish',
        });

        connection.connect();

        await connection.query(
            "DROP DATABASE IF EXISTS `sql_ToDo`;"
        );

        await connection.query(
            "CREATE DATABASE `sql_ToDo`;"
        );

        connection.end();


    }
    catch (err) {
        throw err;
    }
}

export let DB_PROVIDER = jsonRepository;

export const selectDatabase = async (option) => {

    switch (option) {
        case 1:
            DB_PROVIDER = jsonRepository;
            break;
        case 2:
            DB_PROVIDER = mysqlRepository;
            createMySQLDatabase();
            await sequelize.sync({force: false});
            break;
        case 3:
            break;
    }
}