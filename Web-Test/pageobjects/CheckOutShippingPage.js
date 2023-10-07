const { By, WebElement} = require('selenium-webdriver')
const { Select } = require('selenium-webdriver')
const Page = require('./Page')

class CheckOutShippingPage extends Page {
    constructor(driver) {
		super(driver)
	}

    sumItemsShipping = By.className('title')
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
    tableRateRB = By.name('ko_unique_2')
    nextButton = By.css('.button.action.continue.primary')


    async openPage() {
		await this.openUrl('/checkout/#shipping')
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
	 * @param {string} region
	 * @param {string} postCode
	 * @param {string} country
	 * @param {string} phoneNumber
     * 
	 */
    async shippingProcess(firstName, lastName, company, address, address1, address2, city, region, postCode, country, phoneNumber) {
        await this.driver.sleep(3000)
        await this.driver.findElement(this.firstNameField).clear()
        await this.driver.findElement(this.firstNameField).sendKeys(firstName)
        await this.driver.findElement(this.lastNameField).clear()
        await this.driver.findElement(this.lastNameField).sendKeys(lastName)
        await this.driver.findElement(this.companyField).sendKeys(company)
        await this.driver.findElement(this.addressField).sendKeys(address)
        await this.driver.findElement(this.addressField1).sendKeys(address1)
        await this.driver.findElement(this.addressField2).sendKeys(address2)
        await this.driver.findElement(this.cityField).sendKeys(city)
        await this.driver.findElement(this.postCodeField).sendKeys(postCode)
        await this.driver.findElement(this.phoneNumberField).sendKeys(phoneNumber)
        await this.driver.findElement(this.countryField).sendKeys(country)
        await this.driver.sleep(5000)
        await this.driver.findElement(this.regionField).sendKeys(region)
        await this.driver.sleep(5000)
        await this.driver.findElement(this.fixedShippingRB).click()
        await this.driver.sleep(5000)
        await this.driver.findElement(this.nextButton).click()
    }

}

module.exports = CheckOutShippingPage