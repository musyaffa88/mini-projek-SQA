import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://magento.softwaretestingboard.com/women.html')
	page.waitForSelector('.page-title')
	page.screenshot({ path: 'screenshots/05_women_category_page.png' })
	sleep(3)
}