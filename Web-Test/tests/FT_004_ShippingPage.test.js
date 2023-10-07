const { By, WebDriver, until } = require('selenium-webdriver')
const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../pageobjects/HomePage')
const LoginPage = require('../pageobjects/LoginPage')
const DetailProductPage = require('../pageobjects/DetailProductPage')
const CartPage = require('../pageobjects/CartPage')
const CheckOutShippingPage = require('../pageobjects/CheckOutShippingPage')
const PaymentPage = require('../pageobjects/PaymentPage')
const FinishOrderPage = require('../pageobjects/FinishOrderPage')

describe.skip('FT_004_Shipping Page', function () {
    /** @type {WebDriver} */ let driver
    /** @type {HomePage} */ let homePage
    /** @type {DetailProductPage} */ let detailProductPage
    /** @type {LoginPage} */ let loginPage
    /** @type {CartPage} */ let cartPage
    /** @type {CheckOutShippingPage} */ let checkOutShippingPage
    /** @type {PaymentPage} */ let paymentPage
    /** @type {FinishOrderPage} */ let finishOrderPage

    before(async function () {
        driver = await setupDriver()
        homePage = new HomePage(driver)
        detailProductPage = new DetailProductPage(driver)
        loginPage = new LoginPage(driver)
        cartPage = new CartPage(driver)
        checkOutShippingPage = new CheckOutShippingPage(driver)
        paymentPage = new PaymentPage(driver)
        finishOrderPage = new FinishOrderPage(driver)
        await driver.manage().window().maximize()
        await loginPage.openPage()
    })   

    describe('Mencoba Login', async function () {
        it('Berhasil Login dan menuju halaman home', async function () {
            await loginPage.loginProcess('cobauser@coba.com','Cobauser12')
            const welcomeMessage = await homePage.getWelcomeUser()
            expect(welcomeMessage).to.equal('Welcome, Coba User!')
        })
    })

    describe('Memilih produk', async function () {
        it('Menampilkan detail produk', async function () {
            await homePage.openDetailProduct()
            const productTitle = await detailProductPage.getProductTitle()
            const productPrice = await detailProductPage.getProductPrice()
            expect(productTitle).to.include('Radiant Tee')
            expect(productPrice).to.include('22.00')
        })
    })

    describe('Menambahkan produk ke keranjang', async function () {
        it('Produk berhasil di tambahkan', async function () {
            await detailProductPage.addToCart(1)
            const qtyProduct = await detailProductPage.getQtyProduct()
            expect(qtyProduct).to.equal('1')
        })
    })

    describe('Membuka keranjang', async function () {
        it('Pop menu keranjang ditampilkan', async function () {
            await cartPage.openCart()
            // const sumItems = await cartPage.getSumItems()
            // const sumPrice = await cartPage.getSumPrice()
            // expect(sumItems).to.include('2')
            // expect(sumPrice).to.include('44.00')
        })
    })

    describe('Melakukan checkout', async function () {
        it('Berhasil checkout dan menuju halaman shipping', async function () {
            await cartPage.checkOut()
        })
    })

    describe('Mengisi data shipping dan menekan tombol next', async function () {
        it('Menuju halaman payment', async function () {
            await driver.sleep(8000)
            await checkOutShippingPage.shippingProcess('Farissss', 'Woke', 'Pt Sejahtera', 'Sidomukti', 'Katarungan', 'RT/RW 02/02', 'Surabaya', 'Alaska', '12345', 'Indonesia', '8021820182')
        })
    })

    describe('Mengkonfirmasi data bahwa data benar dan melakukan order', async function () {
        it('Order berhasil dan menuju halaman succes order', async function () {
            // await driver.sleep(8000)
            await paymentPage.placeOrder()
        })
    })

    // describe('Melihat Order yang telah selesai', async function () {
    //     it('Berhasil melihat informasi order', async function () {
    //         // await driver.sleep(8000)
    //         await finishOrderPage.viewOrder()
    //     })
    // })

    describe('Kembali ke halaman home', async function () {
        it('Menampilkan halaman home', async function () {
            // await driver.sleep(8000)
            await homePage.backHome()
        })
    })

    afterEach(async function () {
        await driver.sleep(2000)
    })

    after(async function () {
        await driver.close()
    })
})