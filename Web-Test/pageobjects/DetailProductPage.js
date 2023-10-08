const { By, until } = require('selenium-webdriver')
const Page = require('./Page')

class DetailProductPage extends Page {
    constructor(driver) {
		super(driver)
	}

    productTitleEl = By.className('page-title')
    productPriceEl = By.className('price')
    productEl = By.className('product-item')
    sizeXS = By.id('option-label-size-143-item-166')
    sizeS = By.id('option-label-size-143-item-167')
    sizeM = By.id('option-label-size-143-item-168')
    sizeL = By.id('option-label-size-143-item-169')
    sizeXL = By.id('option-label-size-143-item-170')
    colorBlue = By.id('option-label-color-93-item-50')
    colorGray = By.id('option-label-color-93-item-52')
    colorOrange = By.id('option-label-color-93-item-56')
    colorPurple = By.id('option-label-color-93-item-57')
    qtyProduct = By.id('qty')
    addToCartBtn = By.id('product-addtocart-button')
    addMes = By.css('div.page.messages div[role="alert"]')
    sizeMes = By.css('.swatch-opt .swatch-attribute.size .swatch-attribute-selected-option')
    colorMes = By.css('.swatch-opt .swatch-attribute.color .swatch-attribute-selected-option')
    sizeErr = By.id('super_attribute[143]-error')
    colorErr = By.id('super_attribute[93]-error')
    qtyErr = By.id('qty-error')

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
        await this.driver.sleep(2000)
        await this.driver.findElement(this.addToCartBtn).click()
    }

    async addCart(){
        await this.driver.findElement(this.addToCartBtn).click()
    }

    async choseSizeXS () {
        await this.driver.findElement(this.sizeXS).click()
    }

    async choseSizeS () {
        await this.driver.findElement(this.sizeS).click()
    }

    async choseSizeM () {
        await this.driver.findElement(this.sizeM).click()
    }

    async choseSizeL () {
        await this.driver.findElement(this.sizeL).click()
    }

    async choseSizeXL () {
        await this.driver.findElement(this.sizeXL).click()
    }
    
    async choseColorBlue () {
        await this.driver.findElement(this.colorBlue).click()
    }

    async choseColorGray () {
        await this.driver.findElement(this.colorGray).click()
    }

    async choseColorOrange () {
        await this.driver.findElement(this.colorOrange).click()
    }

    async choseColorPurple () {
        await this.driver.findElement(this.colorPurple).click()
    }
    /**
	 * 
	 * @param {number} qty
	 */
    async editQty (qty) {
        await this.driver.findElement(this.qtyProduct).clear()
        await this.driver.findElement(this.qtyProduct).sendKeys(qty)
    }

    async getQtyProduct () {
        return await this.driver.findElement(this.qtyProduct).getAttribute('value')
    }


    async getAddMessage(){
        await this.driver.sleep(5000)
        return await this.driver.findElement(this.addMes).getText()
    }

    async getSizeMessage() {
        await this.driver.sleep(1000)
        return await this.driver.findElement(this.sizeMes).getText()
    }

    async getColorMessage() {
        await this.driver.sleep(1000)
        return await this.driver.findElement(this.colorMes).getText()
    }

    async getSizeError() {
        await this.driver.sleep(1000)
        return await this.driver.findElement(this.sizeErr).getText()
    }

    async getColorError() {
        await this.driver.sleep(1000)
        return await this.driver.findElement(this.colorErr).getText()
    }

    async getQtyError() {
        await this.driver.sleep(1000)
        return await this.driver.findElement(this.qtyErr).getText()
    }
}

module.exports = DetailProductPage