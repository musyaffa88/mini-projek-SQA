const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../pageobjects/HomePage')
const AllPage = require('../pageobjects/AllPage')
const TaskPage = require('../pageobjects/TaskPage')

describe('End to End Test', function () {
	/** @type {WebdriverIO.Browser} */ let driver
	/** @type {AllPage} */ let allPage
	/** @type {HomePage} */ let homePage
	/** @type {TaskPage} */ let taskPage

	before(async function () {
		driver = await setupDriver()
		allPage = new AllPage(driver)
		homePage = new HomePage(driver)
		taskPage = new TaskPage(driver)
		await driver.pause(3000)
	})

	describe('001_Membuka halaman task page', async function () {
		it('Menampilkan halaman task page', async function () {
			await homePage.addTask()
            const pageTitle = await taskPage.getNewTaskPageTitle()
            expect(pageTitle).to.equal('New Task')
		})
	})

    describe('002_Membuat task page', async function () {
		it('Menampilkan halaman home dan pesan Task Added', async function () {
			await taskPage.editTask('Buat task baru')
            await taskPage.editDueDate()
            await taskPage.choseDateProccess()
            await allPage.ok()
            await taskPage.choseTimeNotifiation()
            await taskPage.chosePM()
            await allPage.ok()
            await taskPage.addRepeat()
            await taskPage.choseNoRepeat()
            await taskPage.addToList()
            await taskPage.choseDefaultList()
            await taskPage.saveTask()
            const mess = await allPage.getMessagess()
            expect(mess).to.equal('Task Added')
		})
	})

    describe('003_Membuat status Task menjadi selesai', async function () {
		it('Menampilkan pesan Task finished!', async function () {
			await homePage.openTask()
            await taskPage.checklistFinished()
            const checkListMes = await taskPage.getChecklistFinishedMessage()
            expect(checkListMes).to.equal('Task finished!')
		})
	})

    describe('004_Menyimpan task dengan status selesai', async function () {
		it('Task dipindahkan ke List Finished', async function () {
            await taskPage.saveTask()
            const mess = await allPage.getMessagess()
            expect(mess).to.equal('Task Saved')
			await homePage.listTask()
            await homePage.finishedTask()
            const taskListName = await homePage.getTaskName()
            expect(taskListName).to.equal('Buat task baru')
		})
	})

    describe('005_Meghapus task dengan status selesai', async function () {
		it('Menampilkan pesan Task Deleted', async function () {
            await homePage.openTask()
            await taskPage.deleteTask()
            await allPage.ok()
            const mess = await allPage.getMessagess()
            expect(mess).to.equal('Task Deleted')
		})
	})

	afterEach(async function(){
        await driver.pause(2000)
    })

	after(async function () {
		await driver.deleteSession()
	})
})