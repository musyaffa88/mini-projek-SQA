const { By } = require('selenium-webdriver')
const Page = require('./Page')

class FinishOrderPage extends Page {
    constructor(driver) {
		super(driver)
	}

    succesMessageEl = By.css('.page-title-wrapper .page-title .base')
    orderNumberEl = By.className('order-number')
    printReceiptEl = By.css('.page-title-wrapper .action.print')
    continueShoppingBtn = By.className('action priary continue')

    async getSuccesMessage () {
        return await this.driver.findElement(this.succesMessageEl).getText()
    }

    async getOrderNumber () {
        return await this.driver.findElement(this.orderNumberEl).getText()
    }

    async viewOrder() {
        await this.driver.findElement(this.orderNumberEl).click()
    }

    async printReceipt () {
        await this.driver.findElement(this.printReceiptEl).click()
    }

    async backShopping () {
        await this.driver.findElement(this.continueShoppingBtn).click()
    }
}

module.exports = FinishOrderPage