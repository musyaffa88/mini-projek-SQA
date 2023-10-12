const { By, WebDriver, until } = require('selenium-webdriver')
const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../pageobjects/HomePage')
const RegisterPage = require('../pageobjects/RegisterPage')

describe('FT_001_Register', function () {
    /** @type {WebDriver} */ let driver
    /** @type {HomePage} */ let homePage
    /** @type {RegisterPage} */ let registerPage

    before(async function () {
        driver = await setupDriver()
        homePage = new HomePage(driver)
        registerPage = new RegisterPage(driver)
        await driver.manage().window().maximize()
        await registerPage.openPage()
    })


    describe('001_Mendaftar dengan mengisi semua data dengan benar kecuali First Name', async function () {
        it('Menampilkan pesan This is a required field', async function () {
            await registerPage.registerProcess('', 'Smith', 'johnsmith@coba.com', 'Cobadaftar88', 'Cobadaftar88')
            const firstNameErr = await registerPage.getFirstNameErr()
            expect(firstNameErr).to.equal('This is a required field.')
        })
    }) 
    describe('002_Mendaftar dengan mengisi semua data dengan benar kecuali Last Name', async function () {
        it('Menampilkan pesan This is a required field', async function () {
            await registerPage.registerProcess('John', '', 'johnsmith@coba.com', 'Cobadaftar88', 'Cobadaftar88')
            const lastName = await registerPage.getLastNameErr()
            expect(lastName).to.equal('This is a required field.')
        })
    }) 
    describe('003_Mendaftar dengan mengisi semua data dengan benar kecuali Email yang kosong', async function () {
        it('Menampilkan pesan This is a required field', async function () {
            await registerPage.registerProcess('John', 'Smith', '', 'Cobadaftar88', 'Cobadaftar88')
            const emailErr = await registerPage.getEmailError()
            expect(emailErr).to.equal('This is a required field.')
        })
    }) 
    describe('004_Mendaftar dengan mengisi semua data dengan benar kecuali Email yang tidak sesuai format', async function () {
        it('Menampilkan pesan Please enter a valid email address (Ex: johndoe@domain.com).', async function () {
            await registerPage.registerProcess('John', 'Smith', 'johnsmith', 'Cobadaftar88', 'Cobadaftar88')
            const emailErr = await registerPage.getEmailError()
            expect(emailErr).to.equal('Please enter a valid email address (Ex: johndoe@domain.com).')
        })
    })
    describe('005_Mendaftar dengan mengisi semua data dengan benar kecuali panjang < 8', async function () {
        it('Menampilkan pesan Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.', async function () {
            await registerPage.registerProcess('John', 'Smith', 'johnsmith@coba.com', 'Cobada', 'Cobada')
            const passwordErr = await registerPage.getPasswordError()
            expect(passwordErr).to.equal('Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
        })
    })
    describe('006_Mendaftar dengan mengisi semua data dengan panjang password > 8 dan Lower Case namun tidak ada angka ( Kombinasi password minimal harus ada 3 dari berikut: Lower Case, Upper Case, Digits, Special Character', async function () {
        it('Menampilkan pesan Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.', async function () {
            await registerPage.registerProcess('John', 'Smith', 'johnsmith@coba.com', 'cobadaftar', 'cobadaftar')
            const passwordErr = await registerPage.getPasswordError()
            expect(passwordErr).to.equal('Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
        })
    })
    describe('007_Mendaftar dengan mengisi semua data dengan panjang password > 8,Lower Case dan angka namun tidak ada Upper Case ( Kombinasi password minimal harus ada 3 dari berikut: Lower Case, Upper Case, Digits, Special Character )', async function () {
        it('Menampilkan pesan Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.', async function () {
            await registerPage.registerProcess('John', 'Smith', 'johnsmith@coba.com', 'cobadaftar88', 'cobadaftar88')
            const passwordErr = await registerPage.getPasswordError()
            expect(passwordErr).to.equal('Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
        })
    })
    describe('008_Mendaftar dengan mengisi semua data dengan panjang password > 8,Lower Case, Angka, Upper Case namun Confirm Password kosong', async function () {
        it('Menampilkan pesan This is a required field.', async function () {
            await registerPage.registerProcess('John', 'Smith', 'johnsmith@coba.com', 'Cobadaftar88', '')
            const confirmPasswordErr = await registerPage.getConfirmPasswordError()
            expect(confirmPasswordErr).to.equal('This is a required field.')
        })
    })
    describe('009_Mendaftar dengan mengisi semua data dengan panjang password > 8,Lower Case, Angka, Upper Case namun Confirm Password tidak sama', async function () {
        it('Menampilkan pesan Please enter the same value again.', async function () {
            await registerPage.registerProcess('John', 'Smith', 'johnsmith@coba.com', 'Cobadaftar88', 'cobadaf')
            const confirmPasswordErr = await registerPage.getConfirmPasswordError()
            expect(confirmPasswordErr).to.equal('Please enter the same value again.')
        })
    })

    describe('010_Mendaftar dengan akun yang sudah terpakai', async function () {
        it('Kembali ke halaman register dan menampilkan pesan There is already account with this email address. If you sure that it is your email address, click here to get your password and access your account', async function () {
            await registerPage.registerProcess('Stone', 'Smith', 'stonesmith@coba.com', 'Cobadaftar88', 'Cobadaftar88')
            const successMes = await registerPage.getSuccessRegisterMessage()   
            expect(successMes).to.equal('There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
        })
    })

    describe('011_Mendaftar dengan mengisi semua data dengan benar', async function () {
        it('Pengguna akan masuk ke halaman My Account dan Halaman menampilkan pesan Thank you for registering with Main Website Store.', async function () {
            await registerPage.registerProcess('Meal', 'Rice', 'mealrice@coba.com', 'Cobadaftar88', 'Cobadaftar88')
            await driver.sleep(5000)
            const successMes = await registerPage.getSuccessRegisterMessage()   
            const welcomeMessage = await homePage.getWelcomeUser()
            expect(welcomeMessage).to.equal('Welcome, Meal Rice!')
            expect(successMes).to.equal('Thank you for registering with Main Website Store.')
        })
    })
    afterEach(async function () {
        await driver.sleep(2000)
    })

    after(async function () {
        await driver.close()
    })
})