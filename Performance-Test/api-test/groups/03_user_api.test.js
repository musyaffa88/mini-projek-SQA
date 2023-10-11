import { group, check } from "k6"
import http from "k6/http"
// import generateHeaders from "../utils/generateHeaders.js"
import { describe } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js'
import user from "../payload/user.js"


export default function apiUsers () {
    group('Users API', function () {
        // describe('Test Login Users', function () {
        //     const payload = JSON.stringify({
        //         username: "mor_2314",
        //         password: "83r5^_",
        //     })
        //     const res = http.post('https://fakestoreapi.com/auth/login', payload)
        //     check(res, {
        //         'Status 200': (r) => r.status === 200
        //     })
        // })
        
        describe('Test Get All Users', function () {
            const res = http.get('https://fakestoreapi.com/users')
            check(res, {
                'Status 200': (r) => r.status === 200
            })
        })
    
        describe('Test Get Single Users', function () {
            const res = http.get('https://fakestoreapi.com/users/1')
            check(res, {
                'Status 200': (r) => r.status === 200,
                'id = 1': (r) => r.json().id === 1
            })
        })
    
        describe('Test Limit Result = 5', function () {
            const res = http.get('https://fakestoreapi.com/users?limit=5')
            check(res, {
                'Status 200': (r) => r.status === 200,
                'Panjang = 5': (r) => r.json().length === 5
            })
        })
    
        describe('Test Sort Result by Id = DESC', function () {
            const res = http.get('https://fakestoreapi.com/users?sort=desc')
            check(res, {
                'Status 200': (r) => r.status === 200,
            })
        })
    
        describe('Test Sort Result by Id = ASC', function () {
            const res = http.get('https://fakestoreapi.com/users?sort=asc')
            check(res, {
                'Status 200': (r) => r.status === 200,
            })
        })
    
        describe('Test Add New User', function () {
            const res = http.post('https://fakestoreapi.com/users', user)
            check(res, {
                'Status 200': (r) => r.status === 200,
            })
        })
    
        describe('Test Update a User', function () {
            const res = http.put('https://fakestoreapi.com/users/7', user)
            check(res, {
                'Status 200': (r) => r.status === 200,
            })
        })
    
        describe('Test Delete a User', function () {
            const res = http.del('https://fakestoreapi.com/users/6')
            check(res, {
                'Status 200': (r) => r.status === 200,
            })
        })
    })
}