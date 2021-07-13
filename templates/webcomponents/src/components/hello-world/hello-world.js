const html = require('./hello-world.html');
const template = document.createElement('template');
template.innerHTML = html;
class HelloWorldComponent extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}

	connectedCallback() {}

	attributeChangedCallback(name, oldValue, newValue) {}

	disconnectedCallback() {}
}

module.exports = HelloWorldComponent;
