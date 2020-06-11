/*
Preparing database for connection
install sequelize package ==> ORM
npm install --save sequelize
install driver for database ==> postgresql in our case
npm istall --save pg pg-hstore
*/

//Setup connection:
const Sequelize = require("sequelize");
//Option 1: Passing parameters separately
const sequelize = new Sequelize(
    'multisig_db',//databse
    'postgres',//username
    'Hiddenspy2020',//password
    {
        host: 'localhost',
        port: 3600,
        dialect: 'postgres'//or mysql or mariadb or mssql or sqlite

    ,
    pool: {
        max : 5,
        min: 0,
        acquire: 30000,
    }
}
);
//Option 2: Passing connection URI
/* 
const sequelize = new Sequelize ('postgres://user:pass@localhost:port/dbname');
*/

//Configuring connection pool
/*
const sequelize = new Sequelize ( ... , {
    pool: {
        max : 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
*/

//Creating table
/*
const User = sequelize.define('user',{
    //attributes of constructor
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    //Options
    //freezeTableName: true //this is to make sure the name given to the table is not set to plural by default
    timestamps: false //to stop the creation of createdAt and updateAt
}

);
*/
/*
//Create a new user

User.create({ username: "Jane", email: "Doe", password: "pass" }).then(jane => {
    console.log("Jane's auto-generated ID:", jane.id);
  });



  // Find all users
User.findAll().then(users => {
    console.log("All users:", JSON.stringify(users, null, 4));
  });

  */

//Testing connection:
/*
sequelize.authenticate()
.then(()=> {
    console.log('Connection as been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});
*/
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db ;

