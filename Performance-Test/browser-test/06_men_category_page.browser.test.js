import { sleep, check } from 'k6'

export default async function (page) {
	await page.goto('https://magento.softwaretestingboard.com/men.html')
	page.waitForSelector('h1.page-title span.base')
	page.screenshot({ path: 'screenshots/06_men_category_page.png' })
	check(page, {
		'Header' : p => p.locator('h1.page-title span.base').textContent() == 'Men'
	})
	sleep(3)
}