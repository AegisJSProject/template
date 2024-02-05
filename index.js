import { AegisComponent, registerComponent } from '@shgysk8zer0/aegis-component';
import { html, appendTo } from '@shgysk8zer0/aegis';

registerComponent('hello-world', class HTMLHelloWorldElement extends AegisComponent {
	constructor() {
		super(({ shadow }) => appendTo(shadow, html`<h1>Hello, World!</h1>`));
	}
});
