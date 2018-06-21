/*@tucows/donejs-carousel-plugin@0.5.0#donejs-carousel-plugin*/
define([
    'exports',
    'can-component',
    'can-define/map',
    './donejs-carousel-plugin.stache',
    'steal-platform',
    'jquery',
    'css!./donejs-carousel-plugin.less.css'
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
                var slide = (0, _jquery2.default)('.' + this.carouselOptions.extraClass + ' .slide');
                if (slide) {
                    return slide.outerWidth(true);
                }
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