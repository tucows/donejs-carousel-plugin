const karma = require('karma');
const getPortSync = require('get-port-sync');

const port = getPortSync();

module.exports = function(config) {
	config.set({
		autoWatch: false,	// default: true
		basePath: '../',
		browserDisconnectTimeout: 45000,	// default: 2000
		browserDisconnectTolerance: 1,	// default: 0
		browserNoActivityTimeout: 60000, // default: 30000
		browsers: [(process.env.IS_CI !== '1') ? 'ChromeHeadless' : 'ChromeHeadlessCI'],
		browserConsoleLogOptions: {level: karma.constants.LOG_DISABLE},
		captureTimeout: 60000,	// default: 60000
		hostname: 'localhost',
		frameworks: ['mocha'],
		logLevel: karma.constants.LOG_ERROR,	// default: INFO
		port: port,	// default: 9876
		preprocessors: {},
		reporters: ['progress', 'junit'],
		singleRun: true,	// default: false
		customLaunchers: {'ChromeHeadlessCI': {base: 'ChromeHeadless'} },
		junitReporter: {
			outputDir: 'test_results', // results will be saved as $outputDir/$browserName.xml
			outputFile: 'unit_test_results_junit.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
			suite: '', // suite will become the package name attribute in xml testsuite element
			useBrowserName: false, // add browser name to report and classes names
			nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
			classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
			properties: {}, // key value pair of properties to add to the <properties> section of the report
			xmlVersion: null // use '1' if reporting to be per SonarQube 6.2 XML format
		},
		plugins: [
			'karma-mocha',
			'karma-chrome-launcher',
			'karma-junit-reporter'
		],
		files: [
			'node_modules/steal/steal.js',
			'karma.bootstrap.js',
			{
				pattern: '**/*.*',
				included: false
			},
		]
	});
};
