const {users} = require('../../src/app/models')
const request = require('supertest')
const bcrypt = require('bcryptjs')
const app = require('../../src/app')
const truncate = require('../utils/truncate')
const factory = require('../factories')
describe('Authentication',  () => {
    
    beforeEach(async() => {
        await truncate()
        
       
    })
    
    
    it ('should authenticate with valid credentials', async () => {
       
        const user =  await factory.create('users',{ 
            password_hash:'123456'
        })
        const response = await request(app)
        .post('/sessions')
        .send({
            email: user.email,
            password_hash: '123456',
            name:'karlin'
        })

        expect(response.status).toBe(200)
    })
    it('shold not authenticate with invalid credentials', async () => {
        
        const user =  await factory.create('users',{ 
            password_hash:'123456'
        })
        
        const response = await request(app)
        .post('/sessions')
        
        .send({
            email: user.email,
            password_hash: '123456',
            name:'Usuario teste',
        })

        expect(response.status).toBe(401)
    })
    it('shoud return jtw token when authenticated', async () => {
        
        const user =  await factory.create('users',{ 
            password_hash:'123456'
        })
        
        const response = await request(app)
                        .post('/sessions')
                        .send({
                            email: user.email,
                            password_hash: '123456'
                        })
        console.log(response)
        expect(response.body).toHaveProperty('token')
    })
})