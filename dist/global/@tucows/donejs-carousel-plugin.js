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
		} else if (!args[0] && deps[0] === "exports") {
			// Babel uses the exports and module object.
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

/*@tucows/donejs-carousel-plugin@1.0.1#donejs-carousel-plugin.stache!steal-stache@3.1.3#steal-stache*/
define('@tucows/donejs-carousel-plugin/donejs-carousel-plugin.stache', [
    'module',
    'can-stache',
    'can-stache/src/mustache_core',
    'can-view-import@3.2.9#can-view-import',
    'can-stache-bindings@3.11.12#can-stache-bindings'
], function (module, stache, mustacheCore) {
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
                'id',
                3
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'Layer_1',
                3
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'id',
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
                'carousel \n\t\t\t',
                10
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./carouselOptions.extraClass',
                10
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' \n\t\t\t\t',
                10
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                './carouselOptions.extraClass',
                10
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' \n\t\t\t',
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
            'tokenType': 'attrValue',
            'args': [
                '\n\t\t\t',
                10
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#is ./carouselOptions.transition \'dissolve\'',
                10
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' \n\t\t\t\tdissolve-transition\n\t\t\t',
                10
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/is',
                10
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n\t\t\t',
                10
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./carouselOptions.breakOnDesktop',
                10
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n\t\t\t\tbreakOnDesktop\n\t\t\t',
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
                19
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                19
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                20
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                20
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'slideTrack',
                20
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                20
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                20
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\n\t\t\t',
                20
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'content',
                true,
                22
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'content',
                true,
                22
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\n\t\t',
                22
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                24
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\n\t',
                24
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                26
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n',
                26
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/simpleCarousel',
                27
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n',
                27
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '! partial components end ',
                29
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n',
                29
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./isDesktopBrowser',
                31
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\n\t',
                31
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#is ./slides.length 1',
                33
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n\t\t',
                33
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '>simpleCarousel',
                35
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\n\t',
                35
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'else',
                37
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n\t\t',
                37
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '! Note: We prevent default on the dragstart event (and use mouse events instead) to prevent the creation of the \'ghost image\' on drag',
                39
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                39
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '! Note: The event handlers are on div.carousel because attaching them to div.slideTrack is unreliable (result of .slideTrack being translated)',
                40
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                40
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                41
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                41
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'carousel \n\t\t\t',
                41
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./carouselOptions.extraClass',
                41
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' \n\t\t\t\t',
                41
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                './carouselOptions.extraClass',
                41
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' \n\t\t\t',
                41
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                41
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n\t\t\t',
                41
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#is ./carouselOptions.transition \'dissolve\'',
                41
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' \n\t\t\t\tdissolve-transition\n\t\t\t',
                41
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/is',
                41
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n\t\t\t',
                41
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./carouselOptions.breakOnDesktop',
                41
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n\t\t\t\tbreakOnDesktop\n\t\t\t',
                41
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                41
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                41
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:dragstart',
                41
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './preventDefault(scope.event)',
                41
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:dragstart',
                41
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:mousedown',
                41
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(scope.event, \'start\')',
                41
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:mousedown',
                41
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:mouseup',
                41
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(scope.event, \'end\')',
                41
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:mouseup',
                41
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:mouseleave',
                41
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(scope.event, \'end\')',
                41
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:mouseleave',
                41
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:mousemove',
                41
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(scope.event, \'move\')',
                41
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:mousemove',
                41
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:touchstart',
                41
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(scope.event, \'start\')',
                41
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:touchstart',
                41
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:touchend',
                41
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(scope.event, \'end\')',
                41
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:touchend',
                41
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:touchcancel',
                41
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(scope.event, \'end\')',
                41
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:touchcancel',
                41
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:touchmove',
                41
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(scope.event, \'move\')',
                41
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:touchmove',
                41
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:keydown',
                41
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './arrowClickHandler(\'keyboard\', scope.event)',
                41
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:keydown',
                41
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                65
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                ' \n\t\t\t',
                65
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                66
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                66
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'slideTrack',
                66
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                66
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                66
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\n\t\t\t\t',
                66
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'content',
                true,
                68
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'content',
                true,
                68
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n\t\t\t',
                68
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                70
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n\t\t\t',
                70
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./carouselOptions.navArrows',
                72
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t',
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
                'navArrows',
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
                '\n\n\t\t\t\t\t',
                73
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'a',
                false,
                75
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                75
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'leftArrow arrow',
                75
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                75
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:click',
                75
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './arrowClickHandler(\'left\', scope.event)',
                75
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:click',
                75
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'a',
                false,
                77
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t',
                77
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'svg',
                false,
                78
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'role',
                78
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'img',
                78
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'role',
                78
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                78
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'iconSvg',
                78
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                78
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'title',
                78
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'left nav arrow',
                78
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'title',
                78
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'svg',
                false,
                78
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t\t',
                78
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'use',
                false,
                79
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'href',
                79
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                './carouselOptions.navArrows.leftSvgUrl',
                79
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'href',
                79
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'use',
                false,
                79
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'use',
                79
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t',
                79
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'svg',
                80
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t',
                80
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'a',
                81
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\n\t\t\t\t\t',
                81
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'a',
                false,
                83
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                83
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'rightArrow arrow',
                83
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                83
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:click',
                83
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './arrowClickHandler(\'right\', scope.event)',
                83
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:click',
                83
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'a',
                false,
                85
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t',
                85
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'svg',
                false,
                86
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'role',
                86
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'img',
                86
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'role',
                86
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                86
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'iconSvg',
                86
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                86
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'title',
                86
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'right nav arrow',
                86
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'title',
                86
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'svg',
                false,
                86
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t\t',
                86
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'use',
                false,
                87
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'href',
                87
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                './carouselOptions.navArrows.rightSvgUrl',
                87
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'href',
                87
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'use',
                false,
                87
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'use',
                87
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t',
                87
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'svg',
                88
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t',
                88
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'a',
                89
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t',
                89
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                90
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t',
                90
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                91
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n\t\t',
                91
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                93
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                93
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                94
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                94
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'navDots\n\t\t\t',
                94
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./carouselOptions.breakOnDesktop',
                94
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n\t\t\t\tbreakOnDesktop\n\t\t\t',
                94
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                94
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                94
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                98
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t',
                98
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#each ./slides',
                99
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t',
                99
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                100
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                100
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'dot ',
                100
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#is ../activeSlideIndex scope.index',
                100
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'active',
                100
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/is',
                100
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                100
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:click',
                100
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '../dotClickHandler(scope.index)',
                100
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:click',
                100
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                100
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t',
                100
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '>navDotsSVG',
                101
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t',
                101
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                102
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t',
                102
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/each',
                103
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                103
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                104
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t',
                104
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/is',
                105
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n',
                105
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'else',
                106
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                ' ',
                106
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '! When server side rendering',
                106
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t',
                106
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '>simpleCarousel',
                107
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n\t',
                107
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./isLengthOneOrLess(./slides.length)',
                109
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n         ',
                109
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '! don\'t show dots ',
                110
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n    ',
                110
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'else',
                111
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n    \n        ',
                111
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                113
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                113
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'navDots\n            ',
                113
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./carouselOptions.breakOnDesktop',
                113
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n                breakOnDesktop\n            ',
                113
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                113
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                113
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                117
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n            ',
                117
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#each ./slides',
                118
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n                ',
                118
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                119
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                119
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'dot ',
                119
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#is scope.index 0',
                119
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'active',
                119
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/is',
                119
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                119
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                119
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n                    ',
                119
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '>navDotsSVG',
                120
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n                ',
                120
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                121
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n            ',
                121
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/each',
                122
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n        ',
                122
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                123
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n    ',
                123
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                124
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n',
                124
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                125
            ]
        },
        {
            'tokenType': 'done',
            'args': [125]
        }
    ]);
    return function (scope, options, nodeList) {
        var moduleOptions = { module: module };
        if (!(options instanceof mustacheCore.Options)) {
            options = new mustacheCore.Options(options || {});
        }
        return renderer(scope, options.add(moduleOptions), nodeList);
    };
});
/*@tucows/donejs-carousel-plugin@1.0.1#donejs-carousel-plugin*/
define('@tucows/donejs-carousel-plugin', [
    'exports',
    'can-component',
    'can-define/map/map',
    '@tucows/donejs-carousel-plugin/donejs-carousel-plugin.stache',
    'steal-platform',
    'jquery',
    '@tucows/donejs-carousel-plugin/donejs-carousel-plugin.less'
], function (exports, _canComponent, _map, _donejsCarouselPlugin, _stealPlatform, _jquery) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ViewModel = exports.isMobile = exports.SWIPE_OBJECT_DEFAULT = undefined;
    var _canComponent2 = _interopRequireDefault(_canComponent);
    var _map2 = _interopRequireDefault(_map);
    var _donejsCarouselPlugin2 = _interopRequireDefault(_donejsCarouselPlugin);
    var _stealPlatform2 = _interopRequireDefault(_stealPlatform);
    var _jquery2 = _interopRequireDefault(_jquery);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    var SWIPE_OBJECT_DEFAULT = exports.SWIPE_OBJECT_DEFAULT = {
        startX: null,
        currentX: null,
        swipeLength: null
    };
    var isMobile = exports.isMobile = function isMobile(isTablet) {
        if (isTablet) {
            return window.innerWidth < 1024;
        }
        return window.innerWidth < 600;
    };
    var ViewModel = exports.ViewModel = _map2.default.extend({
        slides: 'any',
        activeSlideIndex: {
            type: 'number',
            value: 0
        },
        activeSlide: {
            get: function get() {
                if (this.activeSlideIndex !== undefined && this.classSelector) {
                    return (0, _jquery2.default)(this.classSelector + ' .slide' + this.activeSlideIndex);
                }
            }
        },
        lastSlideIndex: {
            type: 'number',
            get: function get() {
                if (this.slides) {
                    return this.slides.length - 1;
                }
            }
        },
        swipeObject: {
            type: 'observable',
            value: SWIPE_OBJECT_DEFAULT
        },
        dragging: {
            type: 'boolean',
            value: false
        },
        slideWidth: {
            type: 'number',
            get: function get() {
                var extraClass = this.carouselOptions.extraClass;
                var slide = extraClass ? (0, _jquery2.default)('.' + extraClass + ' .slide') : (0, _jquery2.default)('.slide');
                return slide.outerWidth(true);
            }
        },
        isDesktop: {
            type: 'boolean',
            get: function get() {
                return !isMobile('isTablet');
            }
        },
        carouselOptions: {
            type: 'any',
            value: {},
            set: function set(newVal) {
                if (newVal) {
                    if (newVal.autoPlay && (newVal.breakOnDesktop ? !this.isDesktop : true) && this.slides.length > 1) {
                        this.autoPlay = newVal.autoPlay;
                    }
                    return newVal;
                }
            }
        },
        autoPlayInterval: { type: 'any' },
        autoPlay: {
            type: 'number',
            set: function set(duration) {
                var _this = this;
                if (!isNaN(duration)) {
                    this.autoPlayInterval = setInterval(function () {
                        _this.arrowClickHandler(_this.autoPlayDirection);
                    }, duration);
                    return duration;
                }
            }
        },
        autoPlayDirection: {
            type: 'string',
            value: 'right'
        },
        isDesktopBrowser: {
            type: 'boolean',
            value: _stealPlatform2.default.isDesktopBrowser
        },
        classSelector: {
            type: 'string',
            get: function get() {
                if (this.carouselOptions.extraClass) {
                    return '.' + this.carouselOptions.extraClass + ' .slideTrack';
                }
                return '.slideTrack';
            }
        },
        oneSlideOver: function oneSlideOver(direction) {
            if (direction == 'right') {
                this.activeSlideIndex++;
            } else {
                this.activeSlideIndex--;
            }
        },
        directionHandler: function directionHandler(direction, maxSlide) {
            if (this.activeSlideIndex !== maxSlide) {
                this.oneSlideOver(direction);
            } else if (this.autoPlay) {
                var oppositeDirection = direction == 'right' ? 'left' : 'right';
                this.autoPlayDirection = oppositeDirection;
                this.oneSlideOver(oppositeDirection);
            }
        },
        arrowClickHandler: function arrowClickHandler(direction, event) {
            if (event) {
                event.preventDefault();
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
        dotClickHandler: function dotClickHandler(index) {
            this.activeSlideIndex = index;
        },
        swipeHandler: function swipeHandler(event, action) {
            if (this.carouselOptions.breakOnDesktop && this.isDesktop) {
                return false;
            }
            switch (action) {
            case 'start':
                this.swipeStart(event);
                break;
            case 'move':
                this.swipeMove(event);
                break;
            case 'end':
                this.swipeEnd(event);
                break;
            }
        },
        defineTouchEvent: function defineTouchEvent(event) {
            var fingerCount = event.touches ? event.touches.length : 1;
            var touches = event.touches ? event.touches[0] : null;
            return {
                fingerCount: fingerCount,
                touches: touches
            };
        },
        swipeStart: function swipeStart(event) {
            var touchEvent = this.defineTouchEvent(event);
            if (touchEvent && touchEvent.fingerCount > 1) {
                return false;
            }
            this.swipeObject.startX = this.swipeObject.currentX = touchEvent.touches ? touchEvent.touches.pageX : event.clientX;
            this.dragging = true;
        },
        swipeMove: function swipeMove(event) {
            var touchEvent = this.defineTouchEvent(event);
            if (touchEvent && touchEvent.fingerCount > 1 || !this.dragging) {
                return false;
            }
            this.swipeObject.currentX = touchEvent.touches ? touchEvent.touches.pageX : event.clientX;
            var swipeLength = void 0;
            this.swipeObject.swipeLength = swipeLength = this.swipeObject.currentX - this.swipeObject.startX;
            if (this.swipeObject.swipeLength < -4 || this.swipeObject.swipeLength > 4) {
                this.preventDefault(event);
            }
            if (this.carouselOptions.transition == 'dissolve') {
                var swipeAmount = swipeLength / this.slideWidth;
                this.fadeSlideByAmount(swipeAmount);
            } else {
                var currentLeft = this.getLeft(this.activeSlideIndex);
                var pointerPosition = currentLeft + swipeLength;
                this.moveCarouselToPosition(pointerPosition);
            }
        },
        swipeEnd: function swipeEnd(event) {
            var touchEvent = this.defineTouchEvent(event);
            if (touchEvent && touchEvent.fingerCount > 1 || !this.dragging) {
                return false;
            }
            var swipePercentage = this.swipeObject.swipeLength / this.slideWidth * 100;
            if (swipePercentage < -10 && this.activeSlideIndex != this.lastSlideIndex) {
                this.activeSlideIndex++;
            } else if (swipePercentage > 10 && this.activeSlideIndex != 0) {
                this.activeSlideIndex--;
            } else {
                this.changeToActiveSlide();
            }
            this.swipeObject = SWIPE_OBJECT_DEFAULT;
            this.dragging = false;
        },
        getLeft: function getLeft(slideIndex) {
            var leftOfSlide = -this.slideWidth * slideIndex;
            return leftOfSlide;
        },
        changeToActiveSlide: function changeToActiveSlide() {
            if (this.carouselOptions.transition == 'dissolve') {
                this.fadeToActiveSlide();
            } else {
                this.moveCarouselToActiveSlide();
            }
        },
        moveCarouselToPosition: function moveCarouselToPosition(pointerPosition) {
            var classSelector = this.classSelector;
            (0, _jquery2.default)(classSelector).css({
                'transform': 'translateX(' + pointerPosition + 'px)',
                'transition': 'none'
            });
        },
        moveCarouselToActiveSlide: function moveCarouselToActiveSlide() {
            var classSelector = this.classSelector;
            (0, _jquery2.default)(classSelector).css({
                'transform': 'translateX(' + -(this.activeSlideIndex * 100) + '%)',
                'transition': '500ms ease'
            });
        },
        fadeSlideByAmount: function fadeSlideByAmount(swipeAmount) {
            var OPACITY_FADE_MULTIPLIER = 2;
            var opacity = 1 - Math.abs(swipeAmount * OPACITY_FADE_MULTIPLIER);
            var isFirstSlide = this.activeSlideIndex == 0;
            var isLastSlide = this.activeSlideIndex == this.lastSlideIndex;
            if (swipeAmount > 0 && !isFirstSlide || swipeAmount < 0 && !isLastSlide) {
                this.activeSlide.css({
                    'opacity': opacity,
                    'transition': 'none'
                });
            }
            if (swipeAmount > 0) {
                this.activeSlide.prev().css({
                    'opacity': 1 - opacity,
                    'transition': 'none'
                });
            } else {
                this.activeSlide.next().css({
                    'opacity': 1 - opacity,
                    'transition': 'none'
                });
            }
        },
        fadeToActiveSlide: function fadeToActiveSlide() {
            if (!(this.isDesktop && this.carouselOptions.breakOnDesktop)) {
                var transitionLength = 1000;
                (0, _jquery2.default)(this.classSelector + ' .slide').css({ 'transition': transitionLength + 'ms ease' });
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
            (0, _jquery2.default)(this.classSelector + ' .slide').css({ 'opacity': 1 });
        },
        makeOnlyActiveSlideOpaque: function makeOnlyActiveSlideOpaque() {
            (0, _jquery2.default)(this.classSelector + ' .slide').css({ 'opacity': 0 });
            this.activeSlide.css({ 'opacity': 1 });
        },
        resetZIndexAllSlides: function resetZIndexAllSlides() {
            (0, _jquery2.default)(this.classSelector + ' .slide').css({ 'z-index': 0 });
        },
        setActiveSlideZIndex: function setActiveSlideZIndex() {
            (0, _jquery2.default)(this.classSelector + ' .slide').css({ 'z-index': 0 });
            this.activeSlide.css({ 'z-index': 100 });
        }
    });
    exports.default = _canComponent2.default.extend({
        tag: 'tucows-donejs-carousel',
        ViewModel: ViewModel,
        view: _donejsCarouselPlugin2.default,
        events: {
            '{viewModel} activeSlideIndex': function viewModelActiveSlideIndex() {
                this.viewModel.changeToActiveSlide();
            },
            '{window} resize': function windowResize() {
                var breakOnDesktop = this.viewModel.carouselOptions.breakOnDesktop;
                var isDesktop = this.viewModel.isDesktop;
                var dissolveTransition = this.viewModel.carouselOptions.transition == 'dissolve';
                if (breakOnDesktop) {
                    if (isDesktop) {
                        this.viewModel.handleBreakOnDesktop();
                        if (dissolveTransition) {
                            this.viewModel.makeAllSlidesOpaque();
                            this.viewModel.resetZIndexAllSlides();
                        }
                    } else if (dissolveTransition) {
                        this.viewModel.makeOnlyActiveSlideOpaque();
                        this.viewModel.setActiveSlideZIndex();
                    }
                }
            },
            '{element} beforeremove': function elementBeforeremove() {
                this.viewModel.clearAutoPlay();
            }
        }
    });
});
/*[global-shim-end]*/
(function(global) { // jshint ignore:line
	global._define = global.define;
	global.define = global.define.orig;
}
)(typeof self == "object" && self.Object == Object ? self : (typeof process === "object" && Object.prototype.toString.call(process) === "[object process]") ? global : window);