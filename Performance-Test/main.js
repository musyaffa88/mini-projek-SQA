import { browser } from 'k6/experimental/browser'

import register_protocol from './protocol-test/01_register_page.protocol.test.js'
import login_protocol from './protocol-test/02_login_page.protocol.test.js'
import home_protocol from './protocol-test/03_home_page.protocol.test.js'
import detail_product_protocol from './protocol-test/04_detail_product_page.protocol.test.js'

import register_browser from './browser-test/01_register_page.browser.test.js'
import login_browser from './browser-test/02_login_page.browser.test.js'
import home_browser from './browser-test/03_home_page.browser.test.js'
import detail_product_browser from './browser-test/04_detail_product_page.browser.test.js'
import women_category_browser from './browser-test/05_women_category_page.browser.test.js'
import men_category_browser from './browser-test/06_men_category_page.browser.test.js'
import gear_category_browser from './browser-test/07_gear_category_page.browser.test.js'
import training_category_browser from './browser-test/08_training_category_page.browser.test.js'
import sale_category_browser from './browser-test/09_sale_category_page.browser.test.js'

export const options = {
	scenarios: {
		protocolBased: {
			exec: 'protocolBasedScript',
			executor: 'constant-vus',
			vus: 5,
			duration: '10s',
		},
		browserBased: {
			exec: 'browserBasedScript',
			executor: 'shared-iterations',
			options: {
				browser: {
					type: 'chromium'
				}
			}
		}
	},
	thresholds : {
		http_req_failed: ['rate<=0.1']
	}
}

export async function browserBasedScript () {
	const page = browser.newPage()

	try {
		await register_browser(page)
		await login_browser(page)
		await home_browser(page)
		await detail_product_browser(page)
		await women_category_browser(page)
		await men_category_browser(page)
		await gear_category_browser(page)
		await training_category_browser(page)
		await sale_category_browser(page)
	} finally {
		page.close()
	}
}

export function protocolBasedScript () {
	register_protocol()
	login_protocol()
	home_protocol()
	detail_product_protocol()
}