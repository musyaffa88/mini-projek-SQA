import { sleep, check } from 'k6'

export default async function (page) {
	await page.goto('https://magento.softwaretestingboard.com/')
	page.waitForSelector('ul.header.links li.greet.welcome span.not-logged-in')
	page.screenshot({ path: 'screenshots/03_home_page.png' })
	// check(page, {
	// 	'Message' : p => p.locator('ul.header.links li.greet.welcome span.not-logged-in').textContent() == 'Default welcome msg!'
	// })
	sleep(3)
}