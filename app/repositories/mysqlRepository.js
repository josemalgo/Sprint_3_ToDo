import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'swordfish',
    database: 'sql_store'
});

connection.connect();

const createDatabase = async () => {

    try {
        await connection.query(
            "DROP DATABASE IF EXISTS `sql_ToDo`;"
        );

        await connection.query(
            "CREATE DATABASE `sql_ToDo`;"
        );
    }
    catch (err) {
        throw err;
    }

}

createDatabase();


