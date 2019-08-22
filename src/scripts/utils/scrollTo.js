const easeInOutQuint = function (t, b, c, d) {
	if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
	return c/2*((t-=2)*t*t*t*t + 2) + b;
};

const move = scrollTop => {
	window.scrollTo(0, scrollTop);
};

export const getViewportPosition = () => {
	return window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
};

export default (to, duration = 1000, callback) => {
	const start = getViewportPosition();
	const change = to - start;
	let startTimestamp = new Date();

	const animateScroll = function() {
		const now = new Date();
		const currentTime = now - startTimestamp;
		const val = easeInOutQuint(currentTime, start, change, duration);

		move(val);

		if (currentTime < duration) {
			requestAnimationFrame(animateScroll);
		} else {
			move(to);
			callback && callback();
		}
	};
	animateScroll();
};