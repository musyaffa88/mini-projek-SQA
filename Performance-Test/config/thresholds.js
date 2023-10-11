const thresholds = {
	browser_web_vital_cls: ['p(75)< 0.25'],
	browser_web_vital_fcp: ['p(75)< 3000'],
	browser_web_vital_lcp: ['p(75)< 4000'],
	browser_web_vital_ttfb: ['p(75) < 1800'],
	http_req_failed: ['rate<0.1'],
}

export default thresholds