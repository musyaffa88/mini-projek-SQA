const { WebDriver } = require('selenium-webdriver')

class Page {
	constructor (driver) {
		/** @type {WebDriver} */
		this.driver = driver
	}

	async openUrl (path) {
		this.driver.get('https://magento.softwaretestingboard.com' + path)
	}
}

module.exports = Page