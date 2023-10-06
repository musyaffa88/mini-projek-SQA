const { By, until } = require('selenium-webdriver')
const Page = require('./Page')

class CartPage extends Page {
    constructor(driver) {
		super(driver)
	}

    cartBtn = By.className('action showcart')
    sumItemsPop = By.className('items-total')
    sumPricePop = By.className('amount price-container')
    checkOutBtnPop = By.id('top-cart-btn-checkout')
    productNamePop = By.className('product-item-name')
    productOptionsPop = By.className('product options')
    editProductPop = By.className('action edit')
    deleteProductPop = By.className('action delete')
    viewProductPop = By.className('action viewcart')
    counterQty = By.className('counter-number')
    addToCartBtn = By.id('product-addtocart-button')
    addMes = By.className('page messages')


    async openPage() {
		await this.openUrl('/')
	}

    async openCart(){
        // const addCart = await this.driver.findElement(this.addToCartBtn)
        // await this.driver.wait(until.elementIsEnabled(addCart), 2000)
        // const counterQty = await this.driver.findElement(this.counterQty)
        // await this.driver.wait(until.elementIsVisible(this.counterQty), 2000)
        await this.driver.sleep(8000)
        await this.driver.findElement(this.cartBtn).click()
        await this.driver.sleep(2000)
    }

    async getSumItems(){
        return await this.driver.findElement(this.sumItemsPop).getText()
    }

    async getSumPrice(){
        return await this.driver.findElement(this.sumPricePop).getText()
    }

    async checkOut () {
        await this.driver.findElement(this.checkOutBtnPop).click()
    }

}

module.exports = CartPage