const { By, WebDriver, until } = require('selenium-webdriver')
const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../pageobjects/HomePage')
const LoginPage = require('../pageobjects/LoginPage')
const DetailProductPage = require('../pageobjects/DetailProductPage')
const CartPage = require('../pageobjects/CartPage')
const CheckOutShippingPage = require('../pageobjects/CheckOutShippingPage')

describe('End to End Test', function () {
    /** @type {WebDriver} */ let driver
    /** @type {HomePage} */ let homePage
    /** @type {DetailProductPage} */ let detailProductPage
    /** @type {LoginPage} */ let loginPage
    /** @type {CartPage} */ let cartPage
    /** @type {CheckOutShippingPage} */ let checkOutShippingPage

    before(async function () {
        driver = await setupDriver()
        homePage = new HomePage(driver)
        detailProductPage = new DetailProductPage(driver)
        loginPage = new LoginPage(driver)
        cartPage = new CartPage(driver)
        checkOutShippingPage = new CheckOutShippingPage(driver)
        await driver.manage().window().maximize()
        await loginPage.openPage()
    })   

    describe('Login di awal', async function () {
        it('Produk berhasil dibeli', async function () {
            await loginPage.loginProcess('farisikbal88@gmail.com','Cobalogin88')
            const welcomeMessage = await homePage.getWelcomeUser()
            expect(welcomeMessage).to.equal('Welcome, Farissss Ikbal!')
            await homePage.openDetailProduct()
            const productTitle = await detailProductPage.getProductTitle()
            const productPrice = await detailProductPage.getProductPrice()
            expect(productTitle).to.equal('Radiant Tee')
            expect(productPrice).to.include('22.00')
            await detailProductPage.addToCart(1)
            const qtyProduct = await detailProductPage.getQtyProduct()
            expect(qtyProduct).to.equal('1')
            await cartPage.openCart()
            // const sumItems = await cartPage.getSumItems()
            // const sumPrice = await cartPage.getSumPrice()
            // expect(sumItems).to.include('2')
            // expect(sumPrice).to.include('44.00')
            await cartPage.checkOut()
            await driver.sleep(10000)
            await checkOutShippingPage.shippingProcess('Farissss', 'Woke', 'Pt Sejahtera', 'Sidomukti', 'Katarungan', 'RT/RW 02/02', 'Surabaya', 'Alaska', '12345', 'United States', '8021820182')
            
        })
    })

    afterEach(async function () {
        await driver.sleep(2000)
    })

    after(async function () {
        await driver.close()
    })
})