const { By, WebDriver } = require('selenium-webdriver')
const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const ComparisonImagePage = require('../pageobjects/ComparisonImagePage')

describe.only('Visual Test', function () {
	/** @type {WebDriver} */ let driver
	/** @type {ComparisonImagePage} */ let comparisonImagePage

	before(async function () {
		driver = await setupDriver()
		comparisonImagePage = new ComparisonImagePage(driver)
        await driver.manage().window().maximize()
	})

    it('Visual Testing halaman https://magento.softwaretestingboard.com/privacy-policy-cookie-restriction-mode', async function () {
        await comparisonImagePage.openPage('/privacy-policy-cookie-restriction-mode')
        await new Promise(done => setTimeout(done, 500))
        await comparisonImagePage.ComparisonProcess('PrivacyPolicy1')
    })

    it('Visual Testing halaman https://magento.softwaretestingboard.com/privacy-policy-cookie-restriction-mode#privacy-policy-title-2', async function () {
        await comparisonImagePage.openPage('/privacy-policy-cookie-restriction-mode#privacy-policy-title-2')
        await new Promise(done => setTimeout(done, 500))
        await comparisonImagePage.ComparisonProcess('PrivacyPolicy2')
    })

    it('Visual Testing halaman https://magento.softwaretestingboard.com/privacy-policy-cookie-restriction-mode#privacy-policy-title-3', async function () {
        await comparisonImagePage.openPage('/privacy-policy-cookie-restriction-mode#privacy-policy-title-3')
        await new Promise(done => setTimeout(done, 500))
        await comparisonImagePage.ComparisonProcess('PrivacyPolicy3')
    })

    it('Visual Testing halaman https://magento.softwaretestingboard.com/privacy-policy-cookie-restriction-mode#privacy-policy-title-4', async function () {
        await comparisonImagePage.openPage('/privacy-policy-cookie-restriction-mode#privacy-policy-title-4')
        await new Promise(done => setTimeout(done, 500))
        await comparisonImagePage.ComparisonProcess('PrivacyPolicy4')
    })

    it('Visual Testing halaman https://magento.softwaretestingboard.com/privacy-policy-cookie-restriction-mode#privacy-policy-title-5', async function () {
        await comparisonImagePage.openPage('/privacy-policy-cookie-restriction-mode#privacy-policy-title-5')
        await new Promise(done => setTimeout(done, 500))
        await comparisonImagePage.ComparisonProcess('PrivacyPolicy5')
    })

    it('Visual Testing halaman https://magento.softwaretestingboard.com/privacy-policy-cookie-restriction-mode#privacy-policy-title-6', async function () {
        await comparisonImagePage.openPage('/privacy-policy-cookie-restriction-mode#privacy-policy-title-6')
        await new Promise(done => setTimeout(done, 500))
        await comparisonImagePage.ComparisonProcess('PrivacyPolicy6')
    })

    it('Visual Testing halaman https://magento.softwaretestingboard.com/privacy-policy-cookie-restriction-mode#privacy-policy-title-7', async function () {
        await comparisonImagePage.openPage('/privacy-policy-cookie-restriction-mode#privacy-policy-title-7')
        await new Promise(done => setTimeout(done, 500))
        await comparisonImagePage.ComparisonProcess('PrivacyPolicy7')
    })

    it('Visual Testing halaman https://magento.softwaretestingboard.com/privacy-policy-cookie-restriction-mode#privacy-policy-title-8', async function () {
        await comparisonImagePage.openPage('/privacy-policy-cookie-restriction-mode#privacy-policy-title-8')
        await new Promise(done => setTimeout(done, 500))
        await comparisonImagePage.ComparisonProcess('PrivacyPolicy8')
    })

    it('Visual Testing halaman https://magento.softwaretestingboard.com/privacy-policy-cookie-restriction-mode#privacy-policy-title-9', async function () {
        await comparisonImagePage.openPage('/privacy-policy-cookie-restriction-mode#privacy-policy-title-9')
        await new Promise(done => setTimeout(done, 500))
        await comparisonImagePage.ComparisonProcess('PrivacyPolicy9')
    })

    it('Visual Testing halaman https://magento.softwaretestingboard.com/privacy-policy-cookie-restriction-mode#privacy-policy-title-10', async function () {
        await comparisonImagePage.openPage('/privacy-policy-cookie-restriction-mode#privacy-policy-title-10')
        await new Promise(done => setTimeout(done, 500))
        await comparisonImagePage.ComparisonProcess('PrivacyPolicy10')
    })

    it('Visual Testing halaman https://magento.softwaretestingboard.com/privacy-policy-cookie-restriction-mode#privacy-policy-title-11', async function () {
        await comparisonImagePage.openPage('/privacy-policy-cookie-restriction-mode#privacy-policy-title-11')
        await new Promise(done => setTimeout(done, 500))
        await comparisonImagePage.ComparisonProcess('PrivacyPolicy11')
    })

    it('Visual Testing halaman https://magento.softwaretestingboard.com/privacy-policy-cookie-restriction-mode#privacy-policy-title-12', async function () {
        await comparisonImagePage.openPage('/privacy-policy-cookie-restriction-mode#privacy-policy-title-12')
        await new Promise(done => setTimeout(done, 500))
        await comparisonImagePage.ComparisonProcess('PrivacyPolicy12')
    })

    it('Visual Testing halaman https://magento.softwaretestingboard.com/privacy-policy-cookie-restriction-mode#privacy-policy-title-13', async function () {
        await comparisonImagePage.openPage('/privacy-policy-cookie-restriction-mode#privacy-policy-title-13')
        await new Promise(done => setTimeout(done, 500))
        await comparisonImagePage.ComparisonProcess('PrivacyPolicy13')
    })

    it('Visual Testing halaman https://magento.softwaretestingboard.com/privacy-policy-cookie-restriction-mode#privacy-policy-title-14', async function () {
        await comparisonImagePage.openPage('/privacy-policy-cookie-restriction-mode#privacy-policy-title-14')
        await new Promise(done => setTimeout(done, 500))
        await comparisonImagePage.ComparisonProcess('PrivacyPolicy14')
    })

	afterEach(async function () {
		await driver.sleep(2000)
	})

	after(async function () {
		await driver.close()
	})
})