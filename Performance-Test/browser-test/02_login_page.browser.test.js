import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2NyZWF0ZS8%2C/')
	page.waitForSelector('.page-title')
	page.screenshot({ path: 'screenshots/02_login_page.png' })
	sleep(3)
}