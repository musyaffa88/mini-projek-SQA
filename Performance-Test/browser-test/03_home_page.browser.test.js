import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://magento.softwaretestingboard.com/')
	page.waitForSelector('.greet.welcome')
	page.screenshot({ path: 'screenshots/03_home_page.png' })
	sleep(3)
}