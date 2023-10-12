const { By, WebDriver, until } = require('selenium-webdriver')
const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../pageobjects/HomePage')
const LoginPage = require('../pageobjects/LoginPage')
const DetailProductPage = require('../pageobjects/DetailProductPage')
const CartPage = require('../pageobjects/CartPage')


describe('FT_003_Detail Product', function () {
    /** @type {WebDriver} */ let driver
    /** @type {HomePage} */ let homePage
    /** @type {DetailProductPage} */ let detailProductPage
    /** @type {CartPage} */ let cartPage
    // /** @type {LoginPage} */ let loginPage

    before(async function () {
        driver = await setupDriver()
        homePage = new HomePage(driver)
        detailProductPage = new DetailProductPage(driver)
        // loginPage = new LoginPage(driver)
        cartPage = new CartPage(driver)
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

    describe('002_Menambah produk ke keranjang tanpa memilih ukuran, warna dan jumlah produk = 0', async function () {
        it('Menampilkan pesan This is a required field. dan Please enter a quantity greater than 0.', async function () {
            await detailProductPage.editQty(0)
            await detailProductPage.addCart()
            const sizeErr = await detailProductPage.getSizeError()
            const collorErr = await detailProductPage.getColorError()
            const qtyErr = await detailProductPage.getQtyError()
            expect(sizeErr).to.equal('This is a required field.')
            expect(collorErr).to.equal('This is a required field.')
            expect(qtyErr).to.equal('Please enter a quantity greater than 0.')
        })
    })

    describe('003_Menambah produk ke keranjang tanpa memilih warna', async function () {
        it('Menampilkan pesan This is a required field. di bawah warna', async function () {
            await detailProductPage.choseSizeL()
            await detailProductPage.editQty(1)
            await detailProductPage.addCart()
            const sizeMes = await detailProductPage.getSizeMessage()
            const collorErr = await detailProductPage.getColorError()
            expect(sizeMes).to.include('L')
            expect(collorErr).to.equal('This is a required field.')
        })
    })

    describe('004_Menambah produk ke keranjang tanpa memilih ukuran', async function () {
        it('Menampilkan pesan This is a required field. di bawah ukuran', async function () {
            await detailProductPage.choseSizeL()
            await detailProductPage.choseColorBlue()
            await detailProductPage.editQty(1)
            await detailProductPage.addCart()
            const sizeErr = await detailProductPage.getSizeError()
            const collorMes = await detailProductPage.getColorMessage()
            expect(sizeErr).to.equal('This is a required field.')
            expect(collorMes).to.include('Blue')
        })
    })

    describe('005_Menambah produk ke keranjang dengan jumlah produk = 0', async function () {
        it('Menampilkan pesan Please enter a quantity greater than 0. di bawah jumlah produk', async function () {
            await detailProductPage.choseSizeL()
            await detailProductPage.editQty(0)
            await detailProductPage.addCart()
            const sizeMes = await detailProductPage.getSizeMessage()
            const collorMes = await detailProductPage.getColorMessage()
            const qtyErr = await detailProductPage.getQtyError()
            expect(sizeMes).to.include('L')
            expect(collorMes).to.include('Blue')
            expect(qtyErr).to.equal('Please enter a quantity greater than 0.')
        })
    })

    describe('005_Menambah produk ke keranjang dengan data yang benar', async function () {
        it('Berhasil menambahkan produk ke keranjang dan menampilkan pesan You added Radiant Tee to your shopping cart.', async function () {
            await detailProductPage.editQty(1)
            await detailProductPage.addCart()
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

    afterEach(async function () {
        await driver.sleep(3000)
    })

    after(async function () {
        await driver.close()
    })
})