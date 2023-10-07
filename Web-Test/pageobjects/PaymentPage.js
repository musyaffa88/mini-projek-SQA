const { By } = require('selenium-webdriver')
const Page = require('./Page')

class PaymentPage extends Page {
    constructor(driver) {
		super(driver)
	}

    checkBoxEl = By.id('billing-addres-same-as-shipping-checkmo')
    placeOrderBtn = By.className('action primary checkout')
    discountCodeSpan = By.id('block-discount-heading')
    subTotalEl = By.css('.totals.sub .amount .price')
    shippingPriceEl = By.css('.totals.shipping.excl .amount .price')
    shippingNameEl = By.css('.totals.shipping.excl .mark .value')
    totalEl = By.css('.grand.totals .amount strong .price')
    itemsTotal = By.className('title')
    editShippingInformation = By.css('.shipping-information .ship-to .shipping-information-title .action.action-edit')
    editShippingMethod = By.css('.shipping-information .ship-via .shipping-information-title .action.action-edit')

    async placeOrder () {
        // await this.driver.findElement(this.checkBoxEl).click()
        await this.driver.sleep(5000)
        await this.driver.findElement(this.placeOrderBtn).click()
    }

    async getSubTotal () {
        return await this.driver.findElement(this.subTotalEl).getText()
    }

    async getShippingMethod () {
        return await this.driver.findElement(this.shippingNameEl).getText()
    }

    async getShippingPrice () {
        return await this.driver.findElement(this.shippingPriceEl).getText()
    }
}

module.exports = PaymentPage