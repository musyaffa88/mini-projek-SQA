import { group, check } from "k6"
import http from "k6/http"
// import generateHeaders from "../utils/generateHeaders.js"
import { describe } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js'
import product from "../payload/product.js"


export default function productsAPI () {
    group('Products API', function () {
        describe('Test Get All Products', function () {
            const res = http.get('https://fakestoreapi.com/products')
            check(res, {
                'Status 200': (r) => r.status ===200
            })
        })
    
        describe('Test Get Single Products', function () {
            const res = http.get('https://fakestoreapi.com/products/1')
            check(res, {
                'Status 200': (r) => r.status === 200,
                'id = 1': (r) => r.json().id === 1
            })
        })
    
        describe('Test Limit Result = 5', function () {
            const res = http.get('https://fakestoreapi.com/products?limit=5')
            check(res, {
                'Status 200': (r) => r.status === 200,
                'Panjang = 5': (r) => r.json().length === 5
            })
        })
    
        describe('Test Sort Result by Id = DESC', function () {
            const res = http.get('https://fakestoreapi.com/products?sort=desc')
            check(res, {
                'Status 200': (r) => r.status === 200,
            })
        })
    
        describe('Test Sort Result by Id = ASC', function () {
            const res = http.get('https://fakestoreapi.com/products?sort=asc')
            check(res, {
                'Status 200': (r) => r.status === 200,
            })
        })
    
        describe('Test Get All Categories', function () {
            const res = http.get('https://fakestoreapi.com/products/categories')
            check(res, {
                'Status 200': (r) => r.status === 200,
            })
        })
    
        describe('Test Get Product in a Specific Category = jewelery', function () {
            const res = http.get('https://fakestoreapi.com/products/category/jewelery')
            check(res, {
                'Status 200': (r) => r.status === 200,
            })
        })
    
        describe('Test Add New Product', function () {
            const res = http.post('https://fakestoreapi.com/products', product)
            check(res, {
                'Status 200': (r) => r.status === 200,
            })
        })
    
        describe('Test Update a Product', function () {
            const res = http.put('https://fakestoreapi.com/products/7', product)
            check(res, {
                'Status 200': (r) => r.status === 200,
            })
        })
    
        describe('Test Delete a Product', function () {
            const res = http.del('https://fakestoreapi.com/products/7')
            check(res, {
                'Status 200': (r) => r.status === 200,
            })
        })
    })
}