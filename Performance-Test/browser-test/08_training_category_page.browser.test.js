import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://magento.softwaretestingboard.com/training.html')
	page.waitForSelector('.page-title')
	console.log();
	page.screenshot({ path: 'screenshots/08_training_category_page.png' })
	sleep(3)
}