const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../pageobjects/HomePage')
const AllPage = require('../pageobjects/AllPage')
const TaskPage = require('../pageobjects/TaskPage')

describe('FT_001_Add Task', function () {
	/** @type {WebdriverIO.Browser} */ let driver
	/** @type {AllPage} */ let allPage
	/** @type {HomePage} */ let homePage
	/** @type {TaskPage} */ let taskPage

	before(async function () {
		driver = await setupDriver()
		allPage = new AllPage(driver)
		homePage = new HomePage(driver)
		taskPage = new TaskPage(driver)
		await homePage.addTask()
		await driver.pause(3000)
	})

    describe('001_Membuat task tanpa nama task', async function () {
		it('Menampilkan halaman home dan pesan Enter task at first', async function () {
			await taskPage.editTask('')
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
            expect(mess).to.equal('Enter task at first')
		})
	})

	describe('002_Membuat task hanya dengan nama task', async function () {
		it('Menampilkan halaman home dan pesan Task Added', async function () {
			await taskPage.editTask('Hanya dengan nama task')
            await taskPage.saveTask()
            const mess = await allPage.getMessagess()
            expect(mess).to.equal('Task Added')
			const nameTask = await homePage.getTaskName()
			expect(nameTask).to.equal('Hanya dengan nama task')
		})
	})
	
	describe('003_Membuat task dengan mengisi semua data kecuali jam', async function () {
		it('Menampilkan halaman home dan pesan Task Added', async function () {
			await homePage.addTask()
			await taskPage.editTask('Semua kecuali jam')
			await taskPage.editDueDate()
            await taskPage.choseDateProccess()
            await allPage.ok()
            await taskPage.addRepeat()
            await taskPage.choseNoRepeat()
            await taskPage.addToList()
            await taskPage.choseDefaultList()
            await taskPage.saveTask()
            const mess = await allPage.getMessagess()
			const nameTask = await homePage.getTaskName()
			const dateTask = await homePage.getTaskDue()
            expect(mess).to.equal('Task Added')
			// expect(nameTask).to.equal('3.Semua kecuali jam')
			// expect(dateTask).to.equal('Thu, Oct 12, 2023')
		})
	})

	describe('004_Membuat task dengan mengisi semua data tanpa repeat dan list default', async function () {
		it('Menampilkan halaman home dan pesan Task Added', async function () {
			await homePage.addTask()
			await taskPage.editTask('Semua data tanpa repeat dan list default')
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
			const nameTask = await homePage.getTaskName()
			const dateTask = await homePage.getTaskDue()
            expect(mess).to.equal('Task Added')
			// expect(nameTask).to.equal('Semua data tanpa repeat dan list default')
			// expect(dateTask).to.equal('Thu, Oct 12, 2023, 1:30 PM')
		})
	})

	describe('005_Membuat task dengan mengisi semua data dengan repeat dan list default', async function () {
		it('Menampilkan halaman home dan pesan Task Added', async function () {
			await homePage.addTask()
			await taskPage.editTask('Semua data dengan repeat dan list default')
			await taskPage.editDueDate()
            await taskPage.choseDateProccess()
            await allPage.ok()
			await taskPage.choseTimeNotifiation()
            await taskPage.chosePM()
            await allPage.ok()
            await taskPage.addRepeat()
            await taskPage.choseOnceADay()
            await taskPage.addToList()
            await taskPage.choseDefaultList()
            await taskPage.saveTask()
            const mess = await allPage.getMessagess()
			const nameTask = await homePage.getTaskName()
			const dateTask = await homePage.getTaskDue()
            expect(mess).to.equal('Task Added')
			// expect(nameTask).to.equal('1.Semua data tanpa repeat dan list default')
			// expect(dateTask).to.equal('Thu, Oct 12, 2023, 1:30 PM')
		})
	})

	describe('006_Membuat task dengan mengisi semua data dengan repeat dan list personal', async function () {
		it('Menampilkan halaman home dan pesan Task Added', async function () {
			await homePage.addTask()
			await taskPage.editTask('Semua data dengan repeat dan list personal')
			await taskPage.editDueDate()
            await taskPage.choseDateProccess()
            await allPage.ok()
			await taskPage.choseTimeNotifiation()
            await taskPage.chosePM()
            await allPage.ok()
            await taskPage.addRepeat()
            await taskPage.choseOnceADay()
            await taskPage.addToList()
            await taskPage.chosePersonalList()
            await taskPage.saveTask()
            const mess = await allPage.getMessagess()
			const nameTask = await homePage.getTaskName()
			const dateTask = await homePage.getTaskDue()
            expect(mess).to.equal('Task Added')
			// expect(nameTask).to.equal('1.Semua data tanpa repeat dan list default')
			// expect(dateTask).to.equal('Thu, Oct 12, 2023, 1:30 PM')
		})
	})
	afterEach(async function(){
        await driver.pause(2000)
    })

	after(async function () {
		await driver.deleteSession()
	})
})