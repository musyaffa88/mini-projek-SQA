const { remote } = require('webdriverio')

class Page {
    constructor (driver){

        /** @type {WebdriverIO.Browser} */
        this.driver = driver
    }

    get cancelBtn(){return this.driver.$('id=android:id/button2')}
    get okBtn(){return this.driver.$('id=android:id/button1')}
    get messagess(){return this.driver.$('id=com.splendapps.splendo:id/snackbar_text')}

    async ok () {
        await this.okBtn.click()
    }

    async cancel () {
        await this.cancelBtn.click()
    }

    async getMessagess () {
        await this.messagess.waitForExist()
        return this.messagess.getText()
    }

}

module.exports = Page