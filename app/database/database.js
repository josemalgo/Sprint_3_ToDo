import mysql from 'mysql2/promise';
import { Sequelize } from 'sequelize';
import mongoose from 'mongoose';
import * as jsonRepository from '../repositories/jsonRespository.js';
import * as mysqlRepository from '../repositories/mysqlRepository.js';
import * as mongoRepository from '../repositories/mongoRepository.js';
import { STATE } from '../enum/stateEnum.js';
import { DataTypes } from 'sequelize';
import * as config from '../config/config.js'

export let DB_PROVIDER = jsonRepository;

export const selectDatabase = async (option) => {

    switch (option) {
        case 1:
            DB_PROVIDER = jsonRepository;
            break;
        case 2:
            DB_PROVIDER = mysqlRepository;
            createMySQLDatabase();
            await sequelize.sync({ force: false });
            break;
        case 3:
            DB_PROVIDER = mongoRepository;
            connectMongoose();
            break;
    }
}

export const sequelize = new Sequelize(
    config.mysqlConfig.DB_NAME, config.mysqlConfig.DB_USER, config.mysqlConfig.DB_PASSWORD,
    {
        host: config.mysqlConfig.DB_HOST,
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

const createMySQLDatabase = async () => {

    try {
        const connection = await mysql.createConnection({
            host: config.mysqlConfig.DB_HOST,
            user: config.mysqlConfig.DB_USER,
            password: config.mysqlConfig.DB_PASSWORD,
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

const connectMongoose = async () => {
    const uri = config.mongoConfig.DB_URI;

    try {
        await mongoose.connect(uri);
    } catch (error) {
        throw error;
    }
};

export const disconectDB = () => {
    if(DB_PROVIDER == mysqlRepository) {
        sequelize.close();
    }
    if(DB_PROVIDER == mongoRepository ) {
        mongoose.disconnect();
    }
}

