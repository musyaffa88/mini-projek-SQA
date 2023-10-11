import { sleep, check } from 'k6'

export default async function (page) {
	await page.goto('https://magento.softwaretestingboard.com/training.html')
	page.waitForSelector('h1.page-title span.base')
	console.log();
	page.screenshot({ path: 'screenshots/08_training_category_page.png' })
	check(page, {
		'Header' : p => p.locator('h1.page-title span.base').textContent() == 'Training'
	})
	sleep(3)
}