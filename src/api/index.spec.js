import { expect } from '@jest/globals'
import Api from '.'

describe('Api', () => {
    let email, password, name

    describe('users', () => {
        beforeEach(() => {
            name = `name-${Math.random()}`,
                surname = `appsurname-${Math.random()}`,
                email = 'eve.holt@reqres.in',
                password = 'pistol'
        })
        describe('register user', () => {
            it('should succeed on correct data', async () => {
                try {
                    const res = await Api.register(email, password, password)

                    expect(res).toBeDefined()
                    expect(res.id).toBeDefined()
                    expect(res.token).toBeDefined()
                } catch (error) {
                    throw Error(error)
                }
            })

            it('should fail on non valid data', async () => {
                try {
                    await Api.register(email, password, 'notRepeatedPassword')
                    throw Error('should not reach here')
                } catch (error) {
                    expect(error).toBeDefined()
                    expect(error.message).toEqual('Passwords fields dont match')
                }
            })

        })
        describe('login user', () => {
            it('should succeed on correct data', async () => {
                try {
                    await Api.login(email, password)
                    expect(Api.isUserLoggedIn).toBeTruthy()
                } catch (error) {
                    throw Error(error)
                }
            })

            it('should fail on non valid data', async () => {
                const notAnEmail = 'notvalidEmail'
                try {
                    await Api.login(notAnEmail, password)
                    throw Error('should not reach here')
                } catch (error) {
                    expect(error).toBeDefined()
                    expect(error.message).toEqual(`${notAnEmail} is not an e-mail`)
                }
            })
        })

        describe('delete user', () => {
            it('should succeed on correct data', async () => {
                const ApiUserId = 7
                try {
                    const res = await Api.deleteUser(ApiUserId)

                    expect(res).not.toBeDefined()
                } catch (error) {
                    throw Error(error)
                }
            })
        })

        describe('update user', () => {
            it('should succeed on correct data', async () => {
                const ApiUserId = 7
                const updatedSurname = 'updatedSurname'
                try {
                    const res = await Api.updateUser(name, 'updatedSurname', email, ApiUserId)

                    expect(res.surname).toEqual(updatedSurname)
                    expect(res.name).toEqual(name)
                    expect(res.email).toEqual(email)

                } catch (error) {
                    throw Error(error)
                }
            })
        })

        describe('create user', () => {
            it('should succeed on correct data', async () => {
                const ApiUserId = 7
                const newUser = 'newUser'
                const newSurname = 'newSurname'
                const newEmail = 'newEmail@mail.com'
                try {
                    const res = await Api.updateUser('newUser', 'newSurname', 'newEmail@mail.com', ApiUserId)

                    expect(res.surname).toEqual(newSurname)
                    expect(res.name).toEqual(newUser)
                    expect(res.email).toEqual(newEmail)

                } catch (error) {
                    throw Error(error)
                }
            })
        })

        describe('get user list', () => {
            it('should succeed on correct page', async () => {
                try {
                    const res = await Api.getUsersList(1)
                    expect(res).toBeDefined()
                    expect(res.data).toBeDefined()

                } catch (error) {
                    throw Error(error)
                }
            })
        })
    })
})