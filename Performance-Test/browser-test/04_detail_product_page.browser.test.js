import { sleep, check } from 'k6'

export default async function (page) {
	await page.goto('https://magento.softwaretestingboard.com/radiant-tee.html')
	page.waitForSelector('div.breadcrumbs ul.items li.item.product')
	page.screenshot({ path: 'screenshots/04_detail_product_page.png' })
	check(page, {
		'Header' : p => p.locator('div.breadcrumbs ul.items li.item.product').textContent() == 'Radiant Tee'
	})
	sleep(3)
}