/*@tucows/donejs-carousel-plugin@3.1.0#donejs-carousel-plugin.stache!steal-stache@4.1.2#steal-stache*/
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