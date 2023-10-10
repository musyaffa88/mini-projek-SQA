import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://magento.softwaretestingboard.com/men.html')
	page.waitForSelector('.page-title')
	page.screenshot({ path: 'screenshots/06_men_category_page.png' })
	sleep(3)
}