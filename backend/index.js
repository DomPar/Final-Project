console.log('🚀 Iniciando aplicación...')
require('dotenv').config()
console.log('✅ dotenv cargado')
console.log('📊 Variables:', process.env.DB_NAME, process.env.DB_USER, process.env.DB_HOST)
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")


const {
    checkDB,
    syncModels
} = require('./database/index')

const connectToDB = async () => {
    await checkDB()
    syncModels()
}

const startExpress = () => {
   try { 
    const app = express()

    const mainRouter = require('./api/routers/routers')

    app.use(morgan("dev"))
    app.use(cors())
    app.use(express.json())

    app.use('/api', mainRouter )

    app.listen(process.env.PORT, () => {
        console.log(`Express started. Listening on ${process.env.PORT}`)
    })
    } catch (error) {
        throw new Error (error)
    }
}

const addRelations = require('./database/relations')

;(async () => {
    await connectToDB()
    addRelations()
    startExpress()
})()
