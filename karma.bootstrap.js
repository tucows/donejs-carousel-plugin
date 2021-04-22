'use strict';
/* global */

/**
 * @function window.__karma__.loaded
 *
 * @description
 * StealJS needs to be called before executing Karma to run the tests.
 *
 * ref: https://forums.bitovi.com/t/using-karma-to-test-stealjs/70/2
 *
 */
console.info(`Karma Boostrap started`);	// eslint-disable-line no-console
window.__karma__.loaded = function() {
	steal.done().then(() => {
		console.info(`********* Steal Done`);	// eslint-disable-line no-console

		steal.import('src/test/test').then(() => {
			console.info(`********* Tests Loaded`);	// eslint-disable-line no-console
			if (window.__karma__) {
				console.info(`********* Starting Karma`);	// eslint-disable-line no-console
				window.__karma__.start();
			}
		});
	});
};
