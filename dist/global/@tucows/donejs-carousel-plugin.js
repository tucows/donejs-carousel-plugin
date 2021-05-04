/*[process-shim]*/
(function(global, env) {
	// jshint ignore:line
	if (typeof process === "undefined") {
		global.process = {
			argv: [],
			cwd: function() {
				return "";
			},
			browser: true,
			env: {
				NODE_ENV: env || "development"
			},
			version: "",
			platform:
				global.navigator &&
				global.navigator.userAgent &&
				/Windows/.test(global.navigator.userAgent)
					? "win"
					: ""
		};
	}
})(
	typeof self == "object" && self.Object == Object
		? self
		: typeof process === "object" &&
		  Object.prototype.toString.call(process) === "[object process]"
			? global
			: window,
	"development"
);

/*[global-shim-start]*/
(function(exports, global, doEval) {
	// jshint ignore:line
	var origDefine = global.define;

	var get = function(name) {
		var parts = name.split("."),
			cur = global,
			i;
		for (i = 0; i < parts.length; i++) {
			if (!cur) {
				break;
			}
			cur = cur[parts[i]];
		}
		return cur;
	};
	var set = function(name, val) {
		var parts = name.split("."),
			cur = global,
			i,
			part,
			next;
		for (i = 0; i < parts.length - 1; i++) {
			part = parts[i];
			next = cur[part];
			if (!next) {
				next = cur[part] = {};
			}
			cur = next;
		}
		part = parts[parts.length - 1];
		cur[part] = val;
	};
	var useDefault = function(mod) {
		if (!mod || !mod.__esModule) return false;
		var esProps = { __esModule: true, default: true };
		for (var p in mod) {
			if (!esProps[p]) return false;
		}
		return true;
	};

	var hasCjsDependencies = function(deps) {
		return (
			deps[0] === "require" && deps[1] === "exports" && deps[2] === "module"
		);
	};

	var modules =
		(global.define && global.define.modules) ||
		(global._define && global._define.modules) ||
		{};
	var ourDefine = (global.define = function(moduleName, deps, callback) {
		var module;
		if (typeof deps === "function") {
			callback = deps;
			deps = [];
		}
		var args = [],
			i;
		for (i = 0; i < deps.length; i++) {
			args.push(
				exports[deps[i]]
					? get(exports[deps[i]])
					: modules[deps[i]] || get(deps[i])
			);
		}
		// CJS has no dependencies but 3 callback arguments
		if (hasCjsDependencies(deps) || (!deps.length && callback.length)) {
			module = { exports: {} };
			args[0] = function(name) {
				return exports[name] ? get(exports[name]) : modules[name];
			};
			args[1] = module.exports;
			args[2] = module;
		}
		// Babel uses the exports and module object.
		else if (!args[0] && deps[0] === "exports") {
			module = { exports: {} };
			args[0] = module.exports;
			if (deps[1] === "module") {
				args[1] = module;
			}
		} else if (!args[0] && deps[0] === "module") {
			args[0] = { id: moduleName };
		}

		global.define = origDefine;
		var result = callback ? callback.apply(null, args) : undefined;
		global.define = ourDefine;

		// Favor CJS module.exports over the return value
		result = module && module.exports ? module.exports : result;
		modules[moduleName] = result;

		// Set global exports
		var globalExport = exports[moduleName];
		if (globalExport && !get(globalExport)) {
			if (useDefault(result)) {
				result = result["default"];
			}
			set(globalExport, result);
		}
	});
	global.define.orig = origDefine;
	global.define.modules = modules;
	global.define.amd = true;
	ourDefine("@loader", [], function() {
		// shim for @@global-helpers
		var noop = function() {};
		return {
			get: function() {
				return { prepareGlobal: noop, retrieveGlobal: noop };
			},
			global: global,
			__exec: function(__load) {
				doEval(__load.source, global);
			}
		};
	});
})(
	{},
	typeof self == "object" && self.Object == Object
		? self
		: typeof process === "object" &&
		  Object.prototype.toString.call(process) === "[object process]"
			? global
			: window,
	function(__$source__, __$global__) {
		// jshint ignore:line
		eval("(function() { " + __$source__ + " \n }).call(__$global__);");
	}
);

/*@tucows/donejs-carousel-plugin@3.2.2#donejs-carousel-plugin.stache!steal-stache@4.1.5#steal-stache*/
define('@tucows/donejs-carousel-plugin/donejs-carousel-plugin.stache', [
    'module',
    'can-assign',
    'can-stache',
    'can-stache/src/mustache_core',
    'can-view-import@4.2.2#can-view-import',
    'can-stache-bindings@4.10.9#can-stache-bindings'
], function (module, assign, stache, mustacheCore) {
    var renderer = stache('donejs-carousel-plugin.stache', [
        {
            'tokenType': 'special',
            'args': [
                '! partial components start ',
                1
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n',
                1
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '<navDotsSVG',
                2
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t',
                2
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'svg',
                false,
                3
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'version',
                3
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '1.1',
                3
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'version',
                3
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'xmlns',
                3
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'http://www.w3.org/2000/svg',
                3
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'xmlns',
                3
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'xmlns:xlink',
                3
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'http://www.w3.org/1999/xlink',
                3
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'xmlns:xlink',
                3
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'x',
                3
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '0px',
                3
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'x',
                3
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'y',
                3
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '0px',
                3
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'y',
                3
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'viewBox',
                3
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '0 0 18 18',
                3
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'viewBox',
                3
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'enable-background',
                3
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'new 0 0 18 18',
                3
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'enable-background',
                3
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'xml:space',
                3
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'preserve',
                3
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'xml:space',
                3
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'svg',
                false,
                4
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                4
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'circle',
                true,
                5
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'cx',
                5
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '9',
                5
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'cx',
                5
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'cy',
                5
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '9',
                5
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'cy',
                5
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'r',
                5
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '8',
                5
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'r',
                5
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'circle',
                true,
                5
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t',
                5
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'svg',
                6
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n',
                6
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/navDotsSVG',
                7
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n',
                7
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '<simpleCarousel',
                9
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t',
                9
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                10
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                10
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'carousel ',
                10
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'carouselOptions.extraClass',
                10
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' \n\t\t',
                10
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#eq(carouselOptions.transition, \'dissolve\')',
                10
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' dissolve-transition ',
                10
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/eq',
                10
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n\t\t',
                10
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if carouselOptions.breakOnDesktop',
                10
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' breakOnDesktop ',
                10
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                10
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                10
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                13
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                13
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                14
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                14
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'slideTrack',
                14
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                14
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                14
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t',
                14
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'content',
                true,
                15
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'content',
                true,
                15
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                15
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                16
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t',
                16
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                17
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n',
                17
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/simpleCarousel',
                18
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n',
                18
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '! partial components end ',
                19
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n',
                19
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if slides.length',
                21
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t',
                21
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if isDesktopBrowser',
                22
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                22
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#eq(slides.length, 1)',
                23
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t',
                23
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '>simpleCarousel',
                24
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                24
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'else',
                25
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t',
                25
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '! Note: The event handlers are on div.carousel because attaching them to div.slideTrack is unreliable (result of .slideTrack being translated)',
                26
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t',
                26
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                27
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                27
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'carousel ',
                27
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'carouselOptions.extraClass',
                27
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n\t\t\t\t',
                27
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#eq(carouselOptions.transition, \'dissolve\')',
                27
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' dissolve-transition ',
                27
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/eq',
                27
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n\t\t\t\t',
                27
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if carouselOptions.breakOnDesktop',
                27
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' breakOnDesktop ',
                27
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                27
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                27
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:dragstart',
                27
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'preventDefault(scope.event)',
                27
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:dragstart',
                27
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:touchmove',
                27
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'preventDefault(scope.event)',
                27
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:touchmove',
                27
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:keydown',
                27
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'arrowClickHandler(\'keyboard\', scope.event)',
                27
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:keydown',
                27
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                32
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                ' \n\t\t\t\t',
                32
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                33
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                33
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'slideTrack',
                33
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                33
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                33
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t',
                33
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'content',
                true,
                34
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'content',
                true,
                34
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t',
                34
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                35
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t',
                35
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if carouselOptions.navArrows',
                36
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t',
                36
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                37
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                37
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'navArrows',
                37
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                37
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                37
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t',
                37
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'a',
                false,
                38
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'leftArrow arrow',
                38
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                38
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:click',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'arrowClickHandler(\'left\', scope.event)',
                38
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:click',
                38
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'a',
                false,
                38
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t\t',
                38
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'svg',
                false,
                39
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'role',
                39
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'img',
                39
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'role',
                39
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                39
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'iconSvg',
                39
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                39
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'title',
                39
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'left nav arrow',
                39
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'title',
                39
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'svg',
                false,
                39
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t\t\t',
                39
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'use',
                false,
                40
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'href',
                40
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'carouselOptions.navArrows.leftSvgUrl',
                40
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'href',
                40
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'use',
                false,
                40
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'use',
                40
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t\t',
                40
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'svg',
                41
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t',
                41
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'a',
                42
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t\n\t\t\t\t\t\t',
                42
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'a',
                false,
                44
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                44
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'rightArrow arrow',
                44
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                44
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:click',
                44
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'arrowClickHandler(\'right\', scope.event)',
                44
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:click',
                44
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'a',
                false,
                44
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t\t',
                44
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'svg',
                false,
                45
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'role',
                45
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'img',
                45
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'role',
                45
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                45
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'iconSvg',
                45
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                45
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'title',
                45
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'right nav arrow',
                45
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'title',
                45
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'svg',
                false,
                45
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t\t\t',
                45
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'use',
                false,
                46
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'href',
                46
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'carouselOptions.navArrows.rightSvgUrl',
                46
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'href',
                46
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'use',
                false,
                46
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'use',
                46
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t\t',
                46
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'svg',
                47
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t',
                47
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'a',
                48
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t',
                48
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                49
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t',
                49
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                50
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t',
                50
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                51
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t',
                51
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                52
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                52
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'navDots ',
                52
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if carouselOptions.breakOnDesktop',
                52
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' breakOnDesktop ',
                52
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                52
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                52
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                52
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t',
                52
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#for(slides)',
                53
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t',
                53
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                54
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                54
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'dot ',
                54
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#eq(activeSlideIndex, scope.index)',
                54
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'active',
                54
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/eq',
                54
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                54
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:click',
                54
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'scope.vm.activeSlideIndex = scope.index',
                54
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:click',
                54
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                56
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t',
                56
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '>navDotsSVG',
                57
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t',
                57
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                58
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t',
                58
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/for',
                59
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t',
                59
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                60
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                60
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/eq',
                61
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t',
                61
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'else',
                62
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                ' ',
                62
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '! When server side rendering',
                62
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                62
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '>simpleCarousel',
                63
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                63
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#eq(slides.length,1)',
                64
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t',
                64
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '! don\'t show dots ',
                65
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                65
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'else',
                66
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t',
                66
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                67
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                67
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'navDots\n\t\t\t\t',
                67
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if carouselOptions.breakOnDesktop',
                67
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n\t\t\t\t\tbreakOnDesktop\n\t\t\t\t',
                67
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                67
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                67
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                71
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t',
                71
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#for(slides)',
                72
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t',
                72
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                73
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                73
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'dot ',
                73
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#eq(scope.index,0)',
                73
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'active',
                73
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/eq',
                73
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                73
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                73
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t',
                73
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '>navDotsSVG',
                74
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t',
                74
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                75
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t',
                75
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/for',
                76
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t',
                76
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                77
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                77
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/eq',
                78
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t',
                78
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                79
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n',
                79
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'else',
                80
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                ' \n\t',
                80
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '! if there are no slides passed into the viewmodel, just show any content passed into the plugin',
                81
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t',
                81
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'content',
                true,
                82
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'content',
                true,
                82
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n',
                82
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                83
            ]
        },
        {
            'tokenType': 'done',
            'args': [83]
        }
    ]);
    return function (scope, options, nodeList) {
        var moduleOptions = assign({}, options);
        if (moduleOptions.helpers) {
            moduleOptions.helpers = assign({ module: module }, moduleOptions.helpers);
        } else {
            moduleOptions.module = module;
        }
        return renderer(scope, moduleOptions, nodeList);
    };
});
/*@tucows/donejs-carousel-plugin@3.2.2#donejs-carousel-plugin*/
define('@tucows/donejs-carousel-plugin', [
    'exports',
    'can-component',
    'can-define/map/map',
    '@tucows/donejs-carousel-plugin/donejs-carousel-plugin.stache',
    'steal-platform',
    '@tucows/donejs-carousel-plugin/donejs-carousel-plugin.less'
], function (exports, _canComponent, _map, _donejsCarouselPlugin, _stealPlatform) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ViewModel = exports.isDesktop = exports.SWIPE_OBJECT_DEFAULT = undefined;
    var _canComponent2 = _interopRequireDefault(_canComponent);
    var _map2 = _interopRequireDefault(_map);
    var _donejsCarouselPlugin2 = _interopRequireDefault(_donejsCarouselPlugin);
    var _stealPlatform2 = _interopRequireDefault(_stealPlatform);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    var SWIPE_OBJECT_DEFAULT = exports.SWIPE_OBJECT_DEFAULT = {
        startX: null,
        currentX: null,
        swipeLength: null
    };
    var isDesktop = exports.isDesktop = function isDesktop() {
        return Boolean(window.innerWidth >= 1024);
    };
    var ViewModel = exports.ViewModel = _map2.default.extend({
        slides: 'any',
        slideCollection: 'any',
        activeSlide: 'any',
        activeSlideIndex: {
            type: 'number',
            default: 0
        },
        swipeObject: {
            type: 'observable',
            default: SWIPE_OBJECT_DEFAULT
        },
        carouselOptions: 'any',
        autoPlayInterval: 'any',
        autoPlayDirection: {
            type: 'string',
            default: 'right'
        },
        element: 'any',
        isDesktop: 'boolean',
        slideWidth: 'number',
        get isDisableOnDesktop() {
            var breakOnDesktop = this.carouselOptions && this.carouselOptions.breakOnDesktop;
            return breakOnDesktop ? this.isDesktop : false;
        },
        get isMultiSlide() {
            return this.slides && this.slides.length > 1;
        },
        get autoPlayDuration() {
            if (this.carouselOptions) {
                var autoPlay = this.carouselOptions && this.carouselOptions.autoPlay;
                if (isNaN(autoPlay)) {
                    return 0;
                }
                if (autoPlay && this.isMultiSlide && !this.isDisableOnDesktop) {
                    return autoPlay;
                }
            }
            return 0;
        },
        get lastSlideIndex() {
            return this.slides ? this.slides.length - 1 : 0;
        },
        get isDesktopBrowser() {
            return _stealPlatform2.default.isDesktopBrowser;
        },
        oneSlideOver: function oneSlideOver(direction) {
            direction == 'right' ? this.activeSlideIndex++ : this.activeSlideIndex--;
        },
        directionHandler: function directionHandler(direction, maxSlide) {
            if (this.activeSlideIndex !== maxSlide) {
                this.oneSlideOver(direction);
            } else if (this.autoPlayDuration) {
                var oppositeDirection = direction == 'right' ? 'left' : 'right';
                this.autoPlayDirection = oppositeDirection;
                this.oneSlideOver(oppositeDirection);
            }
        },
        arrowClickHandler: function arrowClickHandler(direction, event) {
            if (event) {
                this.preventDefault(event);
            }
            if (direction == 'keyboard') {
                direction = this.determineKeyDirection(event);
            }
            if (direction == 'right') {
                this.directionHandler('right', this.lastSlideIndex);
            } else if (direction == 'left') {
                this.directionHandler('left', 0);
            }
        },
        determineKeyDirection: function determineKeyDirection(event) {
            if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
                if (event.keyCode === 37) {
                    return 'left';
                } else if (event.keyCode === 39) {
                    return 'right';
                }
            }
        },
        isUsingMultipleFingers: function isUsingMultipleFingers(event) {
            var fingerCount = event.touches ? event.touches.length : 1;
            return fingerCount > 1;
        },
        swipeStart: function swipeStart(event) {
            if (!(this.isUsingMultipleFingers(event) || this.isDisableOnDesktop)) {
                var touches = event.touches ? event.touches[0] : null;
                this.swipeObject.startX = this.swipeObject.currentX = touches ? touches.pageX : event.clientX;
            }
        },
        swipeMove: function swipeMove(event) {
            if (!(this.isUsingMultipleFingers(event) || this.isDisableOnDesktop)) {
                var touches = event.touches ? event.touches[0] : null;
                this.swipeObject.currentX = touches ? touches.pageX : event.clientX;
                var swipeLength = void 0;
                this.swipeObject.swipeLength = swipeLength = this.swipeObject.currentX - this.swipeObject.startX;
                if (this.swipeObject.swipeLength < -4 || this.swipeObject.swipeLength > 4) {
                    this.preventDefault(event);
                }
                if (this.carouselOptions.transition == 'dissolve') {
                    var swipeAmount = swipeLength / this.slideWidth;
                    this.fadeSlideByAmount(swipeAmount);
                } else {
                    var currentLeft = -this.slideWidth * this.activeSlideIndex;
                    var pointerPosition = currentLeft + swipeLength;
                    this.moveCarouselToPosition(pointerPosition);
                }
            }
        },
        swipeEnd: function swipeEnd(event) {
            if (!(this.isUsingMultipleFingers(event) || this.isDisableOnDesktop)) {
                var swipePercentage = this.swipeObject.swipeLength / this.slideWidth * 100;
                if (swipePercentage < -10 && this.activeSlideIndex != this.lastSlideIndex) {
                    this.activeSlideIndex++;
                } else if (swipePercentage > 10 && this.activeSlideIndex != 0) {
                    this.activeSlideIndex--;
                } else {
                    this.changeToActiveSlide();
                }
                this.swipeObject = SWIPE_OBJECT_DEFAULT;
            }
        },
        changeToActiveSlide: function changeToActiveSlide() {
            if (this.carouselOptions.transition == 'dissolve') {
                this.fadeToActiveSlide();
            } else {
                this.moveCarouselToActiveSlide();
            }
        },
        moveCarouselToPosition: function moveCarouselToPosition(pointerPosition) {
            var element = this.element.querySelector('.slideTrack');
            element.style.transform = 'translateX(' + pointerPosition + 'px)';
            element.style.transition = 'none';
        },
        moveCarouselToActiveSlide: function moveCarouselToActiveSlide() {
            var element = this.element.querySelector('.slideTrack');
            element.style.transform = 'translateX(' + -(this.activeSlideIndex * 100) + '%)';
            element.style.transition = '500ms ease';
        },
        fadeSlideByAmount: function fadeSlideByAmount(swipeAmount) {
            var OPACITY_FADE_MULTIPLIER = 2;
            var adjacentSlide = void 0;
            var opacity = 1 - Math.abs(swipeAmount * OPACITY_FADE_MULTIPLIER);
            var isFirstSlide = this.activeSlideIndex == 0;
            var isLastSlide = this.activeSlideIndex == this.lastSlideIndex;
            if (this.activeSlide) {
                if (swipeAmount > 0 && !isFirstSlide || swipeAmount < 0 && !isLastSlide) {
                    this.activeSlide.style.opacity = opacity;
                    this.activeSlide.style.transition = 'none';
                }
                if (swipeAmount > 0) {
                    adjacentSlide = this.activeSlide.previousElementSibling;
                } else {
                    adjacentSlide = this.activeSlide.nextElementSibling;
                }
                if (adjacentSlide) {
                    adjacentSlide.style.opacity = 1 - opacity;
                    adjacentSlide.style.transition = 'none';
                }
            }
        },
        fadeToActiveSlide: function fadeToActiveSlide() {
            if (!this.isDisableOnDesktop) {
                var transitionLength = 1000;
                this.slideCollection.forEach(function (slide) {
                    slide.style.transition = transitionLength + 'ms ease';
                });
                this.makeOnlyActiveSlideOpaque();
                this.setActiveSlideZIndex();
            }
        },
        preventDefault: function preventDefault(event) {
            event.preventDefault();
        },
        handleBreakOnDesktop: function handleBreakOnDesktop() {
            this.activeSlideIndex = 0;
            this.clearAutoPlay();
        },
        clearAutoPlay: function clearAutoPlay() {
            if (this.autoPlayInterval) {
                clearInterval(this.autoPlayInterval);
            }
        },
        makeAllSlidesOpaque: function makeAllSlidesOpaque() {
            this.slideCollection.forEach(function (slide) {
                slide.style.opacity = 1;
            });
        },
        makeOnlyActiveSlideOpaque: function makeOnlyActiveSlideOpaque() {
            this.slideCollection.forEach(function (slide) {
                slide.style.opacity = 0;
            });
            if (this.activeSlide) {
                this.activeSlide.style.opacity = 1;
            }
        },
        resetZIndexAllSlides: function resetZIndexAllSlides() {
            this.slideCollection.forEach(function (slide) {
                slide.style.zIndex = 0;
            });
        },
        setActiveSlideZIndex: function setActiveSlideZIndex() {
            this.slideCollection.forEach(function (slide) {
                slide.style.zIndex = 0;
            });
            if (this.activeSlide) {
                this.activeSlide.style.zIndex = 100;
            }
        },
        handleInterval: function handleInterval() {
            var _this = this;
            this.autoPlayInterval = setInterval(function () {
                _this.arrowClickHandler(_this.autoPlayDirection);
            }, this.autoPlayDuration);
        },
        connectedCallback: function connectedCallback(element) {
            var _this2 = this;
            if (!this.isDesktopBrowser) {
                return;
            }
            this.element = element;
            this.slideCollection = element.querySelectorAll('.slide');
            this.activeSlide = this.element.querySelector('.slide' + this.activeSlideIndex);
            this.isDesktop = isDesktop();
            this.slideWidth = this.slideCollection ? this.slideCollection[0].offsetWidth : 0;
            if (!this.isMultiSlide) {
                return;
            }
            var breakOnDesktop = this.carouselOptions.breakOnDesktop;
            var dissolveTransition = this.carouselOptions.transition == 'dissolve';
            var slideTrack = element.querySelector('.slideTrack');
            var duration = this.autoPlayDuration;
            if (duration && !this.isDisableOnDesktop) {
                this.handleInterval();
            }
            this.listenTo(window, 'resize', function () {
                _this2.isDesktop = isDesktop();
                var slide = _this2.element.querySelector('.slide');
                _this2.slideWidth = slide.offsetWidth;
                if (breakOnDesktop) {
                    if (_this2.isDesktop) {
                        _this2.handleBreakOnDesktop();
                        if (dissolveTransition) {
                            _this2.makeAllSlidesOpaque();
                            _this2.resetZIndexAllSlides();
                        }
                    } else if (dissolveTransition) {
                        _this2.makeOnlyActiveSlideOpaque();
                        _this2.setActiveSlideZIndex();
                    }
                }
            });
            this.listenTo(slideTrack, 'pointerdown', function (event) {
                _this2.swipeStart(event);
                _this2.listenTo(document, 'pointermove', function (ev) {
                    _this2.swipeMove(ev);
                });
                _this2.listenTo(document, 'pointerup', function (ev) {
                    _this2.swipeEnd(ev);
                    _this2.stopListening(document);
                });
            });
            this.listenTo('activeSlideIndex', function () {
                _this2.activeSlide = _this2.element.querySelector('.slide' + _this2.activeSlideIndex);
                _this2.changeToActiveSlide();
            });
            this.listenTo('isDisableOnDesktop', function () {
                duration = _this2.autoPlayDuration;
                if (duration && !_this2.isDisableOnDesktop) {
                    _this2.handleInterval();
                }
            });
            return function () {
                _this2.clearAutoPlay();
                _this2.stopListening();
            };
        }
    });
    exports.default = _canComponent2.default.extend({
        tag: 'tucows-donejs-carousel',
        ViewModel: ViewModel,
        view: _donejsCarouselPlugin2.default
    });
});
/*[global-shim-end]*/
(function(global) { // jshint ignore:line
	global._define = global.define;
	global.define = global.define.orig;
}
)(typeof self == "object" && self.Object == Object ? self : (typeof process === "object" && Object.prototype.toString.call(process) === "[object process]") ? global : window);