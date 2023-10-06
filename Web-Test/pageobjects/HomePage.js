const { By } = require('selenium-webdriver')
const Page = require('./Page')

class HomePage extends Page {
    constructor(driver) {
		super(driver)
	}

    welcomeUserEl = By.className('logged-in')
    productEl = By.className('product-item')
    sizeM = By.id('option-label-size-143-item-168')
    sizeL = By.id('option-label-size-143-item-169')
    colorBlue = By.id('option-label-color-93-item-50')

    async openPage() {
		await this.openUrl('/')
	}

    async getWelcomeUser() {
        await this.driver.sleep(2000)
        return await this.driver.findElement(this.welcomeUserEl).getText()
    }

    async openDetailProduct(){
        await this.driver.findElement(this.productEl).click()
    }
    
    async getUrl() {
        return await this.driver.getCurrentUrl()
    }

}

module.exports = HomePage