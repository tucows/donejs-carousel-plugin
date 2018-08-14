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

/*@tucows/donejs-carousel-plugin@0.6.0#donejs-carousel-plugin.stache!steal-stache@3.1.3#steal-stache*/
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
                16
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                16
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                17
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                17
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'slideTrack',
                17
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                17
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                17
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\n\t\t\t',
                17
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'content',
                true,
                19
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'content',
                true,
                19
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\n\t\t',
                19
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                21
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\n\t',
                21
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                23
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n',
                23
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/simpleCarousel',
                24
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n',
                24
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '! partial components end ',
                26
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n',
                26
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./isDesktopBrowser',
                28
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\n\t',
                28
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#is ./slides.length 1',
                30
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n\t\t',
                30
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '>simpleCarousel',
                32
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\n\t',
                32
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'else',
                34
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n\t\t',
                34
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '! Note: We prevent default on the dragstart event (and use mouse events instead) to prevent the creation of the \'ghost image\' on drag',
                36
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                36
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '! Note: The event handlers are on div.carousel because attaching them to div.slideTrack is unreliable (result of .slideTrack being translated)',
                37
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                37
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
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
                'carousel \n\t\t\t',
                38
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./carouselOptions.extraClass',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' \n\t\t\t\t',
                38
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                './carouselOptions.extraClass',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' \n\t\t\t',
                38
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n\t\t\t',
                38
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./carouselOptions.breakOnDesktop',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n\t\t\t\tbreakOnDesktop\n\t\t\t',
                38
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
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
                'on:dragstart',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './preventDefault(%event)',
                38
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:dragstart',
                38
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:mousedown',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(%event, \'start\')',
                38
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:mousedown',
                38
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:mouseup',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(%event, \'end\')',
                38
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:mouseup',
                38
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:mouseleave',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(%event, \'end\')',
                38
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:mouseleave',
                38
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:mousemove',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(%event, \'move\')',
                38
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:mousemove',
                38
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:touchstart',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(%event, \'start\')',
                38
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:touchstart',
                38
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:touchend',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(%event, \'end\')',
                38
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:touchend',
                38
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:touchcancel',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(%event, \'end\')',
                38
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:touchcancel',
                38
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:touchmove',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(%event, \'move\')',
                38
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:touchmove',
                38
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:keydown',
                38
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './arrowClickHandler(\'keyboard\', %event)',
                38
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:keydown',
                38
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                59
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                ' \n\t\t\t',
                59
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                60
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                60
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'slideTrack',
                60
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                60
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                60
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\n\t\t\t\t',
                60
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'content',
                true,
                62
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'content',
                true,
                62
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n\t\t\t',
                62
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                64
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n\t\t\t',
                64
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
                'navArrows\n\t\t\t\t',
                66
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#unless ./carouselOptions.navArrows',
                66
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n\t\t\t\t\tdisplayNone\n\t\t\t\t',
                66
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/unless',
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
                70
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n\t\t\t\t',
                70
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'a',
                false,
                72
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                72
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'leftArrow arrow',
                72
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                72
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:click',
                72
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './arrowClickHandler(\'left\', %event)',
                72
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:click',
                72
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'a',
                false,
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
            'tokenType': 'start',
            'args': [
                'svg',
                false,
                75
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'xmlns',
                75
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'http://www.w3.org/2000/svg',
                75
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'xmlns',
                75
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'viewBox',
                75
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '0 0 512 512',
                75
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'viewBox',
                75
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'svg',
                false,
                75
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'path',
                true,
                75
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'd',
                75
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z',
                75
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'd',
                75
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'path',
                true,
                75
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'svg',
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
            'tokenType': 'close',
            'args': [
                'a',
                76
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\n\t\t\t\t',
                76
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'a',
                false,
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
                'rightArrow arrow',
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
                'on:click',
                78
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './arrowClickHandler(\'right\', %event)',
                78
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:click',
                78
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'a',
                false,
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
            'tokenType': 'start',
            'args': [
                'svg',
                false,
                81
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'xmlns',
                81
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'http://www.w3.org/2000/svg',
                81
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'xmlns',
                81
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'viewBox',
                81
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '0 0 512 512',
                81
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'viewBox',
                81
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'svg',
                false,
                81
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t',
                81
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'path',
                true,
                82
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'd',
                82
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z',
                82
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'd',
                82
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'path',
                true,
                82
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t',
                82
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'svg',
                83
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t',
                83
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'a',
                84
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t',
                84
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                85
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n\t\t',
                85
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                87
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                87
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                88
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                88
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'navDots\n\t\t\t',
                88
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./carouselOptions.breakOnDesktop',
                88
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n\t\t\t\tbreakOnDesktop\n\t\t\t',
                88
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                88
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                88
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                92
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t',
                92
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#each ./slides',
                93
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t',
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
                'dot ',
                94
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#is ../activeSlideIndex %index',
                94
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'active',
                94
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/is',
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
            'tokenType': 'attrStart',
            'args': [
                'on:click',
                94
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '../dotClickHandler(%index)',
                94
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:click',
                94
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                94
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t',
                94
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '>navDotsSVG',
                95
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t',
                95
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                96
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t',
                96
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/each',
                97
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                97
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                98
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t',
                98
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/is',
                99
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n',
                99
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'else',
                100
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                ' ',
                100
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '! When server side rendering',
                100
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t',
                100
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '>simpleCarousel',
                101
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n    ',
                101
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#is ./slides.length 1',
                103
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n         ',
                103
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '! don\'t show dots ',
                104
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n    ',
                104
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'else',
                105
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n    \n        ',
                105
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                107
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                107
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'navDots\n            ',
                107
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./carouselOptions.breakOnDesktop',
                107
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n                breakOnDesktop\n            ',
                107
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                107
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                107
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                111
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n            ',
                111
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#each ./slides',
                112
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n                ',
                112
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
                'dot ',
                113
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#is %index 0',
                113
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'active',
                113
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/is',
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
                113
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n                    ',
                113
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '>navDotsSVG',
                114
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n                ',
                114
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                115
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n            ',
                115
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/each',
                116
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n        ',
                116
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                117
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n    ',
                117
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/is',
                118
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n',
                118
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                119
            ]
        },
        {
            'tokenType': 'done',
            'args': [119]
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
/*@tucows/donejs-carousel-plugin@0.6.0#donejs-carousel-plugin*/
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
        oneSlideOver: function oneSlideOver(direction) {
            if (direction == 'right') {
                this.activeSlideIndex++;
            } else {
                this.activeSlideIndex--;
            }
            this.moveCarousel('active slide');
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
            this.moveCarousel('active slide');
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
                this.swipeEnd();
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
            if (touchEvent.fingerCount > 1) {
                return false;
            }
            this.swipeObject.startX = this.swipeObject.currentX = touchEvent.touches ? touchEvent.touches.pageX : event.clientX;
            this.dragging = true;
        },
        swipeMove: function swipeMove(event) {
            var touchEvent = this.defineTouchEvent(event);
            if (touchEvent.fingerCount > 1 || !this.dragging) {
                return false;
            }
            var currentLeft = this.getLeft(this.activeSlideIndex);
            this.swipeObject.currentX = touchEvent.touches ? touchEvent.touches.pageX : event.clientX;
            var swipeLength = void 0;
            this.swipeObject.swipeLength = swipeLength = this.swipeObject.currentX - this.swipeObject.startX;
            if (this.swipeObject.swipeLength < -4 || this.swipeObject.swipeLength > 4) {
                this.preventDefault(event);
            }
            var moveAmount = currentLeft + swipeLength;
            this.moveCarousel('pointer position', moveAmount);
        },
        swipeEnd: function swipeEnd() {
            var swipePercentage = this.swipeObject.swipeLength / this.slideWidth * 100;
            if (swipePercentage < -10 && this.activeSlideIndex != this.lastSlideIndex) {
                this.activeSlideIndex++;
                this.moveCarousel('active slide');
            } else if (swipePercentage > 10 && this.activeSlideIndex != 0) {
                this.activeSlideIndex--;
                this.moveCarousel('active slide');
            } else {
                this.moveCarousel('active slide');
            }
            this.swipeObject = SWIPE_OBJECT_DEFAULT;
            this.dragging = false;
        },
        getLeft: function getLeft(slideIndex) {
            var leftOfSlide = -this.slideWidth * slideIndex;
            return leftOfSlide;
        },
        moveCarousel: function moveCarousel(moveTo, pointerPosition) {
            var translateX = void 0;
            var transitionAnimation = 'none';
            switch (moveTo) {
            case 'active slide':
                translateX = 'translateX(' + -(this.activeSlideIndex * 100) + '%)';
                transitionAnimation = '500ms ease';
                break;
            case 'pointer position':
                translateX = 'translateX(' + pointerPosition + 'px)';
                break;
            }
            var classSelector = void 0;
            if (this.carouselOptions.extraClass) {
                classSelector = '.' + this.carouselOptions.extraClass + ' .slideTrack';
            } else {
                classSelector = '.slideTrack';
            }
            (0, _jquery2.default)(classSelector).css({
                'transform': translateX,
                'transition': transitionAnimation
            });
        },
        preventDefault: function preventDefault(event) {
            event.preventDefault();
        },
        handleBreakOnDesktop: function handleBreakOnDesktop() {
            this.moveCarousel('pointer position', 0);
            this.clearAutoPlay();
        },
        clearAutoPlay: function clearAutoPlay() {
            if (this.autoPlayInterval) {
                clearInterval(this.autoPlayInterval);
            }
        }
    });
    exports.default = _canComponent2.default.extend({
        tag: 'tucows-donejs-carousel',
        ViewModel: ViewModel,
        view: _donejsCarouselPlugin2.default,
        events: {
            '{window} resize': function windowResize() {
                if (this.viewModel.carouselOptions.breakOnDesktop && this.viewModel.isDesktop) {
                    this.viewModel.handleBreakOnDesktop();
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