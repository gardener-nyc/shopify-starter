import requestFrameDebounce from './requestFrameDebounce';

const Viewport = function() {
	this.isListening = false;
	this.listeners = [];
	this.onScroll = this.onScroll.bind(this);
	this.onScroll = requestFrameDebounce(this.onScroll);
	this.manageWindowEventListener();
};

Viewport.prototype.destroy = function() {
	this.isListening = false;
	this.listeners = [];
	window.removeEventListener('scroll', this.onScroll);
	window.removeEventListener('resize', this.onScroll);
};

Viewport.prototype.listen = function(listener) {
	if (this.listeners.indexOf(listener) > -1) return;
	this.listeners.push(listener);
	this.manageWindowEventListener();
};

Viewport.prototype.unlisten = function(listener) {
	let oldListenerIndex = this.listeners.indexOf(listener);
	if (oldListenerIndex > -1) {
		this.listeners.splice(oldListenerIndex, 1);
	}
	this.manageWindowEventListener();
};

Viewport.prototype.onScroll = function() {
	const position = {
		x: window.pageXOffset,
		y: window.pageYOffset,
		height: window.innerHeight,
		width: window.innerWidth,
	};

	for (let i = 0; i < this.listeners.length; i++) {
		let listener = this.listeners[i];
		if (listener && this.listeners.indexOf(listener) > -1) {
			listener(position);
		}
	}
};

Viewport.prototype.manageWindowEventListener = function() {
	if (
		this.listeners.length &&
		!this.isListening
	) {
		window.addEventListener('scroll', this.onScroll);
		window.addEventListener('resize', this.onScroll);
		this.isListening = true;
	} else if (
		!this.listeners.length &&
		this.isListening
	) {
		window.removeEventListener('scroll', this.onScroll);
		window.removeEventListener('resize', this.onScroll);
		this.isListening = false;
	}
};

export default new Viewport();