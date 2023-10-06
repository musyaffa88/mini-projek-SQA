const { By, WebDriver, until } = require('selenium-webdriver')
const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../pageobjects/HomePage')

async function namafungsi(){
    describe('', function () {
        /** @type {WebDriver} */ let driver
        /** @type {HomePage} */ let homePage
    
        before(async function () {
            driver = await setupDriver()
            homePage = await HomePage(driver)
        })   
        
        describe('', async function () {
            it('', async function () {
            })
        })

        afterEach(async function () {
            await driver.sleep(2000)
        })
    
        after(async function () {
            await driver.close()
        })
    })
}

module.exports = homepage