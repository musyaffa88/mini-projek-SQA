const { remote } = require('webdriverio')

class TaskPage {
    constructor (driver){

        /** @type {WebdriverIO.Browser} */
        this.driver = driver
    }

    get backBtn(){return this.driver.$('~Navigate Up')}
    get deleteTaskBtn(){return this.driver.$('~Delete Task')}


    get saveTaskBtn(){return this.driver.$('~Save Task')}
    get editTaskField(){return this.driver.$('id=com.splendapps.splendo:id/edtTaskName')}
    get checkFinished(){return this.driver.$('id=com.splendapps.splendo:id/checkFinished')}
    get editDueField(){return this.driver.$('id=com.splendapps.splendo:id/edtDueD')}
    get clearDueField(){return this.driver.$('id=com.splendapps.splendo:id/btnClearD')}
    get editDueBtn(){return this.driver.$('id=com.splendapps.splendo:id/btnSetD')}
    get datePickerHeaderYear(){return this.driver.$('id=android:id/date_picker_header_year')}
    get datePickerHeaderDate(){return this.driver.$('id=android:id/date_picker_header_date')}
    get datePickerNextMonth(){return this.driver.$('~Next month')}
    get datePickerPreviousMonth(){return this.driver.$('~Previous month')}
    get choseDate(){return this.driver.$('~12 October 2023')} // tanggal pada bisa diganti sesuai keinginan (Harus Eng)
    get editTimeDueField(){return this.driver.$('id=com.splendapps.splendo:id/edtDueT')}
    get clearTimeDueField(){return this.driver.$('id=com.splendapps.splendo:id/btnClearT')}
    get timePickerHoursHeader(){return this.driver.$('id=android:id/hours')}
    get timePickerMinutesHeader(){return this.driver.$('id=android:id/minutes')}
    get timePickerAMLabel(){return this.driver.$('id=android:id/am_label')}
    get timePickerPMLabel(){return this.driver.$('id=android:id/pm_label')}
    get choseHours(){return this.driver.$('//android.widget.RadialTimePickerView.RadialPickerTouchHelper[@content-desc="1"]')} // Bisa diganti 1-12
    get choseMinutes(){return this.driver.$('//android.widget.RadialTimePickerView.RadialPickerTouchHelper[@content-desc="30"]')} // Bisa diganti 0-59
    get repeatDropdown(){return this.driver.$('id=com.splendapps.splendo:id/spinnerRepeat')}
    get choseNoRepeatEl(){return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.TextView[1]')}
    get choseOnceADayEl(){return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.TextView[2]')}
    get choseMonFriEl(){return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.TextView[3]')}
    get choseOnceAWeekEl(){return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.TextView[4]')}
    get choseOnceAMonthEl(){return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.TextView[5]')}
    get choseOnceAYearEl(){return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.TextView[6]')}
    get addToListEl(){return this.driver.$('id=com.splendapps.splendo:id/spinnerLists')}
    get newListBtn(){return this.driver.$('~Add')}
    get newListField(){return this.driver.$('//android.widget.EditText[@text="Enter List Name"]')}
    get choseDefaultListEl(){return this.driver.$('//android.widget.TextView[@text="Default"]')}
    get chosePersonalListEl(){return this.driver.$('//android.widget.TextView[@text="Personal"]')}
    get choseShoppingListEl(){return this.driver.$('//android.widget.TextView[@text="Shopping"]')}
    get choseWishListEl(){return this.driver.$('//android.widget.TextView[@text="Wishlist"]')}
    get choseWorkListEl(){return this.driver.$('//android.widget.TextView[@text="Work"]')}
    get choseSportListEl(){return this.driver.$('//android.widget.TextView[@text="Sport"]')}

    get newTaskPageTitle(){return this.driver.$('//android.widget.TextView[@text="New Task"]')}

    

    // Task Name
    async editTask (taskName) {
        await this.editTaskField.waitForExist()
        await this.editTaskField.clearValue()
        await this.editTaskField.setValue(taskName)
    }
    async getTaskName () {
        await this.editTaskField.waitForExist()
        return await this.editTaskField.getText()
    }

    // Checklist Finish Task
    async checklistFinished () {
        await this.checkFinished.waitForExist()
        await this.checkFinished.click()
    }

    async getChecklistFinishedMessage () {
        await this.checkFinished.waitForExist()
        return await this.checkFinished.getText()
    }

    // Date
    async editDueDate () {
        await this.editDueField.waitForExist()
        await this.editDueField.click()
    }

    async clearDate () {
        await this.clearDueField.waitForExist()
        await this.clearDueField.click()
    }

    async choseDateProccess () {
        await this.choseDate.waitForExist()
        await this.choseDate.click()
    }

    async getDueDate () {
        await this.editDueField.waitForExist()
        return await this.editDueField.getText()
    }

    // Time
    async choseTimeNotifiation () {
        await this.editTimeDueField.waitForExist()
        await this.editTimeDueField.click()
        await this.choseHours.waitForExist()
        await this.choseHours.click()
        await this.choseMinutes.waitForExist()
        await this.choseMinutes.click()
    }

    async clearTime () {
        await this.clearTimeDueField.waitForExist()
        await this.clearTimeDueField.click()
    }

    async chosePM () {
        await this.timePickerPMLabel.waitForExist()
        await this.timePickerPMLabel.click()
    }

    async choseAM () {
        await this.timePickerAMLabel.waitForExist()
        await this.timePickerAMLabel.click()
    }

    async getTimeDue () {
        await this.editTimeDueField.waitForExist()
        return await this.editTimeDueField.getText()
    }


    // Repeat
    async addRepeat () {
        await this.repeatDropdown.waitForExist()
        await this.repeatDropdown.click()
    }

    async choseNoRepeat () {
        await this.choseNoRepeatEl.waitForExist()
        await this.choseNoRepeatEl.click()
    }

    async choseOnceADay () {
        await this.choseOnceADayEl.waitForExist()
        await this.choseOnceADayEl.click()
    }

    async choseMonFri () {
        await this.choseMonFriEl.waitForExist()
        await this.choseMonFriEl.click()
    }

    async choseOnceAWeek () {
        await this.choseOnceAWeekEl.waitForExist()
        await this.choseOnceAWeekEl.click()
    }
    
    async choseOnceAMonth () {
        await this.choseOnceAMonthEl.waitForExist()
        await this.choseOnceAMonthEl.click()
    }

    async choseOnceAYear () {
        await this.choseOnceAYearEl.waitForExist()
        await this.choseOnceAYearEl.click()
    }

    async getRepeat () {
        await this.repeatDropdown.waitForExist()
        return await this.repeatDropdown.getValue()
    }

    //List
    async addToList () {
        await this.addToListEl.waitForExist()
        await this.addToListEl.click()
    }

    async choseDefaultList () {
        await this.choseDefaultListEl.waitForExist()
        await this.choseDefaultListEl.click()
    }

    async choseShoppingList () {
        await this.choseShoppingListEl.waitForExist()
        await this.choseShoppingListEl.click()
    }

    async chosePersonalList () {
        await this.chosePersonalListEl.waitForExist()
        await this.chosePersonalListEl.click()
    }

    async choseWishList () {
        await this.choseWishListEl.waitForExist()
        await this.choseWishListEl.click()
    }

    async choseWorkList () {
        await this.choseWorkListEl.waitForExist()
        await this.choseWorkListEl.click()
    }

    async choseSportList () {
        await this.choseSportListEl.waitForExist()
        await this.choseSportListEl.click()
    }

    async getList () {
        await this.addToListEl.waitForExist()
        await this.addToListEl.getValue()
    }

    //Save
    async saveTask () {
        await this.saveTaskBtn.click()
    }

    async getNewTaskPageTitle () {
        await this.newTaskPageTitle.waitForExist()
        return await this.newTaskPageTitle.getText()
    }

    //Delete Task
    async deleteTask () {
        await this.deleteTaskBtn.click()
    }
}

module.exports = TaskPage