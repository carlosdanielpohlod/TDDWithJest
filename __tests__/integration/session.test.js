const {users} = require('../../src/app/models')
const request = require('supertest')
const app = require('../../src/app')
const truncate = require('../utils/truncate')
describe('Authentication',  () => {
    beforeEach(async() => {
        await truncate()
    })
    it ('should authenticate with valid credentials', async () => {
        const user =  await users.create({
            name:'Usuario teste',
            email:'test@test.com',
            password:'123456'
        })
        const response = await request(app)
        .post('/sessions')
        .send({
            email: user.email,
            password: '123456'
        })

        expect(response.status).toBe(200)
    })
    
})