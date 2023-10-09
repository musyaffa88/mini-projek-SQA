const { remote } = require('webdriverio')

class HomePage {
    constructor (driver){

        /** @type {WebdriverIO.Browser} */
        this.driver = driver
    }

    get addTaskBtn(){return this.driver.$('~Add Task')}
    get categoryTaskBtn(){return this.driver.$('id=com.splendapps.splendo:id/spinnerToolbar')}
    get searchBtn(){return this.driver.$('~Search')}
    get searchField(){return this.driver.$('id=com.splendapps.splendo:id/search_src_text')}
    get searchClearBtn(){return this.driver.$('~Clear query')}
    get searchEmptyMes(){return this.driver.$('id=com.splendapps.splendo:id/tvEmpty')}
    get quickTaskField(){return this.driver.$('id=com.splendapps.splendo:id/etQuickTask')}
    get addQuickTestBtn(){return this.driver.$('id=com.splendapps.splendo:id/ivAddQuickTask')}
    get searchCloseBtn(){return this.driver.$('~Clear query')}
    get backBtn(){return this.driver.$('~Collapse')}
    get checkDone(){return this.driver.$('id=com.splendapps.splendo:id/checkDone')}
    get cardHeaderTitleToday(){return this.driver.$('(//android.widget.TextView[@text="Today"])')}
    get cardHeaderTitleTomorrow(){return this.driver.$('(//android.widget.TextView[@text="Tomorrow"])')}
    get cardHeaderTitleThisWeek(){return this.driver.$('(//android.widget.TextView[@text="This week"])')}
    get cardHeaderTitleThisMonth(){return this.driver.$('(//android.widget.TextView[@text="This month"])')}
    get cardHeaderTitleNextMonth(){return this.driver.$('(//android.widget.TextView[@text="Next month"])')}
    get cardHeaderTitleLater(){return this.driver.$('(//android.widget.TextView[@text="Later"])')}
    get cardHeaderTitleNoDate(){return this.driver.$('(//android.widget.TextView[@text="No date"])')}
    get cardTask1(){return this.driver.$('(//android.widget.RelativeLayout[@resource-id="com.splendapps.splendo:id/task_list_item"])[1]')}
    get cardTask2(){return this.driver.$('(//android.widget.RelativeLayout[@resource-id="com.splendapps.splendo:id/task_list_item"])[2]')}
    get cardTask3(){return this.driver.$('(//android.widget.RelativeLayout[@resource-id="com.splendapps.splendo:id/task_list_item"])[3]')}
    get nameTask1(){return this.driver.$('id=com.splendapps.splendo:id/task_name')}
    // get nameTask1(){return this.driver.$('(//android.widget.TextView[@resource-id="com.splendapps.splendo:id/task_name"])[0]')}
    get nameTask2(){return this.driver.$('(//android.widget.TextView[@resource-id="com.splendapps.splendo:id/task_name"])[1]')}
    get nameTask3(){return this.driver.$('(//android.widget.TextView[@resource-id="com.splendapps.splendo:id/task_name"])[2]')}
    get dueTask1(){return this.driver.$('id=com.splendapps.splendo:id/task_due')}
    // get dueTask1(){return this.driver.$('(//android.widget.TextView[@resource-id="com.splendapps.splendo:id/task_due"])[0]')}
    get dueTask2(){return this.driver.$('(//android.widget.TextView[@resource-id="com.splendapps.splendo:id/task_due"])[1]')}
    get dueTask3(){return this.driver.$('(//android.widget.TextView[@resource-id="com.splendapps.splendo:id/task_due"])[2]')}
    get repeatTask1(){return this.driver.$('~Repeat')}
    get defaultCategory(){return this.driver.$('(//android.widget.ImageView[@content-desc="Task List"])[2]')}
    get personalCategory(){return this.driver.$('(//android.widget.ImageView[@content-desc="Task List"])[3]')}
    get shoppingCategory(){return this.driver.$('(//android.widget.ImageView[@content-desc="Task List"])[4]')}
    get wishlistCategory(){return this.driver.$('(//android.widget.ImageView[@content-desc="Task List"])[5]')}
    get workCategory(){return this.driver.$('(//android.widget.ImageView[@content-desc="Task List"])[6]')}
    get finishedCategory(){return this.driver.$('(//android.widget.ImageView[@content-desc="Task List"])[7]')}
    get addNewCategory(){return this.driver.$('(//android.widget.ImageView[@content-desc="Task List"])[8]')}
    get imageRepeat(){return this.driver.$('//android.widget.ImageView[@content-desc="Repeat"]')}

    get moreOptionsBtn(){return this.driver.$('~More options')}
    get taskListEl(){return this.driver.$('//android.widget.TextView[@text="Task Lists"]')}
    get newListBtn(){return this.driver.$('~New List')}
    get editListBtn(){return this.driver.$('(//android.widget.ImageView[@content-desc="Edit"])[1]')}
    get deleteListBtn(){return this.driver.$('(//android.widget.ImageView[@content-desc="Delete"])[3]')}
    get listField(){return this.driver.$('//android.widget.EditText[@hint="Enter List Name"]')}
    get listMes(){return this.driver.$('/hierarchy/android.widget.Toast')}
    get listName2(){return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.ListView/android.widget.LinearLayout[2]/android.widget.LinearLayout[1]/android.widget.TextView[1]')}
    get listName4(){return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.ListView/android.widget.LinearLayout[4]/android.widget.LinearLayout[1]/android.widget.TextView[1]')}
    get listPageTitle(){return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.view.ViewGroup/android.widget.TextView')}



    async addTask() {
        await this.addTaskBtn.waitForExist()
        await this.addTaskBtn.click()
    }

    // Task Card
    async openTask(){
        await this.cardTask1.waitForExist()
        await this.cardTask1.click()
    }

    async checkDoneTask(){
        await this.checkDone.waitForExist()
        await this.checkDone.click()
    }

    async getTaskName() {
        await this.nameTask1.waitForExist()
        return await this.nameTask1.getText()
    }

    async getTaskDue() {
        await this.dueTask1.waitForExist()
        return await this.dueTask1.getText()
    }

    async getTaskDueExisting() {
        // await this.dueTask1.waitForExist()
        return await this.dueTask1.isExisting()
    }


    async getTaskRepeat() {
        await this.repeatTask1.waitForExist()
        return await this.repeatTask1.getText()
    }

    // List
    async openListPage () {
        await this.moreOptionsBtn.waitForExist()
        await this.moreOptionsBtn.click()
        await this.taskListEl.waitForExist()
        await this.taskListEl.click()
    }
    async addList () {
        await this.newListBtn.waitForExist()
        await this.newListBtn.click()
    }

    async newList (listName) {
        await this.listField.waitForExist()
        await this.listField.setValue(listName)
    }

    async editList (editListName) {
        await this.editListBtn.waitForExist()
        await this.editListBtn.click()
        await this.listField.waitForExist()
        await this.listField.setValue(editListName)
    }

    async deleteList () {
        await this.deleteListBtn.waitForExist()
        await this.deleteListBtn.click()
    }

    async getListPageTitle() {
        await this.listPageTitle.waitForExist()
        return await this.listPageTitle.getText()
    }

    async getListMessagges() {
        await this.listMes.waitForExist()
        return await this.listMes.getText()
    }

    async getListName2() {
        await this.listName2.waitForExist()
        return await this.listName2.getText()
    }

    async getListName4() {
        await this.listName4.waitForExist()
        return await this.listName4.getText()
    }

    async listTask() {
        await this.categoryTaskBtn.waitForExist()
        await this.categoryTaskBtn.click()
    }

    async finishedTask () {
        await this.finishedCategory.waitForExist()
        await this.finishedCategory.click()
    }

    async personalTask () {
        await this.personalCategory.waitForExist()
        await this.personalCategory.click()
    }

    async shoppingTask () {
        await this.shoppingCategory.waitForExist()
        await this.shoppingCategory.click()
    }

    async wishlistTask () {
        await this.wishlistCategory.waitForExist()
        await this.wishlistCategory.click()
    }

    async workTask () {
        await this.workCategory.waitForExist()
        await this.workCategory.click()
    }

    // Search
    async search() {
        await this.searchBtn.waitForExist()
        await this.searchBtn.click()
    }

    async searcInput(search) {
        await this.searchField.waitForExist()
        await this.searchField.setValue(search)
    }

    async clearSearch () {
        await this.searchClearBtn.waitForExist()
        await this.searchClearBtn.click()
    }

    async getSerchEmpty(){
        await this.searchEmptyMes.waitForExist() 
        return await this.searchEmptyMes.getText() 
    }

    // Add Task Quick 
    async taskInput(nameTask){
        await this.quickTaskField.click()
        await this.quickTaskField.setValue(nameTask)
        await this.addQuickTestBtn.waitForExist()
        await this.addQuickTestBtn.click()
    }

    // Repeat
    async getRepeatImage() {
        // await this.imageRepeat.waitForExist()
        return await this.imageRepeat.isExisting()

    }
  
}

module.exports = HomePage