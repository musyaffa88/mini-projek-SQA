const { By } = require('selenium-webdriver')
const Page = require('./Page')

class HomePage extends Page {
    constructor(driver) {
		super(driver)
	}

    welcomeUserEl = By.className('logged-in')
    searcField = By.id('search')
    productEl = By.className('product-item-info')
    productNthChild = By.css('.product-items.widget-product-grid .product-item:nth-child(3)')
    productLastChild = By.css('.product-items.widget-product-grid .product-item:last-child')
    sizeNthChild = By.css('.swatch-opt-694 .swatch-attribute.size .swatch-attribute-options.clearfix .option-label-size-143-item-168')
    sizeM = By.id('option-label-size-143-item-168')
    sizeL = By.id('option-label-size-143-item-169')
    colorNthChild = By.css('.swatch-opt-694 .swatch-attribute.color .swatch-attribute-options.clearfix .option-label-color-93-item-52')
    colorBlue = By.id('option-label-color-93-item-50')
    logoEl = By.className('logo')
    // logOutEl = By.css('button.action.switch')

    async openPage() {
		await this.openUrl('/')
	}

    async getWelcomeUser() {
        await this.driver.sleep(5000)
        return await this.driver.findElement(this.welcomeUserEl).getText()
    }

    async addToCart() {
        // await this.driver.findElement(this.productNthChild).click()
        await this.driver.findElement(this.sizeNthChild).click()
        await this.driver.findElement(this.colorNthChild).click()
    }

    async openDetailProduct(){
        await this.driver.sleep(2000)
        await this.driver.findElement(this.productEl).click()
    }

    async openDetailProductNth(){
        await this.driver.sleep(2000)
        await this.driver.findElement(this.productNthChild).click()
    }

    async openDetailProductLast(){
        await this.driver.sleep(2000)
        await this.driver.findElement(this.productLastChild).click()
    }

    async openCart(){
        await this.driver.findElement(this.cartBtn).click()
    }

    async backHome() {
        await this.driver.findElement(this.logoEl).click()
    }

    async logOut () {

    }


}

module.exports = HomePage