const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../pageobjects/HomePage')
const AllPage = require('../pageobjects/AllPage')
const TaskPage = require('../pageobjects/TaskPage')

describe('FT_004 List', function () {
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

	describe('001_Membuka halaman list', async function () {
		it('Menampilkan halaman List', async function () {
            await homePage.openListPage()
            const pageTitle = await homePage.getListPageTitle()
            expect(pageTitle).to.equal('Task Lists')
		})
	})

    describe('002_Menambah list tanpa memasukkan nama list', async function () {
		it('Menampilkan pesan "Enter List Name"', async function () {
            await homePage.addList()
            await homePage.newList('')
            await allPage.ok()
            const listMessagges = await homePage.getListMessagges()
            expect(listMessagges).to.equal('Enter List Name')
		})
	})

    
    describe('003_Menambah list dengan memasukkan nama list', async function () {
		it('Menampilkan pesan "List Added"', async function () {
            await homePage.newList('Sport')
            await allPage.ok()
            const listMessagges = await homePage.getListMessagges()
            const listName = await homePage.getListName4()
            expect(listMessagges).to.equal('List Added')
            expect(listName).to.equal('Sport')
		})
	})

    describe('004_Mengubah nama list', async function () {
		it('Menampilkan pesan "List Saved"', async function () {
            await homePage.editList('Personal Baru')
            await allPage.ok()
            const listMessagges = await homePage.getListMessagges()
            const listName = await homePage.getListName2()
            expect(listMessagges).to.equal('List Saved')
            expect(listName).to.equal('Personal Baru')
		})
	})

    describe('005_Menghapus List', async function () {
		it('Menampilkan pesan "List Deleted"', async function () {
            await homePage.deleteList()
            await allPage.ok()
            const listMessagges = await homePage.getListMessagges()
            expect(listMessagges).to.equal('List Deleted')
		})
	})

	afterEach(async function(){
        await driver.pause(2000)
    })

	after(async function () {
		await driver.deleteSession()
	})
})