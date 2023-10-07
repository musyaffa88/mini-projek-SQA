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
    addMes = By.css('div.page.messages div[role="alert"]')


    editProductEl = By.className('action action-edit')
    deleteProductEl = By.className('action action-delete')
    updateCartEl = By.id('product-updatecart-button')
    checkOutBtn = By.css('.action.primary.checkout')
    checkOutInfo = By.id('block-shipping')
    regionIdField = By.name('region_id')
    regionField = By.name('region')
    countryField = By.css('select[name="country_id"]')
    postCodeField = By.name('postcode')
    fixedShippingRB = By.css('input[value="flatrate_flatrate"]')
    tableRateRB = By.css('input[value="tablerate_bestway"]')
    discountCodeSpan = By.id('block-discount-heading')
    couponField = By.id('coupon_code')
    couponErr = By.id('coupon_code_error')
    couponInvalidMes = By.css('div.page.messages div[role="alert"]')
    applyDiscount = By.className('action apply primar')
    addToCart = By.css('.products.list.items.product-items .item.product.product-item:nth-child(1) .action.tocart.primary')
    addMes = By.css('div.page.messages  div[data-ui-id="checkout-cart-validationmessages-message-succes"]')
    updateMes = By.css('div.page.messages div[role="alert"]')
    updateShoppingCartEl = By.className('action update')
    // qtyCart = By.css('#shopping-cart-table .cart.item:nth-child(0) input[class="input-text qty"]')
    qtyCart = By.className('input-text qty')
    qtyErr = By.className('control qty')
    emptyCartMes = By.className('cart-empty')
    // sizeInfo = By.css('.item-options dd:nth-child(0)')
    // colorInfo = By.css('.item-options dd:nth-child(1)')
   
    async openPage() {
		await this.openUrl('/checkout/cart/')
	}
    
    // Pop Cart
    async openCart(){
        // const addMes = await this.driver.findElement(this.addMes)
        // await this.driver.wait(until.elementLocated(addMes), 2000)
        await this.driver.sleep(10000)
        await this.driver.findElement(this.cartBtn).click()
    }

    async viewCart () {
        await this.driver.findElement(this.viewProductPop).click()
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

    //Cart Page
    async checkOutPrimary () {
        await this.driver.findElement(this.checkOutBtn).click()
    }

    async updateShoppingCart() {
        await this.driver.findElement(this.updateShoppingCartEl).click()
    }

    async editProduct() {
        await this.driver.findElement(this.editProductEl).click()
        await this.driver.sleep(5000)
    }

    async updateCart() {
        await this.driver.findElement(this.updateCartEl).click()
        await this.driver.sleep(5000)
    }

    async deleteProduct() {
        await this.driver.findElement(this.deleteProductEl).click()
    }

    /**
	 * 
	 * @param {number} qty
	 */
    async editQty (qty) {
        await this.driver.findElement(this.qtyCart).clear()
        await this.driver.findElement(this.qtyCart).sendKeys(qty)
    }

     /**
	 * 
	 * @param {string} region
	 * @param {string} postCode
	 * @param {string} country
     * 
	 */
    async fillingDestinationShipping (country, region, postCode) {
        await this.driver.sleep(5000)
        await this.driver.findElement(this.checkOutInfo).click()
        await this.driver.findElement(this.countryField).sendKeys(country)
        await this.driver.sleep(5000)
        await this.driver.findElement(this.regionField).sendKeys(region)
        await this.driver.sleep(5000)
        await this.driver.findElement(this.postCodeField).sendKeys(postCode)
        await this.driver.sleep(5000)
        await this.driver.findElement(this.fixedShippingRB).click()
        await this.driver.sleep(5000)
    }
    
    async applyDiscount(couponCode) {
        await this.driver.findElement(this.discountCodeSpan).click()
        await this.driver.findElement(this.couponField).sendKeys(couponCode)
        await this.driver.findElement(this.applyDiscount).click()
    }

    async checkOutInformation () {
        await this.driver.findElement(this.checkOutInfo).click()
    }

    async getErrorQty () {
        return this.driver.findElement(this.qtyErr).getText()
    }

    async getErrorCoupon() {
        return this.driver.findElement(this.couponErr).getText()
    }

    async getInvalidCoupon() {
        return this.driver.findElement(this.couponInvalidMes).getText()
    }

    async getUpadateProductMessage(){
        await this.driver.sleep(3000)
        return this.driver.findElement(this.updateMes).getText()
    }

    async getEmptyCartMessage(){
        return this.driver.findElement(this.emptyCartMes).getText()
    }

    async getSize () {
        return this.driver.findElement(this.sizeInfo).getText()
    }

    async getColor () {
        return this.driver.findElement(this.colorInfo).getText()
    }

    // async scroll() {
    //     const scroll = await this.driver.findElement(this.checkOutBtn)
    //     await this.driver
    // }
}

module.exports = CartPage