export const centsToPrice = cents => {
	if ((cents / 100) % 1 === 0) {
		return `$${(cents / 100)}`;
	} else {
		return `$${(cents / 100).toFixed(2)}`;
	}
};

export const centsToPriceNoTrailingZeros = cents => {
	return `$${(cents / 100).toFixed()}`;
};