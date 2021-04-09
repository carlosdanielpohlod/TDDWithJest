const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'

})
class AppController {
    constructor(){
        this.express = express()
        this.middlewares()
        this.routes()
    }
    middlewares(){
        this.express.use(bodyParser.json())
    }
    routes(){
        this.express.use(require('./routes'))
    }
}

module.exports = new AppController().express