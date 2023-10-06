const { By, until } = require('selenium-webdriver')
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
    qtyProduct = By.id('qty')
    addToCartBtn = By.id('product-addtocart-button')
    addMes = By.className('page messages')

    async openPage() {
		await this.openUrl('/radiant-tee.html')
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

    /**
	 * 
	 * @param {number} qty
	 */
    async addToCart(qty){
        await this.driver.sleep(2000)
        await this.driver.findElement(this.sizeL).click()
        await this.driver.findElement(this.colorBlue).click()
        await this.driver.findElement(this.qtyProduct).clear()
        await this.driver.findElement(this.qtyProduct).sendKeys(qty)
        await this.driver.findElement(this.addToCartBtn).click()
    }

    async getQtyProduct () {
        return await this.driver.findElement(this.qtyProduct).getAttribute('value')
    }

    async getAddMessage(){
        const addMes = await this.driver.findElement(this.addMes)
        await this.driver.wait(until.elementIsVisible(addMes), 2000)
        return await this.driver.findElement(this.addMes).getText()
    }
    // async getUrl() {
    //     return await this.driver.getCurrentUrl()
    // }

}

module.exports = DetailProductPage