import { sleep } from 'k6'

export default async function (page) {
	await page.goto('https://magento.softwaretestingboard.com/radiant-tee.html')
	page.waitForSelector('.items .item.product')
	page.screenshot({ path: 'screenshots/04_detail_product_page.png' })
	sleep(3)
}