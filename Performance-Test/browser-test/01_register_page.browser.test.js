import { check, sleep } from 'k6'

export default async function (page) {
	await page.goto('https://magento.softwaretestingboard.com/customer/account/create/')
	page.waitForSelector('h1.page-title span.base')
	page.screenshot({ path: 'screenshots/01_register_page.png' })
	check(page, {
		'Header' : p => p.locator('h1.page-title span.base').textContent() == 'Create New Customer Account'
	})
	sleep(3)
}