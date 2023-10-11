import { group, check } from "k6"
import http from "k6/http"
// import generateHeaders from "../utils/generateHeaders.js"
import { describe } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js'
import cart from "../payload/cart.js"


export default function apiCarts () {
    group('Carts API', function () {
        describe('Test Get All Carts', function () {
            const res = http.get('https://fakestoreapi.com/carts')
            check(res, {
                'Status 200': (r) => r.status ===200
            })
        })
    
        describe('Test Get Single Carts', function () {
            const res = http.get('https://fakestoreapi.com/carts/5')
            check(res, {
                'Status 200': (r) => r.status === 200,
                'id = 1': (r) => r.json().id === 5
            })
        })
    
        describe('Test Limit Result = 5', function () {
            const res = http.get('https://fakestoreapi.com/carts?limit=5')
            check(res, {
                'Status 200': (r) => r.status === 200,
                'Panjang = 5': (r) => r.json().length === 5
            })
        })
    
        describe('Test Sort Result by Id = DESC', function () {
            const res = http.get('https://fakestoreapi.com/carts?sort=desc')
            check(res, {
                'Status 200': (r) => r.status === 200,
            })
        })
    
        describe('Test Sort Result by Id = ASC', function () {
            const res = http.get('https://fakestoreapi.com/carts?sort=asc')
            check(res, {
                'Status 200': (r) => r.status === 200,
            })
        })
    
        describe('Test Get Carts in a Date Range startdate=2019-12-10 & enddate=2020-10-10', function () {
            const res = http.get('https://fakestoreapi.com/carts?startdate=2019-12-10&enddate=2020-10-10')
            check(res, {
                'Status 200': (r) => r.status === 200,
            })
        })
    
        describe('Test Get User Carts', function () {
            const res = http.get('https://fakestoreapi.com/carts/user/2')
            check(res, {
                'Status 200': (r) => r.status === 200,
            })
        })
    
        describe('Test Add New Cart', function () {
            const res = http.post('https://fakestoreapi.com/carts', cart)
            check(res, {
                'Status 200': (r) => r.status === 200,
            })
        })
    
        describe('Test Update a Cart', function () {
            const res = http.put('https://fakestoreapi.com/carts/7', cart)
            check(res, {
                'Status 200': (r) => r.status === 200,
            })
        })
    
        describe('Test Delete a Cart', function () {
            const res = http.del('https://fakestoreapi.com/carts/7')
            check(res, {
                'Status 200': (r) => r.status === 200,
            })
        })
    })
}