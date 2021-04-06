const routes = require('express').Router()
const {users} = require('./app/models')

users.create({
    name: "Diego",
    email:"diego@rocketseat.com.br",
    password_hash:"282222"
})
module.exports = routes 