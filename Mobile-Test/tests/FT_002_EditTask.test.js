const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../pageobjects/HomePage')
const AllPage = require('../pageobjects/AllPage')
const TaskPage = require('../pageobjects/TaskPage')

describe('FT_002_Edit Task', function () {
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

    describe('001_Menambah task lewat home', async function () {
		it('Menampilkan halaman home dan pesan Task Added', async function () {
            await homePage.taskInput('Task Baru')
            const mess = await allPage.getMessagess()
            const nameTask = await homePage.getTaskName()
            expect(mess).to.equal('Task Added')
			expect(nameTask).to.equal('Task Baru')
		})
	})

    describe('002_Mengubah nama task', async function () {
		it('Menampilkan halaman home dan pesan Task Saved', async function () {
            await homePage.openTask()
			await taskPage.editTask('Nama task udah berubah')
            await taskPage.saveTask()
            const mess = await allPage.getMessagess()
            const nameTask = await homePage.getTaskName()
			expect(nameTask).to.equal('Nama task udah berubah')
            expect(mess).to.equal('Task Saved')
		})
	})

    describe('003_Mengubah yang semula tidak ada tanggal', async function () {
		it('Menampilkan halaman home dan pesan Task Saved', async function () {
            await homePage.openTask()
			await taskPage.editTask('Sudah ada tanggal')
            await taskPage.editDueDate()
            await taskPage.choseDateProccess()
            await allPage.ok()
            await taskPage.saveTask()
            const mess = await allPage.getMessagess()
            const nameTask = await homePage.getTaskName()
			const dateTask = await homePage.getTaskDue()
			expect(nameTask).to.equal('Sudah ada tanggal')
			expect(dateTask).to.equal('Thu, Oct 12, 2023')
            expect(mess).to.equal('Task Saved')
		})
	})

    describe('004_Mengubah yang semula tidak ada jam', async function () {
		it('Menampilkan halaman home dan pesan Task Saved', async function () {
            await homePage.openTask()
			await taskPage.editTask('Sudah ada tanggal dan jam')
            await taskPage.choseTimeNotifiation()
            await taskPage.chosePM()
            await allPage.ok()
            await taskPage.saveTask()
            const mess = await allPage.getMessagess()
            const nameTask = await homePage.getTaskName()
			const dateTask = await homePage.getTaskDue()
			expect(nameTask).to.equal('Sudah ada tanggal dan jam')
			expect(dateTask).to.equal('Thu, Oct 12, 2023, 1:30 PM')
            expect(mess).to.equal('Task Saved')
		})
	})

    describe('005_Mengubah yang semula field repeat yang valuenya no repeat menjadi ada repeat dengan nilai Once a Day', async function () {
		it('Menampilkan halaman home dan pesan Task Saved', async function () {
            await homePage.openTask()
			await taskPage.editTask('Sudah ada Repeat Once a Day')
            await taskPage.addRepeat()
            await taskPage.choseOnceADay()
            await taskPage.saveTask()
            const mess = await allPage.getMessagess()
            const nameTask = await homePage.getTaskName()
			const dateTask = await homePage.getTaskDue()
            const imageRepeat = await homePage.getRepeatImage()
            expect(mess).to.equal('Task Saved')
			expect(nameTask).to.equal('Sudah ada Repeat Once a Day')
			expect(dateTask).to.equal('Thu, Oct 12, 2023, 1:30 PM')
            expect(imageRepeat).to.be.true
            await homePage.openTask()
		})
	})

    describe('006_Mengubah yang semula field repeat yang valuenya no repeat menjadi ada repeat dengan nilai Once a Day (Mon-Fry)', async function () {
		it('Menampilkan halaman home dan pesan Task Saved', async function () {
			await taskPage.editTask('Sudah ada Once a Day (Mon-Fry)')
            await taskPage.addRepeat()
            await taskPage.choseMonFri()
            await taskPage.saveTask()
            const mess = await allPage.getMessagess()
            const nameTask = await homePage.getTaskName()
			const dateTask = await homePage.getTaskDue()
            const imageRepeat = await homePage.getRepeatImage()
            expect(mess).to.equal('Task Saved')
			expect(nameTask).to.equal('Sudah ada Once a Day (Mon-Fry)')
			expect(dateTask).to.equal('Thu, Oct 12, 2023, 1:30 PM')
            expect(imageRepeat).to.be.true
            await homePage.openTask()
		})
	})

    describe('007_Mengubah yang semula field repeat yang valuenya no repeat menjadi ada repeat dengan nilai Once a Week', async function () {
		it('Menampilkan halaman home dan pesan Task Saved', async function () {
			await taskPage.editTask('Sudah ada Repeat Once a Week')
            await taskPage.addRepeat()
            await taskPage.choseOnceAWeek()
            await taskPage.saveTask()
            const mess = await allPage.getMessagess()
            const nameTask = await homePage.getTaskName()
			const dateTask = await homePage.getTaskDue()
            const imageRepeat = await homePage.getRepeatImage()
            expect(mess).to.equal('Task Saved')
			expect(nameTask).to.equal('Sudah ada Repeat Once a Week')
			expect(dateTask).to.equal('Thu, Oct 12, 2023, 1:30 PM')
            expect(imageRepeat).to.be.true
            await homePage.openTask()
		})
	})

    describe('008_Mengubah yang semula field repeat yang valuenya no repeat menjadi ada repeat dengan nilai Once a Month', async function () {
        it('Menampilkan halaman home dan pesan Task Saved', async function () {
            await taskPage.editTask('Sudah ada Repeat Once a Month')
            await taskPage.addRepeat()
            await taskPage.choseOnceAMonth()
            await taskPage.saveTask()
            const mess = await allPage.getMessagess()
            const nameTask = await homePage.getTaskName()
            const dateTask = await homePage.getTaskDue()
            const imageRepeat = await homePage.getRepeatImage()
            expect(mess).to.equal('Task Saved')
            expect(nameTask).to.equal('Sudah ada Repeat Once a Month')
            expect(dateTask).to.equal('Thu, Oct 12, 2023, 1:30 PM')
            expect(imageRepeat).to.be.true
            await homePage.openTask()
        })
    })

    describe('009_Mengubah yang semula field repeat yang valuenya no repeat menjadi ada repeat dengan nilai Once a Year', async function () {
		it('Menampilkan halaman home dan pesan Task Saved', async function () {
			await taskPage.editTask('Sudah ada Repeat Once a Year')
            await taskPage.addRepeat()
            await taskPage.choseOnceAYear()
            await taskPage.saveTask()
            const mess = await allPage.getMessagess()
            const nameTask = await homePage.getTaskName()
			const dateTask = await homePage.getTaskDue()
            const imageRepeat = await homePage.getRepeatImage()
            expect(mess).to.equal('Task Saved')
			expect(nameTask).to.equal('Sudah ada Repeat Once a Year')
			expect(dateTask).to.equal('Thu, Oct 12, 2023, 1:30 PM')
            expect(imageRepeat).to.be.true
            await homePage.openTask()
		})
	})

    describe('010_Mengubah yang semula field List yang valuenya default menjadi Personal', async function () {
		it('Task pindah ke halaman Personal', async function () {
			await taskPage.editTask('Sudah masuk Personal List')
            await taskPage.addToList()
            await taskPage.chosePersonalList()
            await taskPage.saveTask()
            const mess = await allPage.getMessagess()
            expect(mess).to.equal('Task Saved')
            await homePage.listTask()
            await homePage.personalTask()
            const nameTask = await homePage.getTaskName()
			const dateTask = await homePage.getTaskDue()
            const imageRepeat = await homePage.getRepeatImage()
			expect(nameTask).to.equal('Sudah masuk Personal List')
			expect(dateTask).to.equal('Thu, Oct 12, 2023, 1:30 PM')
            expect(imageRepeat).to.be.true
            await homePage.openTask()
		})
	})

    describe('011_Mengubah yang semula field List yang valuenya default menjadi Shopping', async function () {
		it('Task pindah ke halaman Shopping', async function () {
			await taskPage.editTask('Sudah masuk Shopping List')
            await taskPage.addToList()
            await taskPage.choseShoppingList()
            await taskPage.saveTask()
            const mess = await allPage.getMessagess()
            expect(mess).to.equal('Task Saved')
            await homePage.listTask()
            await homePage.shoppingTask()
            const nameTask = await homePage.getTaskName()
			const dateTask = await homePage.getTaskDue()
            const imageRepeat = await homePage.getRepeatImage()
			expect(nameTask).to.equal('Sudah masuk Shopping List')
			expect(dateTask).to.equal('Thu, Oct 12, 2023, 1:30 PM')
            expect(imageRepeat).to.be.true
            await homePage.openTask()
		})
	})

    describe('012_Mengubah yang semula field List yang valuenya default menjadi Wishlist', async function () {
		it('Task pindah ke halaman Wishlist', async function () {
			await taskPage.editTask('Sudah masuk Wishlist')
            await taskPage.addToList()
            await taskPage.choseWishList()
            await taskPage.saveTask()
            const mess = await allPage.getMessagess()
            expect(mess).to.equal('Task Saved')
            await homePage.listTask()
            await homePage.wishlistTask()
            const nameTask = await homePage.getTaskName()
			const dateTask = await homePage.getTaskDue()
            const imageRepeat = await homePage.getRepeatImage()
			expect(nameTask).to.equal('Sudah masuk Wishlist')
			expect(dateTask).to.equal('Thu, Oct 12, 2023, 1:30 PM')
            expect(imageRepeat).to.be.true
            await homePage.openTask()
		})
	})

    describe('013_Mengubah yang semula field List yang valuenya default menjadi Work List', async function () {
		it('Task pindah ke halaman Work List', async function () {
			await taskPage.editTask('Sudah masuk Work List')
            await taskPage.addToList()
            await taskPage.choseWorkList()
            await taskPage.saveTask()
            const mess = await allPage.getMessagess()
            expect(mess).to.equal('Task Saved')
            await homePage.listTask()
            await homePage.workTask()
            const nameTask = await homePage.getTaskName()
			const dateTask = await homePage.getTaskDue()
            const imageRepeat = await homePage.getRepeatImage()
			expect(nameTask).to.equal('Sudah masuk Work List')
			expect(dateTask).to.equal('Thu, Oct 12, 2023, 1:30 PM')
            expect(imageRepeat).to.be.true
            await homePage.openTask()
		})
	})

    describe('014_Menghapus jam', async function () {
		it('Task ditampilkan tanpa jam', async function () {
			await taskPage.editTask('Sudah menghapus jam')
            await taskPage.clearTime()
            await taskPage.saveTask()
            const mess = await allPage.getMessagess()
            const nameTask = await homePage.getTaskName()
			const dateTask = await homePage.getTaskDue()
            const imageRepeat = await homePage.getRepeatImage()
            expect(mess).to.equal('Task Saved')
			expect(nameTask).to.equal('Sudah menghapus jam')
			expect(dateTask).to.equal('Thu, Oct 12, 2023')
            expect(imageRepeat).to.be.true
            await homePage.openTask()
		})
	})
    
    describe('015_Menghapus tanggal', async function () {
		it('Task ditampilkan tanpa tanggal dan jam', async function () {
			await taskPage.editTask('Sudah menghapus jam dan tanggal')
            await taskPage.clearDate()
            await taskPage.saveTask()
            const mess = await allPage.getMessagess()
            const dateTask = await homePage.getTaskDueExisting()
            const imageRepeat = await homePage.getRepeatImage()
            expect(mess).to.equal('Task Saved')
            expect(dateTask).to.be.false
            expect(imageRepeat).to.be.false
		})
	})


    describe('016_Mengubah status menjadi finished', async function () {
		it('Task pindah ke halaman finished', async function () {
            await homePage.checkDoneTask()
            const mess = await allPage.getMessagess()
            expect(mess).to.equal('Task Finished')
            await homePage.listTask()
            await homePage.finishedTask()
		})
	})
	afterEach(async function(){
        await driver.pause(2000)
    })

	after(async function () {
		await driver.deleteSession()
	})
})