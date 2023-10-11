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
const RegisterPage = require('../pageobjects/RegisterPage')


describe('End to End Test melalui register', function () {
    /** @type {WebDriver} */ let driver
    /** @type {HomePage} */ let homePage
    /** @type {DetailProductPage} */ let detailProductPage
    /** @type {LoginPage} */ let loginPage
    /** @type {CartPage} */ let cartPage
    /** @type {CheckOutShippingPage} */ let checkOutShippingPage
    /** @type {PaymentPage} */ let paymentPage
    /** @type {FinishOrderPage} */ let finishOrderPage
    /** @type {RegisterPage} */ let registerPage

    before(async function () {
        driver = await setupDriver()
        homePage = new HomePage(driver)
        detailProductPage = new DetailProductPage(driver)
        loginPage = new LoginPage(driver)
        cartPage = new CartPage(driver)
        checkOutShippingPage = new CheckOutShippingPage(driver)
        paymentPage = new PaymentPage(driver)
        finishOrderPage = new FinishOrderPage(driver)
        registerPage = new RegisterPage(driver)
        await driver.manage().window().maximize()
        await registerPage.openPage()
    })   

    describe('Melakukan register dengan benar', async function () {
        it('Pengguna akan masuk ke halaman My Account dan Halaman menampilkan pesan Thank you for registering with Main Website Store.', async function () {
            await registerPage.registerProcess('Beef', 'Stone', 'beefstone@coba.com', 'Cobadaftar88', 'Cobadaftar88')
            const successMes = await registerPage.getSuccessRegisterMessage()   
            const welcomeMessage = await homePage.getWelcomeUser()
            expect(welcomeMessage).to.equal('Welcome, Beef Stone!')
            expect(successMes).to.equal('Thank you for registering with Main Website Store.')
            await homePage.backHome()
        })
    })

    describe('Memilih produk', async function () {
        it('Menampilkan detail produk', async function () {
            await homePage.openDetailProduct()
            const productTitle = await detailProductPage.getProductTitle()
            expect(productTitle).to.include('Radiant Tee')
        })
    })

    describe('Menambahkan produk ke keranjang', async function () {
        it('Produk berhasil di tambahkan', async function () {
            await detailProductPage.addToCart(1)
            const sizeMes = await detailProductPage.getSizeMessage()
            const collorMes = await detailProductPage.getColorMessage()
            const qtyMes = await detailProductPage.getQtyProduct()
            const addMes = await detailProductPage.getAddMessage()
            expect(sizeMes).to.include('L')
            expect(collorMes).to.include('Blue')
            expect(qtyMes).to.equal('1')
            expect(addMes).to.equal('You added Radiant Tee to your shopping cart.')
        })
    })

    describe('Membuka keranjang', async function () {
        it('Pop menu keranjang ditampilkan', async function () {
            await cartPage.openCart()
            const sumItems = await cartPage.getSumItems()
            const sumPrice = await cartPage.getSumPrice()
            const productName = await cartPage.getProductName()
            expect(sumItems).to.include('1')
            expect(sumPrice).to.include('22.00')
            expect(productName).to.include('Radiant Tee')
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
            await checkOutShippingPage.shippingProcess('Beef', 'Stone', 'Pt Sejahtera', 'Sidomukti', 'Katarungan', 'RT/RW 31/92', 'Kota Indah', '12345', 'Indonesia', '8021820182')
            await checkOutShippingPage.regionInput('Alaska')
            await checkOutShippingPage.fixedShipping()
            await checkOutShippingPage.nextShipping()
            await driver.sleep(3000)
            const pageTitle = await paymentPage.getPageTitle()
            const addrresDetail = await paymentPage.getAddressDetail()
            expect(pageTitle).to.include('Payment Method')
            expect(addrresDetail).to.include('Beef Stone')
            expect(addrresDetail).to.include('Sidomukti, Katarungan, RT/RW 31/92')
            expect(addrresDetail).to.include('Kota Indah, Alaska 12345')
            expect(addrresDetail).to.include('Indonesia')
            expect(addrresDetail).to.include('8021820182')
        })
    })

    describe('Mengkonfirmasi data bahwa data benar dan melakukan order', async function () {
        it('Order berhasil dan menuju halaman success order', async function () {
            await driver.sleep(5000)
            await paymentPage.placeOrder()
            await driver.sleep(5000)
            const succesMes = await finishOrderPage.getSuccesMessage()
            expect(succesMes).to.equal('Thank you for your purchase!')
        })
    })

    // describe('Melihat Order yang telah selesai', async function () {
    //     it('Berhasil melihat informasi order', async function () {
    //         // await driver.sleep(8000)
    //         await finishOrderPage.viewOrder()
    //     })
    // })

    // describe('Kembali ke halaman home', async function () {
    //     it('Menampilkan halaman home', async function () {
    //         // await driver.sleep(8000)
    //         await homePage.backHome()
    //     })
    // })

    afterEach(async function () {
        await driver.sleep(2000)
    })

    after(async function () {
        await driver.close()
    })
})