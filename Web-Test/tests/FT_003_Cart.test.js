const { By, WebDriver, until } = require('selenium-webdriver')
const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../pageobjects/HomePage')
const LoginPage = require('../pageobjects/LoginPage')
const DetailProductPage = require('../pageobjects/DetailProductPage')
const CartPage = require('../pageobjects/CartPage')
const CheckOutShippingPage = require('../pageobjects/CheckOutShippingPage')


describe('FT_003_Cart Product', function () {
    /** @type {WebDriver} */ let driver
    /** @type {HomePage} */ let homePage
    /** @type {DetailProductPage} */ let detailProductPage
    /** @type {CartPage} */ let cartPage
    /** @type {CheckOutShippingPage} */ let checkOutShippingPage
    // /** @type {LoginPage} */ let loginPage

    before(async function () {
        driver = await setupDriver()
        homePage = new HomePage(driver)
        detailProductPage = new DetailProductPage(driver)
        // loginPage = new LoginPage(driver)
        cartPage = new CartPage(driver)
        checkOutShippingPage = new CheckOutShippingPage(driver)
        await driver.manage().window().maximize()
        await homePage.openPage()
        await homePage.openDetailProduct()
    })   
    
    describe('001_Memebuka halaman keranjang', async function () {
        it('Menampilkan halaman keranjang', async function () {
            await driver.sleep(10000)
            await detailProductPage.addToCart(1)
            // await driver.sleep(2000)
            await cartPage.openCart()
            await driver.sleep(2000)
            await cartPage.viewCart()
        })
    })
    describe('002_Mencoba mengubah jumlah produk menjadi 0', async function () {
        it('Menampilkan pesan Please enter a quantity greater than 0 in this field.', async function () {
            await cartPage.editQty(0)
            await cartPage.updateShoppingCart()
            const qtyErr = await cartPage.getErrorQty()
            expect(qtyErr).to.include('Please enter a number greater than 0 in this field.')
        })
    })
    describe('003_Mencoba mengubah detail produk', async function () {
        it('Menampilkan pesan Radiant Tee was updated in your shopping cart.', async function () {
            await cartPage.editProduct()
            await detailProductPage.choseSizeS()
            await detailProductPage.choseColorOrange()
            await cartPage.updateCart()
            const updateMes = await cartPage.getUpadateProductMessage()
            // const sizeInfo = await cartPage.getSize()
            // const colorInfo = await cartPage.getColor()
            expect(updateMes).to.equal('Radiant Tee was updated in your shopping cart.')
        })
    })
    describe('004_Mencoba menghapus / mengkosongkan keranjang', async function () {
        it('Menampilkan halaman dengan pesan You have no items in your shopping cart.', async function () {
            await cartPage.deleteProduct()
            const emptyMes = await cartPage.getEmptyCartMessage()
            expect(emptyMes).to.include('You have no items in your shopping cart.')
            await driver.sleep(3000)
            await homePage.backHome()
        })
    })
    describe('005_Mencoba checkout tanpa mengisi alamat di kerangjang', async function () {
        it('Menampilkan halaman dengan pesan You have no items in your shopping cart.', async function () {
            await driver.sleep(2000)
            await homePage.openDetailProduct()
            await detailProductPage.addToCart(1)
            // await homePage.addToCart()
            await driver.sleep(10000)
            await cartPage.openCart()
            await driver.sleep(2000)
            await cartPage.viewCart()
            await cartPage.checkOutPrimary()
            await driver.sleep(3000)
            await homePage.backHome()
        })
    })
    describe.skip('006_Mencoba checkout dengan mengisi alamat di kerangjang', async function () {
        it('Menampilkan halaman shipping dengan region, country, terisi', async function () {
            await driver.sleep(2000)
            await homePage.openDetailProduct()
            await detailProductPage.addToCart(1)
            // await homePage.addToCart()
            await driver.sleep(10000)
            await cartPage.openCart()
            await driver.sleep(2000)
            await cartPage.viewCart()
            await cartPage.fillingDestinationShipping('Indonesia', 'Alaska', '12345')
            await driver.executeScript(function(){
                document.querySelector('html').scrollTo({ top: 1000, behavior: 'smooth'})
            })
            await cartPage.checkOutPrimary()
            await driver.sleep(5000)
            const region = await checkOutShippingPage.getRegion()
            const postcode = await checkOutShippingPage.getPostCode()
            const country = await checkOutShippingPage.getCountry()
            expect(region).to.equal('Alaska')
            expect(postcode).to.equal('12345')
            expect(country).to.equal('ID')

        })
    })


    afterEach(async function () {
        await driver.sleep(5000)
    })

    after(async function () {
        await driver.close()
    })
})