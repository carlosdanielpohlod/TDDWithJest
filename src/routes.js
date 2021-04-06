const routes = require('express').Router()
const urlController = './app/controllers'
const SessionController = require(`${urlController}/SessionController`)

routes.post('/sessions',SessionController.store)
module.exports = routes 