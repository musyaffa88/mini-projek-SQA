import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://magento.softwaretestingboard.com/sale.html')
	page.waitForSelector('.page-title')
	console.log();
	page.screenshot({ path: 'screenshots/09_sale_category_page.png' })
	sleep(3)
}