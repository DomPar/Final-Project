require('dotenv').config()

const {Sequelize} = require('sequelize')

console.log('🔍 DB CONFIG:', {
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    pass: process.env.DB_PASS ? '***' : 'undefined'
})
const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
    })

const checkDB = async () => {
    try {
        await connection.authenticate();
        console.log('Connection OK.');
      } catch (error) {
        console.error('Pachuru:', error);
      }
}

const syncModels = async () => {
    try {
        await connection.sync({})
        console.log("Model syncronized")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    connection,
    checkDB,
    syncModels
} 
