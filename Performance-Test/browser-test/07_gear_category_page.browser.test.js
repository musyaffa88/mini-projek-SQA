import { sleep, check } from 'k6'

export default async function (page) {
	await page.goto('https://magento.softwaretestingboard.com/gear.html')
	page.waitForSelector('h1.page-title span.base')
	page.screenshot({ path: 'screenshots/07_gear_category_page.png' })
	check(page, {
		'Header' : p => p.locator('h1.page-title span.base').textContent() == 'Gear'
	})
	sleep(3)
}