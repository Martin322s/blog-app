const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'BLOG_APP'
});

exports.databaseConnection = () => {
    return connection.connect((error) => {
        if (error) {
            console.error('Error connecting to MySQL database: ' + error.stack);
            throw new Error(error);
        }
        console.log('Connected to MySQL database as id ' + connection.threadId);
    });
};