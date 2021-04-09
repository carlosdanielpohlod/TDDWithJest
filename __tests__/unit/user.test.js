const {users} = require('../../src/app/models')
const bcrypt = require('bcryptjs')
const truncate = require('../utils/truncate')

describe('User', () => {
    beforeEach(async () => {
        await truncate()
    })

    it('shoud encryp user password', async () => {
        const hash = await bcrypt.hash('123456', 8)
        const user = await users.create({name: 'Diego', email:'diego@gmail.com', password_hash:hash})

        

        expect(await bcrypt.compare('123456',hash)).toBe(true)
    })
})