/*@tucows/donejs-carousel-plugin@3.2.2#donejs-carousel-plugin.stache!steal-stache@4.1.5#steal-stache*/
var assign = require('can-assign');
var stache = require('can-stache');
var mustacheCore = require('can-stache/src/mustache_core');
require('can-view-import@4.2.2#can-view-import');
require('can-stache-bindings@4.10.9#can-stache-bindings');
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
module.exports = function (scope, options, nodeList) {
    var moduleOptions = assign({}, options);
    if (moduleOptions.helpers) {
        moduleOptions.helpers = assign({ module: module }, moduleOptions.helpers);
    } else {
        moduleOptions.module = module;
    }
    return renderer(scope, moduleOptions, nodeList);
};