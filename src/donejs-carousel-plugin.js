/* eslint-disable require-jsdoc */
import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './donejs-carousel-plugin.less';
import view from './donejs-carousel-plugin.stache';

import platform from 'steal-platform';

export const SWIPE_OBJECT_DEFAULT = {
	startX: null,
	currentX: null,
	swipeLength: null,
};

/**
 * @function isDesktop
 * Determines if view is desktop
 *
 * @returns {boolean} if desktop or not
 */
export const isDesktop = () => Boolean(window.innerWidth >= 1024)

export const ViewModel = DefineMap.extend({
	/**
	 * @property {array} slides
	 * @description populates slides with the appropriate data. This will likely change.
	 */
	slides: 'any',
	/**
	 * @property {number} activeSlideIndex
	 * @description slide that the user wants to see
	 */
	activeSlideIndex: {
		type: 'number',
		default: 0
	},

	/**
	 * @property {object} swipeObject
	 * @description properties used to complete the swipe(drag but not drop) functionality (via touch and mouse)
	 */
	swipeObject: {
		type: 'observable',
		default: SWIPE_OBJECT_DEFAULT
	},
	/**
	 * @property {boolean} isDragging
	 * @description flag to indicate that the user is dragging (mousedown event fired but mouseup event not fired)
	 */
	isDragging: {
		type: 'boolean',
		default: false
	},

	/**
	 * @property {object} carouselOptions
	 * @description passed in from the parent component
	 */
	carouselOptions: 'any',

	/**
	 * @property {number} autoPlayInterval
	 * @description current interval of setInterval function that handles the auto play of the carousel
	 */
	autoPlayInterval: 'any',

	/**
	 * @property {string} autoPlayDirection
	 * @description changes based on active slide index
	 */
	autoPlayDirection: {
		type: 'string',
		default: 'right'
	},

	/**
	 * @property {Node} element
	 * @description carousel element
	 */
	element: 'any',

	/**
	 * @property {number} autoPlayDuration
	 * @description determines the setInterval duration for the auto sliding of the carousel
	 * */
	get autoPlayDuration(){
		if (this.carouselOptions) {
			const {autoPlay, breakOnDesktop} = {...this.carouselOptions};
			// if its anything but a number return 0 so it becomes falsy
			if (isNaN(autoPlay)) {
				return 0;
			}
			// if breakOnDesktop is true then make sure the slides wont autoplay on desktop view
			const isPlayableOnDesktop = breakOnDesktop ? !isDesktop() : true;
			const isMultiSlide = this.slides && this.slides.length > 1;
			if (
				autoPlay &&
				isMultiSlide &&
				isPlayableOnDesktop
			) {
				return autoPlay;
			}
		}
		return 0;
	},

	/**
	 * @property {number} slideWidth
	 * @description returns the width of the slide (assumes all slides are equal width)
	 * */
	get slideWidth() {
		// grab the first slide; assumption - all slides are same width
		const slide = this.element.querySelector('.slide');
		return slide.offsetWidth;
	},

	/**
	 * @property {number} activeSlide
	 * @description active slide dom element
	 */
	get activeSlide() {
		if (this.activeSlideIndex) {
			const activeSlideElement = this.element.querySelector(`.slide${this.activeSlideIndex}`);
			return activeSlideElement;
		}
		return this.element;
	},
	/**
	 * @property {number} lastSlideIndex
	 * @description index of last slide in the array
	 */
	get lastSlideIndex() {
		if (this.slides) {
			return this.slides.length - 1;
		}
		return 0;
	},

	/**
	 * @property {boolean} isDesktopBrowser
	 * @description whether or not the current environment is browser
	 */
	get isDesktopBrowser() {
		return platform.isDesktopBrowser;
	},

	/**
	 * @function oneSlideOver
	 *
	 * @description
	 * determines the next active slide and calls a function to move carousel to that slide
	 *
	 * @param {string} direction right/left
	 */
	oneSlideOver(direction) {
		if (direction == 'right') {
			// increment the active slide index flag
			this.activeSlideIndex++;
		} else {
			// reduce the active slide index flag
			this.activeSlideIndex--;
		}
	},
	/**
	 * @function directionHandler
	 *
	 * @description
	 * handles the direction of the slide movement
	 *
	 * @param {string} direction right/left
	 * @param {number} maxSlide index of last/first slide depending on direction
	 */
	directionHandler(direction, maxSlide) {
		// if this isn't the last slide
		if (this.activeSlideIndex !== maxSlide) {
			// move one slide to the right
			this.oneSlideOver(direction);
			// if it's the last slide and autoplay is enabled
		} else if (this.autoPlayDuration) {
			let oppositeDirection = direction == 'right' ? 'left' : 'right';
			// reverse the autoplay direction
			this.autoPlayDirection = oppositeDirection;
			// move one slide in the opposite direction
			this.oneSlideOver(oppositeDirection);
		}
	},
	/**
	 * @function arrowClickHandler
	 *
	 * @description
	 * handles click events on the right and left slide navigation arrows
	 *
	 * @param {string} direction right/left
	 * @param {hash} event click event details
	 */
	arrowClickHandler(direction, event) {
		// there is no event if it's being fired by autoPlay's set interval
		if (event) {
			event.preventDefault();
		}
		// will be the case with keydown event handling
		if (direction == 'keyboard') {
			direction = this.determineKeyDirection(event);
		}

		// if right arrow clicked
		if (direction == 'right') {
			// call direction handler to move slide
			this.directionHandler('right', this.lastSlideIndex);

			// else left arrow is clicked
		} else if (direction == 'left') {
			// call direction handler to move slide
			this.directionHandler('left', 0);
		}
	},
	/**
	 * @function determineKeyDirection
	 *
	 * @description
	 * used to handle the keydown event
	 *
	 * @param {object} event keydown event details
	 *
	 * @return {string} direction right or left depending on which key was pressed
	 */
	determineKeyDirection(event) {
		// make sure it's not a text, input or select area
		if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
			// if 37, direction is left
			if (event.keyCode === 37) {
				return 'left';
				// if 39, direction is right
			} else if (event.keyCode === 39) {
				return 'right';
			}
		}
	},
	/**
	 * @function dotClickHandler
	 *
	 * @description
	 * handles click events on the navigation dots
	 *
	 * @param {number} index index of the slide to be displayed
	 */
	dotClickHandler(index) {
		// set active slide to the selected index
		this.activeSlideIndex = index;
	},
	/**
	 * @function swipeHandler
	 *
	 * @description
	 * handles mouse and touch events, required to simulate the mouse and finger drag-slide functionality
	 *
	 * @param {object} event mouse/touch event properties
	 * @param {string} action category that the event falls under
	 */
	swipeHandler(event, action) {
		// if it's supposed to break on desktop and it's desktop size
		if (this.carouselOptions.breakOnDesktop && isDesktop()) {
			// break out of this function
			return false;
		}
		// based on the swipe action defined in the event handler
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
	/**
	 * @function defineTouchEvent
	 *
	 * @description
	 * defines finger count and touches object in the case of a touch event
	 *
	 * @param {object} event mouse/touch event properties
	 */
	defineTouchEvent(event) {
		// if it's a touch event, make sure there is only one finger during swiping
		let fingerCount = event.touches ? event.touches.length : 1;
		// get the first touch object
		let touches = event.touches ? event.touches[0] : null;

		return {
			fingerCount,
			touches
		};
	},
	/**
	 * @function swipeStart
	 *
	 * @description
	 * handles the mousedown and touchstart events
	 *
	 * @param {object} event mouse/touch event properties
	 */
	swipeStart(event) {
		let touchEvent = this.defineTouchEvent(event);
		// if finger count is greater than 1
		if (touchEvent && touchEvent.fingerCount > 1) {
			// break out of this function
			return false;
		}
		// current and start x coordinates defined based on start event
		this.swipeObject.startX = this.swipeObject.currentX = touchEvent.touches ? touchEvent.touches.pageX : event.clientX;
		// dragging has started
		this.isDragging = true;
	},
	/**
	 * @function swipeMove
	 *
	 * @description
	 * handles the mousemove and touchmove events
	 *
	 * @param {object} event mouse/touch event properties
	 */
	swipeMove(event) {
		let touchEvent = this.defineTouchEvent(event);
		// if finger count is greater than 1 or dragging is false
		if ((touchEvent && touchEvent.fingerCount > 1) || !this.isDragging) {
			// break out of this function
			return false;
		}
		// reassign the current x coordinate based on the event data
		this.swipeObject.currentX = touchEvent.touches ? touchEvent.touches.pageX : event.clientX;
		// figure out and assign the swipe length (positive is swipe right, negative is swipe left)
		let swipeLength;
		this.swipeObject.swipeLength = swipeLength = this.swipeObject.currentX - this.swipeObject.startX;
		// prevent horizontal scrolling when swiping the carousel
		if (this.swipeObject.swipeLength < -4 || this.swipeObject.swipeLength > 4) {
			this.preventDefault(event);
		}
		// determine type of slide transition (dissolve vs slide)
		if (this.carouselOptions.transition == 'dissolve') {
			// calculate swipeAmount as a number between 0 and 1
			let swipeAmount = swipeLength / this.slideWidth;
			// fade slide and its sibling by swipeAmount
			this.fadeSlideByAmount(swipeAmount);
		} else {
			// get the x position of the left of the active slide (i.e. first slide is 0, second slide is width of slide 1, etc.)
			let currentLeft = this.getLeft(this.activeSlideIndex);
			// based on swipe length and the initial position, figure out how much the slide should move horizontally
			let pointerPosition = currentLeft + swipeLength;
			// move carousel to where the mouse or finger has traveled
			this.moveCarouselToPosition(pointerPosition);
		}
	},
	/**
	 * @function swipeEnd
	 *
	 * @description
	 * handles the mouseend, mouseleave, touchend and touchcancel events
	 *
	 */
	swipeEnd(event) {
		let touchEvent = this.defineTouchEvent(event);
		// if finger count is greater than 1 or dragging is false
		if ((touchEvent && touchEvent.fingerCount > 1) || !this.isDragging) {
			// break out of this function
			return false;
		}
		// calculate swipe length percentage based on slide width
		let swipePercentage = (this.swipeObject.swipeLength / this.slideWidth) * 100;
		// if you swipe left enough and it's not the last slide 
		if (swipePercentage < -10 && this.activeSlideIndex != this.lastSlideIndex) {
			// set the next slide to active
			this.activeSlideIndex++;
			// if you swipe right enough and it's not the first slides
		} else if (swipePercentage > 10 && this.activeSlideIndex != 0) {
			// set the previous slide to active
			this.activeSlideIndex--;
			// if you don't swipe right or left enough, stay on the current slide
		} else {
			// move carousel back to the center of the current slide
			this.changeToActiveSlide();
		}
		// reset the swipe object
		this.swipeObject = SWIPE_OBJECT_DEFAULT;
		// flag dragging as over
		this.isDragging = false;
	},
	/**
	 * @function getLeft
	 *
	 * @description
	 * finds the left-most x coordinate of this slide
	 *
	 * @param {number} slideIndex index of the slide
	 */
	getLeft(slideIndex) {
		let leftOfSlide = -this.slideWidth * slideIndex;

		return leftOfSlide;
	},
	/**
	 * @function changeToActiveSlide
	 *
	 * @description
	 * based on carousel options, either fade slide or translate carousel
	 */
	changeToActiveSlide() {
		if (this.carouselOptions.transition == 'dissolve') {
			this.fadeToActiveSlide();
		} else {
			this.moveCarouselToActiveSlide();
		}
	},
	/**
	 * @function moveCarouselToPosition
	 *
	 * @description
	 * set css transform and transition properties to move the slide
	 *
	 * @param {number} pointerPosition (in pixels)
	 */
	moveCarouselToPosition(pointerPosition) {
		const element = this.element.querySelector('.slideTrack');
		// set css properties according to where we are trying to move to
		element.style.transform = `translateX(${pointerPosition}px)`;
		// no transition necessary when we are moving slide manually
		element.style.transition = 'none';
	},
	/**
	 * @function moveCarouselToActiveSlide
	 *
	 * @description
	 * translate the carousel .slideTrack by moving it to the active slide
	 */
	moveCarouselToActiveSlide() {
		const element = this.element.querySelector('.slideTrack');
		// set css properties according to where we are trying to move to
		// first slide is 0, second slide is -100%, etc.
		element.style.transform = `translateX(${-(this.activeSlideIndex * 100)}%)`;
		// 500ms transition when moving between slides
		element.style.transition = '500ms ease';
	},
	/**
	 * @function fadeSlideByAmount
	 *
	 * @description
	 * set css transform and transition properties to move the slide
	 *
	 * @param {number} swipeAmount (number between 0 and 1)
	 */
	fadeSlideByAmount(swipeAmount) {
		// controls how much one should have to swipe/drag in order for slide to fade in or out
		const OPACITY_FADE_MULTIPLIER = 2;

		// value of 1 means opaque, anything 0 or less is transparent
		let opacity = 1 - Math.abs(swipeAmount * OPACITY_FADE_MULTIPLIER);

		let isFirstSlide = this.activeSlideIndex == 0;
		let isLastSlide = this.activeSlideIndex == this.lastSlideIndex;

		if (this.activeSlide) {
			// only fade the active slide if it's fading out into another slide, not on it's own
			if (
				(swipeAmount > 0 && !isFirstSlide) ||
				(swipeAmount < 0 && !isLastSlide)
			) {
				this.activeSlide.style.opacity = opacity;
				this.activeSlide.style.transition = 'none';
			}

			let adjacentSlide;

			// fade adjacent sibling slide, depending on the direction of swipe, sign of swipeAmount
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
	/**
	 * @function fadeToActiveSlide
	 *
	 * @description
	 * make all slides but the active one transparent
	 * active slide should have higher z-index value
	 */
	fadeToActiveSlide() {
		// only fade if slides are in carousel, not broken on desktop
		if (!(isDesktop() && this.carouselOptions.breakOnDesktop)) {
			// transition length in ms
			const transitionLength = 1000;

			// make 1s ease transition for all slides
			const allSlides = this.element.querySelectorAll('.slide');
			allSlides.forEach((slide) => {
				slide.style.transition = `${transitionLength}ms ease`;
			});

			// make only active slide opaque, everything else
			// should be transparent
			this.makeOnlyActiveSlideOpaque();

			// set the z-index on the active slide to be higher than all 
			// the other slides so that links (anchor tags) are properly clickable
			this.setActiveSlideZIndex();
		}
	},
	/**
	 * @function preventDefault
	 *
	 * @description
	 * handles simple prevent default functionality
	 *
	 * @param {object} event event to prevent default on
	 */
	preventDefault(event) {
		event.preventDefault();
	},
	/**
	 * @function handleBreakOnDesktop
	 *
	 * @description
	 * When the carousel breaks on desktop, handle behaviour of how slides should
	 * be displayed without carousel b
	 *
	 */
	handleBreakOnDesktop() {
		// set activeSlideIndex to 0
		this.activeSlideIndex = 0;
		// stop auto play
		this.clearAutoPlay();
	},
	/**
	 * @function clearAutoPlay
	 *
	 * @description
	 * Clear the setInterval if there was one defined as per the autoPlay property
	 *
	 */
	clearAutoPlay() {
		if (this.autoPlayInterval) {
			// set time interval is cleared
			clearInterval(this.autoPlayInterval);
		}
	},
	/**
	 * @function makeAllSlidesOpaque
	 *
	 * @description
	 * Reset the opacity of all the slides when breaking on desktop
	 *
	 */
	makeAllSlidesOpaque() {
		const allSlides = this.element.querySelectorAll('.slide');
		allSlides.forEach((slide) => {
			slide.style.opacity = 1;
		});
	},
	/**
	 * @function makeOnlyActiveSlideOpaque
	 *
	 * @description
	 * Make only the active slide opaque and all other slides should be transparent
	 *
	 */
	makeOnlyActiveSlideOpaque() {
		const allSlides = this.element.querySelectorAll('.slide');
		allSlides.forEach((slide) => {
			slide.style.opacity = 0;
		});

		if (this.activeSlide) {
			this.activeSlide.style.opacity = 1;
		}
	},
	/**
	 * @function resetZIndexAllSlides
	 *
	 * @description
	 * Reset the z-index of slides when resizing the window and going from
	 * broken on desktop to mobile view
	 */
	resetZIndexAllSlides() {
		const allSlides = this.element.querySelectorAll('.slide');
		allSlides.forEach((slide) => {
			slide.style.zIndex = 0;
		});
	},

	/**
	 * @function setActiveSlideZIndex
	 *
	 * @description
	 * Setting a larger z-index for the active slide allows the links to function properly
	 * Set z-index to 100 for active slide, 0 for all other slides
	 */
	setActiveSlideZIndex() {
		const allSlides = this.element.querySelectorAll('.slide');
		allSlides.forEach((slide) => {
			slide.style.zIndex = 0;
		});

		if (this.activeSlide) {
			this.activeSlide.style.zIndex = 100;
		}
	},

	connectedCallback(element) {
		this.element = element;
		const duration = this.autoPlayDuration;
		if (duration){
			this.autoPlayInterval = setInterval(() => {
				this.arrowClickHandler(this.autoPlayDirection);
			}, duration);
		}
		this.listenTo(window, 'resize', () => {
			const breakOnDesktop = this.carouselOptions.breakOnDesktop;
			const dissolveTransition = this.carouselOptions.transition == 'dissolve';

			if (breakOnDesktop) {
				if (isDesktop()) {
					// pause autoplay and set slide to 0
					this.handleBreakOnDesktop();
					// if dissolve transition, set opacity of all slides to 1
					if (dissolveTransition) {
						this.makeAllSlidesOpaque();
						this.resetZIndexAllSlides();
					}
				} else if (dissolveTransition) {
					// if set to break on desktop, but not in desktop, this could mean
					// that the browser was resized to mobile, so we need to make only
					// the active slide opaque and all the others transparent in order
					// for dissolve transition to work properly. also set z-index for
					// active slide to be larger than all the others
					this.makeOnlyActiveSlideOpaque();
					this.setActiveSlideZIndex();
				}
			}
		});

		this.listenTo('activeSlideIndex', () => {
			this.changeToActiveSlide();
		});

		return () => {
			this.clearAutoPlay();
			this.stopListening();
		};
	}
});

export default Component.extend({
	tag: 'tucows-donejs-carousel',
	ViewModel,
	view
});
