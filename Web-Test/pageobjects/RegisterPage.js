const { By } = require('selenium-webdriver')
const Page = require('./Page')

class RegisterPage extends Page {
    constructor(driver) {
		super(driver)
	}
    firstNameField = By.id('firstname')
    lastNameField = By.id('lastname')
    emailField = By.id('email_address')
    passwordField = By.id('password')
    passwordConfirmationField = By.id('password-confirmation')
    firstNameErr = By.id('firstname-error')
    lastNameErr = By.id('lastname-error')
    emailErr = By.id('email_address-error')
    passwordErr = By.id('password-error')
    passwordConfirmationErr = By.id('password-confirmation-error')
    registerButton = By.className('action submit primary')
    incorrectAccountMes = By.className('message-error error message')
    messagges = By.css('div.page.messages div[role="alert"]')


    async openPage() {
		await this.openUrl('/customer/account/create/')
	}

    /**
	 * f
     * @param {string} firstName
	 * @param {string} lastName
	 * @param {string} email
	 * @param {string} password
	 * @param {string} confirmPassword
	 */
    async registerProcess(firstName, lastName, email, password, confirmPassword) {
        await this.driver.findElement(this.firstNameField).clear()
        await this.driver.findElement(this.firstNameField).sendKeys(firstName)
        await this.driver.findElement(this.lastNameField).clear()
        await this.driver.findElement(this.lastNameField).sendKeys(lastName)
        await this.driver.findElement(this.emailField).clear()
        await this.driver.findElement(this.emailField).sendKeys(email)
        await this.driver.findElement(this.passwordField).clear()
        await this.driver.findElement(this.passwordField).sendKeys(password)
        await this.driver.findElement(this.passwordConfirmationField).clear()
        await this.driver.findElement(this.passwordConfirmationField).sendKeys(confirmPassword)
        await this.driver.executeScript(function(){
            document.querySelector('html').scrollTo(0, 1000)
        })
        await this.driver.sleep(2000)
        await this.driver.findElement(this.registerButton).click()
    }

    async getFirstNameErr(){
        await this.driver.sleep(2000)
        return await this.driver.findElement(this.firstNameErr).getText()
    }

    async getLastNameErr(){
        await this.driver.sleep(2000)
        return await this.driver.findElement(this.lastNameErr).getText()
    }

    async getEmailError(){
        await this.driver.sleep(2000)
        return await this.driver.findElement(this.emailErr).getText()
    }
    
    async getPasswordError(){
        await this.driver.sleep(2000)
        return await this.driver.findElement(this.passwordErr).getText()
    }
    
    async getConfirmPasswordError(){
        await this.driver.sleep(2000)
        return await this.driver.findElement(this.passwordConfirmationErr).getText()
    }

    async getSuccessRegisterMessage(){
        await this.driver.sleep(5000)
        return await this.driver.findElement(this.messagges).getText()
    }
}

module.exports = RegisterPage