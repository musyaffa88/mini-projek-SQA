const breakpoint_test = {
	exec: 'protocolBasedScript',
	executor: 'ramping-arrival-rate',
	stages: [
		{ duration: '1h', target: 1000 },
	]
}

export default breakpoint_test