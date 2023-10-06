const { By } = require('selenium-webdriver')
const Page = require('./Page')

class LoginPage extends Page {
    constructor(driver) {
		super(driver)
	}

    emailField = By.id('email')
    passwordField = By.id('pass')
    emailMes = By.id('email-error')
    passwordMes = By.id('pass-error')
    loginButton = By.id('send2')
    incorrectAccountMes = By.className('message-error error message')

    async openPage() {
		await this.openUrl('/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
	}

    /**
	 * fungsi ini digunakan untuk melakukan login
	 * @param {string} email
	 * @param {string} password
	 */
    async loginProcess(email, password) {
        await this.driver.findElement(this.emailField).sendKeys(email)
        await this.driver.findElement(this.passwordField).sendKeys(password)
        await this.driver.sleep(2000)
        await this.driver.findElement(this.loginButton).click()
    }

    async getEmailError(){
        await this.driver.sleep(1000)
        return await this.driver.findElement(this.emailMes).getText()
    }

    async getPasswordError(){
        await this.driver.sleep(1000)
        return await this.driver.findElement(this.passwordMes).getText()
    }

    async getIncorrectAccountError(){
        await this.driver.sleep(2000)
        return await this.driver.findElement(this.incorrectAccountMes).getText()
    }
}

module.exports = LoginPage