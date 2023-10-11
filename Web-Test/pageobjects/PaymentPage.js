const { By, until } = require('selenium-webdriver')
const Page = require('./Page')

class PaymentPage extends Page {
    constructor(driver) {
		super(driver)
	}

    pageTitle = By.className('items payment-methods')
    checkBoxEl = By.id('billing-address-same-as-shipping-checkmo')
    addressDetail = By.className('billing-address-details')
    placeOrderBtn = By.className('action primary checkout')
    discountCodeSpan = By.id('block-discount-heading')
    couponField = By.id('coupon_code')
    applyDiscount = By.className('action apply primar')
    subTotalEl = By.css('.totals.sub .amount .price')
    shippingPriceEl = By.css('.totals.shipping.excl .amount .price')
    shippingNameEl = By.css('.totals.shipping.excl .mark .value')
    totalEl = By.css('.grand.totals .amount strong .price')
    itemsTotal = By.className('title')
    editShippingInformation = By.css('.shipping-information .ship-to .shipping-information-title .action.action-edit')
    editShippingMethod = By.css('.shipping-information .ship-via .shipping-information-title .action.action-edit')
    updateAddressBtn = By.className('action action-update')

    async placeOrder () {
        // await this.driver.findElement(this.checkBoxEl).click()
        await this.driver.sleep(5000)
        await this.driver.findElement(this.placeOrderBtn).click()
    }

    async checkBoxAddress () {
        await this.driver.wait(until.elementLocated(this.checkBoxEl))
        await this.driver.findElement(this.checkBoxEl).click()
    }

    async updateAddress () {
        await this.driver.executeScript(function(){
            document.querySelector('html').scrollTo(0, 1000)
        })
        await this.driver.sleep(5000)
        await this.driver.findElement(this.updateAddress).click()
    }

    async backShipping () {
        await this.driver.executeScript(function(){
            document.querySelector('html').scrollTo(0, 1000)
        })
        await this.driver.sleep(5000)
        await this.driver.findElement(this.editShippingInformation).click()
    }
    async getPageTitle () {
        await this.driver.sleep(5000)
        return await this.driver.findElement(this.pageTitle).getText()
    }

    async getAddressDetail () {
        await this.driver.sleep(5000)
        return await this.driver.findElement(this.addressDetail).getText()
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