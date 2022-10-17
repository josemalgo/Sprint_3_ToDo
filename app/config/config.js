import * as dotenv from 'dotenv';
dotenv.config();

export const mysqlConfig = {
    DB_HOST: process.env.DB_MYSQL_HOST,
    DB_USER: process.env.DB_MYSQL_USER,
    DB_PASSWORD: process.env.DB_MYSQL_PASSWORD,
    DB_NAME: process.env.DB_MYSQL_NAME
};

export const mongoConfig = {
    DB_URI: process.env.DB_MONGO_URI,
    DB_USER: process.env.DB_MONGO_USER,
    DB_PASSWORD: process.env.DB_MONGO_PASSWORD,
}