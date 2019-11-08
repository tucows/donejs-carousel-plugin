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

/*@tucows/donejs-carousel-plugin@3.0.3-can4#donejs-carousel-plugin.stache!steal-stache@4.1.2#steal-stache*/
define('@tucows/donejs-carousel-plugin/donejs-carousel-plugin.stache', [
    'module',
    'can-stache',
    'can-stache/src/mustache_core',
    'can-view-import@4.2.1#can-view-import',
    'can-stache-bindings@4.9.0#can-stache-bindings'
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
                '#if ./slides.length',
                31
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n\t',
                31
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./isDesktopBrowser',
                33
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\n\t\t',
                33
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#is ./slides.length 1',
                35
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n\t\t\t',
                35
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '>simpleCarousel',
                37
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\n\t\t',
                37
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'else',
                39
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n\t\t\t',
                39
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '! Note: We prevent default on the dragstart event (and use mouse events instead) to prevent the creation of the \'ghost image\' on drag',
                41
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t',
                41
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '! Note: The event handlers are on div.carousel because attaching them to div.slideTrack is unreliable (result of .slideTrack being translated)',
                42
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t',
                42
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                43
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                43
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'carousel \n\t\t\t\t',
                43
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./carouselOptions.extraClass',
                43
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' \n\t\t\t\t\t',
                43
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                './carouselOptions.extraClass',
                43
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' \n\t\t\t\t',
                43
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                43
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n\t\t\t\t',
                43
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#is ./carouselOptions.transition \'dissolve\'',
                43
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                ' \n\t\t\t\t\tdissolve-transition\n\t\t\t\t',
                43
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/is',
                43
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n\t\t\t\t',
                43
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./carouselOptions.breakOnDesktop',
                43
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n\t\t\t\t\tbreakOnDesktop\n\t\t\t\t',
                43
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                43
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                43
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:dragstart',
                43
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './preventDefault(scope.event)',
                43
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:dragstart',
                43
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:mousedown',
                43
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(scope.event, \'start\')',
                43
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:mousedown',
                43
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:mouseup',
                43
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(scope.event, \'end\')',
                43
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:mouseup',
                43
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:mouseleave',
                43
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(scope.event, \'end\')',
                43
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:mouseleave',
                43
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:mousemove',
                43
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(scope.event, \'move\')',
                43
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:mousemove',
                43
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:touchstart',
                43
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(scope.event, \'start\')',
                43
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:touchstart',
                43
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:touchend',
                43
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(scope.event, \'end\')',
                43
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:touchend',
                43
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:touchcancel',
                43
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(scope.event, \'end\')',
                43
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:touchcancel',
                43
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:touchmove',
                43
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './swipeHandler(scope.event, \'move\')',
                43
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:touchmove',
                43
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:keydown',
                43
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './arrowClickHandler(\'keyboard\', scope.event)',
                43
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:keydown',
                43
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                67
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                ' \n\t\t\t\t',
                67
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                68
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                68
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'slideTrack',
                68
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                68
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                68
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\n\t\t\t\t\t',
                68
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'content',
                true,
                70
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'content',
                true,
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
            'tokenType': 'close',
            'args': [
                'div',
                72
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n\t\t\t\t',
                72
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./carouselOptions.navArrows',
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
                'div',
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
                'navArrows',
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
            'tokenType': 'end',
            'args': [
                'div',
                false,
                75
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n\t\t\t\t\t\t',
                75
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'a',
                false,
                77
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                77
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'leftArrow arrow ',
                77
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#is ./activeSlideIndex 0',
                77
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'noMore',
                77
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/is',
                77
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                77
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:click',
                77
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './arrowClickHandler(\'left\', scope.event)',
                77
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:click',
                77
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'a',
                false,
                79
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t\t',
                79
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'svg',
                false,
                80
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'role',
                80
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'img',
                80
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'role',
                80
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                80
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'iconSvg',
                80
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                80
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'title',
                80
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'left nav arrow',
                80
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'title',
                80
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'svg',
                false,
                80
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t\t\t',
                80
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'use',
                false,
                81
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'href',
                81
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                './carouselOptions.navArrows.leftSvgUrl',
                81
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'href',
                81
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'use',
                false,
                81
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'use',
                81
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t\t',
                81
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'svg',
                82
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t',
                82
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'a',
                83
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t\n\t\t\t\t\t\t',
                83
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'a',
                false,
                85
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                85
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'rightArrow arrow ',
                85
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#is ./activeSlideIndex ./lastSlideIndex',
                85
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'noMore',
                85
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/is',
                85
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                85
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:click',
                85
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                './arrowClickHandler(\'right\', scope.event)',
                85
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:click',
                85
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'a',
                false,
                87
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t\t',
                87
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'svg',
                false,
                88
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'role',
                88
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'img',
                88
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'role',
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
                'iconSvg',
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
            'tokenType': 'attrStart',
            'args': [
                'title',
                88
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'right nav arrow',
                88
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'title',
                88
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'svg',
                false,
                88
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t\t\t',
                88
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'use',
                false,
                89
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'href',
                89
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                './carouselOptions.navArrows.rightSvgUrl',
                89
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'href',
                89
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'use',
                false,
                89
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'use',
                89
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t\t',
                89
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'svg',
                90
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t',
                90
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'a',
                91
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t',
                91
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                92
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t',
                92
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                93
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n\t\t\t',
                93
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                95
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t',
                95
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                96
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                96
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'navDots\n\t\t\t\t',
                96
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./carouselOptions.breakOnDesktop',
                96
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n\t\t\t\t\tbreakOnDesktop\n\t\t\t\t',
                96
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                96
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                96
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
                '\n\t\t\t\t',
                100
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#each(./slides)',
                101
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t',
                101
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                102
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                102
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'dot ',
                102
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#is ../activeSlideIndex scope.index',
                102
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'active',
                102
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/is',
                102
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                102
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'on:click',
                102
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '../dotClickHandler(scope.index)',
                102
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'on:click',
                102
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                102
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t',
                102
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '>navDotsSVG',
                103
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t',
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
                '\n\t\t\t\t',
                104
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/each',
                105
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t',
                105
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                106
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                106
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/is',
                107
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t',
                107
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'else',
                108
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                ' ',
                108
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '! When server side rendering',
                108
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                108
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '>simpleCarousel',
                109
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\n\t\t',
                109
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#is ./slides.length 1',
                111
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t',
                111
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '! don\'t show dots ',
                112
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                112
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'else',
                113
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\n\t\t\t',
                113
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                115
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                115
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'navDots\n\t\t\t\t',
                115
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#if ./carouselOptions.breakOnDesktop',
                115
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                '\n\t\t\t\t\tbreakOnDesktop\n\t\t\t\t',
                115
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                115
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                115
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
                '\n\t\t\t\t',
                119
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#each(./slides)',
                120
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t',
                120
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false,
                121
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': [
                'class',
                121
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'dot ',
                121
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '#is scope.index 0',
                121
            ]
        },
        {
            'tokenType': 'attrValue',
            'args': [
                'active',
                121
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/is',
                121
            ]
        },
        {
            'tokenType': 'attrEnd',
            'args': [
                'class',
                121
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false,
                121
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t\t',
                121
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '>navDotsSVG',
                122
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t\t\t',
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
                '\n\t\t\t\t',
                123
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/each',
                124
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t\t',
                124
            ]
        },
        {
            'tokenType': 'close',
            'args': [
                'div',
                125
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t\t',
                125
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/is',
                126
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t',
                126
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                127
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n',
                127
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                'else',
                128
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                ' ',
                128
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '! if there are no slides passed into the viewmodel, just show any content passed into the plugin',
                128
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n\t',
                128
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'content',
                true,
                129
            ]
        },
        {
            'tokenType': 'end',
            'args': [
                'content',
                true,
                129
            ]
        },
        {
            'tokenType': 'chars',
            'args': [
                '\n',
                129
            ]
        },
        {
            'tokenType': 'special',
            'args': [
                '/if',
                130
            ]
        },
        {
            'tokenType': 'done',
            'args': [130]
        }
    ]);
    return function (scope, options, nodeList) {
        var moduleOptions = Object.assign({}, options);
        if (moduleOptions.helpers) {
            moduleOptions.helpers = Object.assign({ module: module }, moduleOptions.helpers);
        } else {
            moduleOptions.module = module;
        }
        return renderer(scope, moduleOptions, nodeList);
    };
});
/*@tucows/donejs-carousel-plugin@3.0.3-can4#donejs-carousel-plugin*/
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
    exports.ViewModel = exports.isMobile = exports.SWIPE_OBJECT_DEFAULT = undefined;
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
            default: 0
        },
        activeSlide: {
            get: function get() {
                if (this.activeSlideIndex !== undefined && this.classSelector) {
                    var selector = this.classSelector + ' .slide' + this.activeSlideIndex;
                    var activeSlideElement = document.querySelector(selector);
                    return activeSlideElement;
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
            default: SWIPE_OBJECT_DEFAULT
        },
        dragging: {
            type: 'boolean',
            default: false
        },
        slideWidth: {
            type: 'number',
            get: function get() {
                var extraClass = this.carouselOptions.extraClass;
                var selector = extraClass ? '.' + extraClass + ' .slide' : '.slide';
                var slide = document.querySelector(selector);
                return slide.offsetWidth;
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
            default: {},
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
            default: 'right'
        },
        isDesktopBrowser: {
            type: 'boolean',
            default: _stealPlatform2.default.isDesktopBrowser
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
            var element = document.querySelector(this.classSelector);
            element.style.transform = 'translateX(' + pointerPosition + 'px)';
            element.style.transition = 'none';
        },
        moveCarouselToActiveSlide: function moveCarouselToActiveSlide() {
            var element = document.querySelector(this.classSelector);
            element.style.transform = 'translateX(' + -(this.activeSlideIndex * 100) + '%)';
            element.style.transition = '500ms ease';
        },
        fadeSlideByAmount: function fadeSlideByAmount(swipeAmount) {
            var OPACITY_FADE_MULTIPLIER = 2;
            var opacity = 1 - Math.abs(swipeAmount * OPACITY_FADE_MULTIPLIER);
            var isFirstSlide = this.activeSlideIndex == 0;
            var isLastSlide = this.activeSlideIndex == this.lastSlideIndex;
            if (this.activeSlide) {
                if (swipeAmount > 0 && !isFirstSlide || swipeAmount < 0 && !isLastSlide) {
                    this.activeSlide.style.opacity = opacity;
                    this.activeSlide.style.transition = 'none';
                }
                var adjacentSlide = void 0;
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
            if (!(this.isDesktop && this.carouselOptions.breakOnDesktop)) {
                var transitionLength = 1000;
                var allSlides = document.querySelectorAll(this.classSelector + ' .slide');
                allSlides.forEach(function (slide) {
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
            var allSlides = document.querySelectorAll(this.classSelector + ' .slide');
            allSlides.forEach(function (slide) {
                slide.style.opacity = 1;
            });
        },
        makeOnlyActiveSlideOpaque: function makeOnlyActiveSlideOpaque() {
            var allSlides = document.querySelectorAll(this.classSelector + ' .slide');
            allSlides.forEach(function (slide) {
                slide.style.opacity = 0;
            });
            if (this.activeSlide) {
                this.activeSlide.style.opacity = 1;
            }
        },
        resetZIndexAllSlides: function resetZIndexAllSlides() {
            var allSlides = document.querySelectorAll(this.classSelector + ' .slide');
            allSlides.forEach(function (slide) {
                slide.style.zIndex = 0;
            });
        },
        setActiveSlideZIndex: function setActiveSlideZIndex() {
            var allSlides = document.querySelectorAll(this.classSelector + ' .slide');
            allSlides.forEach(function (slide) {
                slide.style.zIndex = 0;
            });
            if (this.activeSlide) {
                this.activeSlide.style.zIndex = 100;
            }
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