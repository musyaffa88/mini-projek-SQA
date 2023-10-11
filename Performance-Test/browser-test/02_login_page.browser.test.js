import { sleep, check } from 'k6'

export default async function (page) {
	await page.goto('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2NyZWF0ZS8%2C/')
	page.waitForSelector('h1.page-title span.base')
	page.screenshot({ path: 'screenshots/02_login_page.png' })
	check(page, {
		'Header' : p => p.locator('h1.page-title span.base').textContent() == 'Customer Login'
	})
	sleep(3)
}