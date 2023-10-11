// const { By, WebDriver, until } = require('selenium-webdriver')
// const { expect } = require('chai')
// const setupDriver = require('../utils/setupDriver')
// const HomePage = require('../pageobjects/HomePage')
// const LoginPage = require('../pageobjects/LoginPage')
// const DetailProductPage = require('../pageobjects/DetailProductPage')
// const CartPage = require('../pageobjects/CartPage')
// const CheckOutShippingPage = require('../pageobjects/CheckOutShippingPage')
// const PaymentPage = require('../pageobjects/PaymentPage')
// const FinishOrderPage = require('../pageobjects/FinishOrderPage')

// describe.skip('FT_006_Payment Page', function () {
//     /** @type {WebDriver} */ let driver
//     /** @type {HomePage} */ let homePage
//     /** @type {DetailProductPage} */ let detailProductPage
//     /** @type {LoginPage} */ let loginPage
//     /** @type {CartPage} */ let cartPage
//     /** @type {CheckOutShippingPage} */ let checkOutShippingPage
//     /** @type {PaymentPage} */ let paymentPage
//     /** @type {FinishOrderPage} */ let finishOrderPage

//     before(async function () {
//         driver = await setupDriver()
//         homePage = new HomePage(driver)
//         detailProductPage = new DetailProductPage(driver)
//         loginPage = new LoginPage(driver)
//         cartPage = new CartPage(driver)
//         checkOutShippingPage = new CheckOutShippingPage(driver)
//         paymentPage = new PaymentPage(driver)
//         finishOrderPage = new FinishOrderPage(driver)
//         await driver.manage().window().maximize()
//         await homePage.openPage()
//         await detailProductPage.openDetailProduct()
//         // await driver.sleep(13000)
//         await detailProductPage.addToCart(1)
//         await cartPage.openCart()
//         await driver.sleep(5000)
//         await cartPage.checkOut()
//         await checkOutShippingPage.emailInput('cobashipping@coba.com')
//         await checkOutShippingPage.shippingProcess('Fariss', 'woke', '', 'Sidomukti', '', '', 'Kota Indah', '12345', 'Indonesia', '8021820182')
//         await checkOutShippingPage.regionInput('Alaska')
//         await checkOutShippingPage.fixedShipping()
//         await checkOutShippingPage.nextShipping()
//         // const pageTitle = await paymentPage.getPageTitle()
//         // const addrresDetail = await paymentPage.getAddressDetail()
//         // expect(pageTitle).to.include('Payment Method')
//         // expect(addrresDetail).to.include('Fariss woke')
//         // expect(addrresDetail).to.include('Sidomukti')
//         // expect(addrresDetail).to.include('Kota Indah, Alaska 12345')
//         // expect(addrresDetail).to.include('Indonesia')
//         // expect(addrresDetail).to.include('8021820182')
//         // await cartPage.viewCart()
//         // await cartPage.checkOutPrimary()
//         // await loginPage.openPage()
//     })   


//     // describe('001_Melakukan checkout dengan mengisi semua data dengan benar kecuali Email', async function () {
//     //     it('Menampilkan pesan This is a required field.', async function () {
//     //         await driver.sleep(8000)
//     //         await checkOutShippingPage.shippingProcess('Farissss', 'Woke', 'Pt Sejahtera', 'Sidomukti', 'Katarungan', 'RT/RW 02/02', 'Surabaya', '12345', 'Indonesia', '8021820182')
//     //         await checkOutShippingPage.regionInput('Alaska')
//     //         await driver.executeScript(function(){
//     //             document.querySelector('html').scrollTo({ top: 500, behavior: 'smooth'})
//     //         })
//     //         await checkOutShippingPage.nextShipping()           
//     //         const emailErr = await checkOutShippingPage.getEmailErr()
//     //         expect(emailErr).to.equal('This is a required field.')
//     //     })
//     // })

//     // describe('002_Melakukan checkout dengan mengisi semua data dengan benar kecuali Email tidak sesuai format', async function () {
//     //     it('Menampilkan pesan Please enter a valid email address (Ex: johndoe@domain.com).', async function () {
//     //         await checkOutShippingPage.emailInput('cobashipping@')
//     //         await checkOutShippingPage.shippingProcess('Fariss', 'Woke', 'Pt Sejahtera', 'Sidomukti', 'Katarungan', 'RT/RW 02/02', 'Surabaya', '12345', 'Indonesia', '8021820182')
//     //         await checkOutShippingPage.regionInput('Alaska')
//     //         await driver.executeScript(function(){
//     //             document.querySelector('html').scrollTo({ top: 500, behavior: 'smooth'})
//     //         })
//     //         await checkOutShippingPage.nextShipping()
//     //         const emailErr = await checkOutShippingPage.getEmailErr()
//     //         expect(emailErr).to.equal('Please enter a valid email address (Ex: johndoe@domain.com).')
//     //     })
//     // })

//     describe('001_Melakukan update alamat dengan hanya mengganti First Name', async function () {
//         it('Firstname berubah menjadi Jess', async function () {
//             await paymentPage.checkBoxAddress()
//             await driver.sleep(3000)
//             // await checkOutShippingPage.emailInput('cobashipping@coba.com')
//             await checkOutShippingPage.updateShippingProcess('Jess', 'woke', '', 'Sidomukti', '', '', 'Kota Indah', '12345', 'Indonesia', '8021820182')
//             await checkOutShippingPage.regionInput('Alaska')
//             // await driver.executeScript(function(){
//             //     document.querySelector('html').scrollTo({ top: 500, behavior: 'smooth'})
//             // })
//             // await checkOutShippingPage.nextShipping()
//             await paymentPage.updateAddress()
//             const addrresDetail = await paymentPage.getAddressDetail()
//             expect(addrresDetail).to.include('Jess')
            
//         })
//     })

    

//     describe('010_Melakukan checkout dengan hanya mengisi semua data yang required', async function () {
//         it('Berhasil melakukan checkout', async function () {
//             // await driver.sleep(8000)
//             await checkOutShippingPage.emailInput('cobashipping@coba.com')
//             await checkOutShippingPage.shippingProcess('Fariss', 'woke', '', 'Sidomukti', '', '', 'Kota Indah', '12345', 'Indonesia', '8021820182')
//             await checkOutShippingPage.regionInput('Alaska')
//             await checkOutShippingPage.fixedShipping()
//             await checkOutShippingPage.nextShipping()
//             const pageTitle = await paymentPage.getPageTitle()
//             const addrresDetail = await paymentPage.getAddressDetail()
//             expect(pageTitle).to.include('Payment Method')
//             expect(addrresDetail).to.include('Fariss woke')
//             expect(addrresDetail).to.include('Sidomukti')
//             expect(addrresDetail).to.include('Kota Indah, Alaska 12345')
//             expect(addrresDetail).to.include('Indonesia')
//             expect(addrresDetail).to.include('8021820182')
//             await driver.sleep(5000)
//             await paymentPage.backShipping()
//         })
//     })

//     describe('011_Melakukan checkout dengan mengisi semua data ', async function () {
//         it('Berhasil melakukan checkout', async function () {
//             await driver.sleep(8000)
//             await checkOutShippingPage.emailInput('cobashipping@coba.com')
//             await checkOutShippingPage.shippingProcess('Jess', 'Joss', 'Pt sejahtera', 'Bukanmukti', 'Wetan', 'RT/RW 100/08', 'Kota Baru', '66666', 'Indonesia', '8021820182')
//             await checkOutShippingPage.regionInput('Los Santos')
//             await checkOutShippingPage.fixedShipping()
//             await checkOutShippingPage.nextShipping()
//             await driver.sleep(3000)
//             const pageTitle = await paymentPage.getPageTitle()
//             const addrresDetail = await paymentPage.getAddressDetail()
//             expect(pageTitle).to.include('Payment Method')
//             expect(addrresDetail).to.include('Jess Joss')
//             expect(addrresDetail).to.include('Bukanmukti, Wetan, RT/RW 100/08')
//             expect(addrresDetail).to.include('Kota Baru, Los Santos 66666')
//             expect(addrresDetail).to.include('Indonesia')
//             expect(addrresDetail).to.include('8021820182')
//             // await paymentPage.placeOrder()
//         })
//     })

//     afterEach(async function () {
//         await driver.sleep(5000)
//     })

//     after(async function () {
//         await driver.close()
//     })
// })