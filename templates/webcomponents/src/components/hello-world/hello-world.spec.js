const HelloWorldComponent = require('./hello-world');

describe('HelloWorldComponent', () => {
	beforeEach(() => {
		customElements.define('hello-world', HelloWorldComponent);
		document.body.innerHTML = `<hello-world></hello-world>`;
	});
	it('should create', () => {
		expect(document.body.innerHTML).toBe('<hello-world></hello-world>');
	});
	it('should display component template', () => {
		const shadowRoot =
			document.body.querySelector('hello-world').shadowRoot;
		expect(shadowRoot.querySelector('p')).toBe('Hello World!');
	});
});
