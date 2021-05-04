/*@tucows/donejs-carousel-plugin@3.2.2#donejs-carousel-plugin*/
define([
    'exports',
    'can-component',
    'can-define/map/',
    './donejs-carousel-plugin.stache',
    'steal-platform',
    './donejs-carousel-plugin.less'
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