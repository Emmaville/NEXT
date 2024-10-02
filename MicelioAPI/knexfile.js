const path = require('path');
require('dotenv').config();

module.exports = {
    client: process.env.DATABASE_CLIENT,
    connection:{
        client: process.env.DATABASE_CLIENT,
        host : process.env.DATABASE_HOST,
        user : process.env.DATABASE_USER,
        password : process.env.DATABASE_PASSWORD,
        database : process.env.DATABASE
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    // seeds: {
    //     directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    // },



    useNullAsDefault: true
}; 


// Log the configuration
/*console.log('Connecting to MySQL with the following settings:');
console.log({
    client: config.client,
    host: config.connection.host,
    user: config.connection.user,
    database: config.connection.database
});

module.exports = config; */