const { By, WebElement} = require('selenium-webdriver')
const { Select } = require('selenium-webdriver')
const Page = require('./Page')

class CheckOutShippingPage extends Page {
    constructor(driver) {
		super(driver)
	}

    pageTitle = By.id('shipping')
    sumItemsShipping = By.className('title')
    emailField = By.id('customer-email')
    firstNameField = By.name('firstname')
    lastNameField = By.name('lastname')
    companyField = By.name('company')
    addressField = By.name('street[0]')
    addressField1 = By.name('street[1]')
    addressField2 = By.name('street[2]')
    cityField = By.name('city')
    regionIdField = By.name('region_id')
    regionField = By.name('region')
    postCodeField = By.name('postcode')
    countryField = By.css('select[name="country_id"]')
    phoneNumberField = By.name('telephone')
    fixedShippingRB = By.css('input[value="flatrate_flatrate"]')
    tableRateRB = By.css('input[value="tablerate_bestway"]')
    nextButton = By.css('.button.action.continue.primary')
    
    emailErr = By.id('customer-email-error')
    firstNameErr = By.name('shippingAddress.firstname')
    lastNameErr = By.name('shippingAddress.lastname')
    addressErr = By.name('shippingAddress.street.0')
    cityErr = By.name('shippingAddress.city')
    regionErr = By.name('shippingAddress.region_id')
    postCodeErr = By.name('shippingAddress.postcode')
    phoneNumberErr = By.name('shippingAddress.telephone')

    async openPage() {
		await this.openUrl('/checkout/#shipping')
	}
     /**
	 * 
	 * @param {string} email
     * 
	 */

    async getPageTitle () {
        return await this.driver.findElement(this.pageTitle).getText()
    }

    async emailInput (email) {
        await this.driver.sleep(3000)
        await this.driver.findElement(this.emailField).clear()
        await this.driver.findElement(this.emailField).sendKeys(email)
    }
    
    /**
	 * 
	 * @param {string} firstName
	 * @param {string} lastName
	 * @param {string} company
	 * @param {string} adress
	 * @param {string} adress1
	 * @param {string} adress2
	 * @param {string} city
	 * @param {string} postCode
	 * @param {string} country
	 * @param {string} phoneNumber
     * 
	 */
    async shippingProcess(firstName, lastName, company, address, address1, address2, city, postCode, country, phoneNumber) {
        await this.driver.sleep(3000)
        await this.driver.findElement(this.firstNameField).clear()
        await this.driver.findElement(this.firstNameField).sendKeys(firstName)
        await this.driver.findElement(this.lastNameField).clear()
        await this.driver.findElement(this.lastNameField).sendKeys(lastName)
        await this.driver.findElement(this.companyField).clear()
        await this.driver.findElement(this.companyField).sendKeys(company)
        await this.driver.findElement(this.addressField).clear()
        await this.driver.findElement(this.addressField).sendKeys(address)
        await this.driver.findElement(this.addressField1).clear()
        await this.driver.findElement(this.addressField1).sendKeys(address1)
        await this.driver.findElement(this.addressField2).clear()
        await this.driver.findElement(this.addressField2).sendKeys(address2)
        await this.driver.findElement(this.cityField).clear()
        await this.driver.findElement(this.cityField).sendKeys(city)
        await this.driver.findElement(this.postCodeField).clear()
        await this.driver.findElement(this.postCodeField).sendKeys(postCode)
        await this.driver.findElement(this.phoneNumberField).clear()
        await this.driver.findElement(this.phoneNumberField).sendKeys(phoneNumber)
        await this.driver.findElement(this.countryField).sendKeys(country)
        await this.driver.sleep(5000)

    }

    /**
	 * 
	 * @param {string} region
     * 
	 */
    async regionDrop (region) {
        await this.driver.findElement(this.regionIdField).sendKeys(region)

    }

    /**
     * 
     * @param {string} region
     * 
     */
    async regionInput (region) {
        await this.driver.findElement(this.regionField).clear()
        await this.driver.findElement(this.regionField).sendKeys(region)
    }

    async fixedShipping(){
        await this.driver.sleep(5000)
        await this.driver.findElement(this.fixedShippingRB).click()
    }

    async nextShipping(){
        await this.driver.sleep(10000)
        await this.driver.findElement(this.nextButton).click()
    }

    async getCountry () {
        return await this.driver.findElement(this.countryField).getAttribute('value')
    }
    async getRegion () {
        return await this.driver.findElement(this.regionField).getAttribute('value')
    }
    async getPostCode () {
        return await this.driver.findElement(this.postCodeField).getAttribute('value')
    }

    async getEmailErr () {
        await this.driver.sleep(3000)
        return await this.driver.findElement(this.emailErr).getText()
    }

    async getFirstNameErr () {
        await this.driver.sleep(3000)
        return await this.driver.findElement(this.firstNameErr).getText()
    }

    async getLastNameErr () {
        await this.driver.sleep(3000)
        return await this.driver.findElement(this.lastNameErr).getText()
    }

    async getAddressErr () {
        await this.driver.sleep(3000)
        return await this.driver.findElement(this.addressErr).getText()
    }

    async getCityErr () {
        await this.driver.sleep(3000)
        return await this.driver.findElement(this.cityErr).getText()
    }

    async getRegionErr () {
        await this.driver.sleep(3000)
        return await this.driver.findElement(this.regionErr).getText()
    }

    async getPostCodeErr () {
        await this.driver.sleep(3000)
        return await this.driver.findElement(this.postCodeErr).getText()
    }

    async getPhoneNumberErr () {
        await this.driver.sleep(3000)
        return await this.driver.findElement(this.phoneNumberErr).getText()
    }
}

module.exports = CheckOutShippingPage