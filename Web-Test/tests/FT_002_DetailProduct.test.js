const { By, WebDriver, until } = require('selenium-webdriver')
const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../pageobjects/HomePage')
const LoginPage = require('../pageobjects/LoginPage')
const DetailProductPage = require('../pageobjects/DetailProductPage')

describe('FT_002_Detail Product', function () {
    /** @type {WebDriver} */ let driver
    /** @type {HomePage} */ let homePage
    /** @type {DetailProductPage} */ let detailProductPage
    // /** @type {LoginPage} */ let loginPage

    before(async function () {
        driver = await setupDriver()
        homePage = new HomePage(driver)
        detailProductPage = new DetailProductPage(driver)
        // loginPage = new LoginPage(driver)
        await driver.manage().window().maximize()
        await homePage.openPage()
    })   
    
    describe('001_Menuju Halaman Detail Produk dengan memilih produk', async function () {
        it('Menampilkan halaman produk yang dipilih', async function () {
            await homePage.openDetailProduct()
            const productTitle = await detailProductPage.getProductTitle()
            const productPrice = await detailProductPage.getProductPrice()
            expect(productTitle).to.equal('Radiant Tee')
            expect(productPrice).to.include('22.00')
        })
    })
    afterEach(async function () {
        await driver.sleep(2000)
    })

    after(async function () {
        await driver.close()
    })
})