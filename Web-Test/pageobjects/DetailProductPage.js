const { By } = require('selenium-webdriver')
const Page = require('./Page')

class DetailProductPage extends Page {
    constructor(driver) {
		super(driver)
	}

    productTitleEl = By.className('page-title')
    productPriceEl = By.className('price')
    productEl = By.className('product-item')
    sizeM = By.id('option-label-size-143-item-168')
    sizeL = By.id('option-label-size-143-item-169')
    colorBlue = By.id('option-label-color-93-item-50')
    // sizeMes = By.css('.swatch-attribute.size')
    // ColorMes = By.className('swatch-attribute-selected-option')

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
    
    async getProductTitle(){
        return await this.driver.findElement(this.productTitleEl).getText()
    }

    async getProductPrice(){
        return await this.driver.findElement(this.productPriceEl).getText()
    }
    // async getUrl() {
    //     return await this.driver.getCurrentUrl()
    // }

}

module.exports = DetailProductPage