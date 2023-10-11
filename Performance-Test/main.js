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

import thresholds from './config/thresholds.js'

import smoke_test from './config/smoke_test_scenario.js'
import average_load_test from './config/average_load_test_scenario.js'
import stress_test from './config/stress_test_scenario.js'
import soak_test from './config/soak_test_scenario.js'
import spike_test from './config/spike_test_scenario.js'
import breakpoint_test from './config/breakpoint_test_scenario.js'

import apiProduct from './api-test/groups/01_product_api.test.js'
import apiCarts from './api-test/groups/02_cart_api.test.js'
import apiUsers from './api-test/groups/03_user_api.test.js'

const scenarioList = {
	smoke: smoke_test,
	average: average_load_test,
	stress: stress_test,
	soak: soak_test,
	spike: spike_test,
	breakpoint: breakpoint_test,
}

export const options = {
	thresholds,
	scenarios: {
		protocolBased : scenarioList[__ENV.SCENARIO] || smoke_test,
		// protocolBased: {
		// 	exec: 'protocolBasedScript',
		// 	executor: 'constant-vus',
		// 	vus: 13,
		// 	duration: '15s',
		// },
		browserBased: {
			exec: 'browserBasedScript',
			executor: 'shared-iterations',
			options: {
				browser: {
					type: 'chromium'
				}
			}
		}
		// apiBased : scenarioList[__ENV.SCENARIO] || smoke_test
		// apiBased: {
		// 	exec: 'protocolBasedScript',
		// 	executor: 'constant-vus',
		// 	vus: 3,
		// 	duration: '10s',
		// } 
	}
}

export async function browserBasedScript () {
	const context = browser.newContext()
	const page = context.newPage()

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
	// API
	apiProduct()
	apiCarts()
	apiUsers()
}

// export function apiBasedScript () {
// }