/*@tucows/donejs-carousel-plugin@1.0.1#donejs-carousel-plugin*/
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