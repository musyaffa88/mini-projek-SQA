import { browser } from 'k6/experimental/browser'

import thresholds from './config/thresholds_api.js'

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
		current_scenario : scenarioList[__ENV.SCENARIO] || smoke_test,
	}
}

export default function () {
	apiProduct()
	apiCarts()
	apiUsers()
}
