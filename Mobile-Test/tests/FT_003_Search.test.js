const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const HomePage = require('../pageobjects/HomePage')
const AllPage = require('../pageobjects/AllPage')
const TaskPage = require('../pageobjects/TaskPage')

describe('FT_003 Search', function () {
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

	describe('Menambah task lewat home', async function () {
		it('Menampilkan halaman home dan pesan Task Added', async function () {
            await homePage.taskInput('Task Baru')
            const mess = await allPage.getMessagess()
            expect(mess).to.equal('Task Added')
            await driver.pause(3000)
            await homePage.taskInput('Task Baru banget')
            const mess1 = await allPage.getMessagess()
            expect(mess1).to.equal('Task Added')
            await driver.pause(3000)
            await homePage.taskInput('Task sangat baru')
            const mess2 = await allPage.getMessagess()
            expect(mess2).to.equal('Task Added')
		})
	})

    describe('001_Mencoba mencari task dengan kata kunci yang sama dengan nama task', async function () {
		it('Menampilkan halaman dengan card task yang dicari', async function () {
            await homePage.search()
            await homePage.searcInput('Task Baru banget')
            const mess = await homePage.getTaskName()
            expect(mess).to.equal('Task Baru banget')
		})
	})

    describe('002_Mencoba mencari task yang tidak ada', async function () {
		it('Menampilkan halaman kosong dan pesan not found', async function () {
            await homePage.clea
            await homePage.searcInput('Ini task yang tidak ada')
            const emptyMes = await homePage.getSerchEmpty()
            expect(emptyMes).to.include('not found')
		})
	})

    describe('003_Mencoba mencari task yang dengan kata kunci yang umum', async function () {
		it('Menampilkan halaman dengan judul task yang ada kata "Task"', async function () {
            await homePage.clea
            await homePage.searcInput('Task')
            const mess = await homePage.getTaskName()
            expect(mess).to.include('Task')
		})
	})

	afterEach(async function(){
        await driver.pause(2000)
    })

	after(async function () {
		await driver.deleteSession()
	})
})