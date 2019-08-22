const TIMEOUT_FRAME = 1000 / 60;

const setTimeoutPolyfill = callback => {
	setTimeout(callback, TIMEOUT_FRAME);
};

const requestAnimationFrame = 	window.requestAnimationFrame       ||
								window.webkitRequestAnimationFrame ||
								window.mozRequestAnimationFrame    ||
								window.oRequestAnimationFrame      ||
								window.msRequestAnimationFrame     ||
								setTimeoutPolyfill;

export default requestAnimationFrame;