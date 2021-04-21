'use strict';
/* global*/

console.info(`********* Karma Boostrap accessed`);	// eslint-disable-line no-console
window.__karma__.loaded = function() {
	steal.done().then(() => {
		console.info(`********* Steal Done`);	// eslint-disable-line no-console

		steal.import('src/donejs-carousel-plugin-test').then(() => {
			console.info(`********* Tests Loaded`);	// eslint-disable-line no-console
			if (window.__karma__) {
				console.info(`********* Starting Karma`);	// eslint-disable-line no-console
				window.__karma__.start();
			}
		});
	});
};
