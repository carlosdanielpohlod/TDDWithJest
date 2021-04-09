const {factory} = require('factory-girl')
const {users}  = require('../src/app/models')
const faker = require('faker')
factory.define('users', users, {
    name: faker.name.findName(),
    password_hash: faker.internet.password(),
    email: faker.internet.email()
})

module.exports = factory 