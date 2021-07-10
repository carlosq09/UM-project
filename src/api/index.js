import Call from "../common/call"
import validate from "../common/validate"

const Api = {
    __url__: 'https://reqres.in/api',

    set __userToken__(token) {
        sessionStorage.userToken = token
    },

    get __userToken__() {
        return sessionStorage.userToken
    },

    get isUserLoggedIn() {
        return !!this.__userToken__
    },

    logoutUser() {
        sessionStorage.clear()
    },

    register(email, password, repassword) {
        validate.arguments([
            { name: 'email', value: email, type: 'string', notEmpty: true },
            { name: 'password', value: password, type: 'string', notEmpty: true },
            { name: 'password', value: repassword, type: 'string', notEmpty: true }
        ])
        validate.email(email)

        if (password !== repassword) throw Error('Passwords fields dont match')

        return Call.requestWithBody(`${this.__url__}/register`, {
            email,
            password
        })
    },

    login(email, password) {
        validate.arguments([
            { name: 'email', value: email, type: 'string', notEmpty: true },
            { name: 'password', value: password, type: 'string', notEmpty: true }
        ])
        validate.email(email)

        return Call.requestWithBody(`${this.__url__}/login`, {
            email,
            password
        }).then(({ token }) => {
            this.__userToken__ = token
        })
    },

    deleteUser(id) {
        return Call.request(`${this.__url__}/users/${id}`, 'DELETE')
    },

    updateUser(name, surname, email, id) {
        validate.arguments([
            { name: 'email', value: email, type: 'string', notEmpty: true },
            { name: 'name', value: name, type: 'string', notEmpty: true },
            { name: 'surname', value: surname, type: 'string', notEmpty: true }
        ])
        return Call.requestWithBody(`${this.__url__}/users/${id}`, { name, surname, email }, 'PUT')
    },

    createUser(name, surname, email) {
        validate.arguments([
            { name: 'email', value: email, type: 'string', notEmpty: true },
            { name: 'name', value: name, type: 'string', notEmpty: true },
            { name: 'surname', value: surname, type: 'string', notEmpty: true }
        ])
        return Call.requestWithBody(`${this.__url__}/users`, { name, surname, email })
    },

    getUsersList(page = 1) {
        return Call.request(`${this.__url__}/users?page=${page}`)
    }
}

export default Api