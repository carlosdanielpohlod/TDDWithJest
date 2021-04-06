const {users} = require('../../src/app/models')
const bcrypt = require('bcryptjs')
const { INET } = require('sequelize/types')

describe('User', () => {
    beforeEach(async () => {
        await truncate()
    })

    it('shoud encryp user password', async () => {
        const user = await users.create({name: 'Diego', email:'diego@gmail.com', password_hash:'123456'})

        const hash = await bcrypt.hash('123456', 8)

        expect(await bcrypt.compare('123456',user.password_hash)).toBe(true)
    })
})