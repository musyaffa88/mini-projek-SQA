const { By, WebDriver, until } = require('selenium-webdriver')
const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../pageobjects/HomePage')
const LoginPage = require('../pageobjects/LoginPage')

describe.skip('FT_001_Login', function () {
    /** @type {WebDriver} */ let driver
    /** @type {HomePage} */ let homePage
    /** @type {LoginPage} */ let loginPage

    before(async function () {
        driver = await setupDriver()
        homePage = new HomePage(driver)
        loginPage = new LoginPage(driver)
        await driver.manage().window().maximize()
        await loginPage.openPage()
    })   
    describe('001_Login dengan email yang kosong', async function () {
        it('Menampilkan pesan This is a required field', async function () {
            await loginPage.loginProcess('','cobalogin88')
            const errorMessage = await loginPage.getEmailError()
            expect(errorMessage).to.equal('This is a required field.')
            await loginPage.openPage()
        })
    })
    describe('002_Login dengan password yang kosong', async function () {
        it('Menampilkan pesan This is a required field', async function () {
            await loginPage.loginProcess('farisikbal88@gmail.com','')
            const errorMessage = await loginPage.getPasswordError()
            expect(errorMessage).to.equal('This is a required field.')
            await loginPage.openPage()
        })
    })
    describe('003_Login dengan email yang tidak valid', async function () {
        it('Menampilkan pesan Please enter a valid email address (Ex: johndoe@domain.com).', async function () {
            await loginPage.loginProcess('dadasa','cobalogin88')
            const errorMessage = await loginPage.getEmailError()
            expect(errorMessage).to.equal('Please enter a valid email address (Ex: johndoe@domain.com).')
            await loginPage.openPage()
        })
    })
    describe('004_Login dengan akun yang salah', async function () {
        it('Kembali ke halaman login dan menampilkan pesan The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.', async function () {
            await loginPage.loginProcess('dadasa@akkadn.com','cobalogin88')
            const errorMessage = await loginPage.getIncorrectAccountError()
            expect(errorMessage).to.equal('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
            await loginPage.openPage()
        })
    })
    describe('005_Login dengan akun yang benar', async function () {
        it('Menampilkan halaman home', async function () {
            await loginPage.loginProcess('farisikbal88@gmail.com','Cobalogin88')
            const welcomeMessage = await homePage.getWelcomeUser()
            expect(welcomeMessage).to.equal('Welcome, Farissss Ikbal!')
        })
    })

    afterEach(async function () {
        await driver.sleep(2000)
    })

    after(async function () {
        await driver.close()
    })
})