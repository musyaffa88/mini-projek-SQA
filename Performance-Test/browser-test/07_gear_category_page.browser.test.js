import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://magento.softwaretestingboard.com/gear.html')
	page.waitForSelector('.page-title')
	page.screenshot({ path: 'screenshots/07_gear_category_page.png' })
	sleep(3)
}