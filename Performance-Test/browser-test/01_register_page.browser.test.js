import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://magento.softwaretestingboard.com/customer/account/create/')
	page.waitForSelector('.page-title')
	page.screenshot({ path: 'screenshots/01_register_page.png' })
	sleep(3)
}