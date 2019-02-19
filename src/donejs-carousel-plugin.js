/* eslint-disable require-jsdoc */
import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './donejs-carousel-plugin.less';
import view from './donejs-carousel-plugin.stache';

import platform from 'steal-platform';
// import $ from 'jquery';

export const SWIPE_OBJECT_DEFAULT = {
	startX: null,
	currentX: null,
	swipeLength: null,
};

/**
 * Determines if view is mobile
 *
 * @function
 * @name isMobile
 * @param {boolean} isTablet - if we're checking for the tablet
 * @returns {boolean}
 */
export const isMobile = function(isTablet) {
	if (isTablet) {
		return window.innerWidth < 1024;
	}
	return window.innerWidth < 600;
};

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
		value: 0
	},
	/**
	* @property {number} activeSlide 
	* @description active slide dom element
	*/
	activeSlide: {
		get() {
			if (this.activeSlideIndex !== undefined && this.classSelector) {
				const activeSlideSelector = `${this.classSelector} .slide${this.activeSlideIndex}`;
				const activeSlideElement = document.querySelector(activeSlideSelector);

				return activeSlideElement;
			}
		}
	},
	/**
	* @property {number} lastSlideIndex 
	* @description index of last slide in the array
	*/
	lastSlideIndex: {
		type: 'number',
		/**
	 	 * @function return last slide index
	 	 * */
		get() {
			if (this.slides) {
				return this.slides.length - 1;
			}
		}
	},
	/**
	* @property {object} swipeObject 
	* @description properties used to complete the swipe(drag but not drop) functionality (via touch and mouse)
	*/
	swipeObject: {
		type: 'observable',
		value: SWIPE_OBJECT_DEFAULT
	},
	/**
	* @property {boolean} dragging 
	* @description flag to indicate that the user is dragging (mousedown event fired but mouseup event not fired)
	*/
	dragging: {
		type: 'boolean',
		value: false
	},
	/**
	* @property {number} slideWidth 
	* @description returns the width of the slide (assumes all slides are equal width)
	* */
	slideWidth: {
		type: 'number',
		/**
		 * @function get gets the extra class information if available
		 * */
		get() {
			const extraClass = this.carouselOptions.extraClass;

			let slide;

			if (extraClass) {
				slide = document.querySelector(`.${extraClass} .slide`);
			} else {
				slide = document.querySelector('.slide');
			}

			// TODO: add margin width
			return slide.offsetWidth;
		}
	},
	/**
	 * @property {boolean} isDesktop 
	 * @description returns true if screen is desktop size (> 1024px)
	 */
	isDesktop: {
		type: 'boolean',
		/**
		 * @function get returns the reverse of isMobile
		 * */
		get() {
			return !isMobile('isTablet');
		}
	},
	/**
	* @property {object} carouselOptions 
	* @description passed in from the parent component 
	*/
	carouselOptions: {
		type: 'any',
		value: {},
		/**
		* @function set called when new carouselOptions is set
		* */
		set(newVal) {
			// if it's defined
			if (newVal) {
				// if autoPlay is defined AND if carousel is supposed to break on desktop and is desktop AND slides is greater than 1
				if (newVal.autoPlay && (newVal.breakOnDesktop ? !this.isDesktop : true) && (this.slides.length > 1)) {
					// set autoPlay
					this.autoPlay = newVal.autoPlay;
				}
				// return so it's accessible in the VM
				return newVal;
			}
		}
	},
	/**
	* @property {number} autoPlayInterval 
	* @description current interval of setInterval function that handles the auto play of the carousel
	*/
	autoPlayInterval: {type: 'any'},
	/**
	* @property {number} autoPlay 
	* @description determines the setInterval duration for the auto sliding of the carousel
	* */
	autoPlay: {
		type: 'number',
		/**
		 * @function set 
		 * @description sets the autoplay number and figures out the interval
		 * */
		set(duration) {
			// make sure duration is a number
			if (!isNaN(duration)) {
				// call a set interval that moves the slides per the defined duration
				this.autoPlayInterval = setInterval(() => {
					this.arrowClickHandler(this.autoPlayDirection);
				}, duration);
				// return so autoPlay can be used in the VM properly
				return duration;
			}
		}
	},
	/**
	* @property {string} autoPlayDirection 
	* @description changes based on active slide index
	*/
	autoPlayDirection: {
		type: 'string',
		value: 'right'
	},
	/**
	* @property {boolean} isDesktopBrowser 
	* @description whether or not the current environment is browser
	*/
	isDesktopBrowser: {
		type: 'boolean',
		value: platform.isDesktopBrowser
	},
	/**
	* @property {boolean} classSelector 
	* @description specifies the appropriate carousel class especially if there are multiple carousels on page
	*/
	classSelector: {
		type: 'string',
		/**
		 * @function concatenate 
		 * @description extraclass to .slideTrack, if available, otherwise output just .slideTrack
		 * */
		get() {
			// if there is more than one carousel on the page, will need to define extraClass so it knows which track to translate
			if (this.carouselOptions.extraClass) {
				return `.${this.carouselOptions.extraClass} .slideTrack`;
			}
			return '.slideTrack';
		}
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
		} else if (this.autoPlay) {
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
		if (this.carouselOptions.breakOnDesktop && this.isDesktop) {
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
		this.dragging = true;
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
		if ((touchEvent && touchEvent.fingerCount > 1) || !this.dragging) {
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
			console.log(swipeAmount);
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
		if ((touchEvent && touchEvent.fingerCount > 1) || !this.dragging) {
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
		this.dragging = false;
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
		const element = document.querySelector(this.classSelector);

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
		const element = document.querySelector(this.classSelector);

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

		// only fade the active slide if it's fading out into another slide, not on it's own
		if (
			(swipeAmount > 0 && !isFirstSlide) ||
			(swipeAmount < 0 && !isLastSlide)
		){
			this.activeSlide.style.opacity = opacity;
			this.activeSlide.style.transition = 'none';
		}

		// fade adjacent sibling slide, depending on the direction of swipe, sign of swipeAmount
		if (swipeAmount > 0) {
			let prevSlide = this.activeSlide.previousElementSibling;
			prevSlide.style.opacity = 1 - opacity;
			prevSlide.style.transition = 'none';
		} else {
			let nextSlide = this.activeSlide.nextElementSibling;
			nextSlide.style.opacity = 1 - opacity;
			nextSlide.style.transition = 'none';
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
		if (!(this.isDesktop && this.carouselOptions.breakOnDesktop)) {
			// transition length in ms
			const transitionLength = 1000;

			// make 1s ease transition for all slides
			const slides = document.querySelectorAll(`${this.classSelector} .slide`);
			slides.forEach((slide) => {
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
		const slides = document.querySelectorAll(`${this.classSelector} .slide`);
		slides.forEach((slide) => {
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
		const slides = document.querySelectorAll(`${this.classSelector} .slide`);
		slides.forEach((slide) => {
			slide.style.opacity = 0;
		});

		this.activeSlide.style.opacity = 1;
	},
	/**
	* @function resetZIndexAllSlides
	*
	* @description
	* Reset the z-index of slides when resizing the window and going from
	* broken on desktop to mobile view
	*
	*/
	resetZIndexAllSlides() {
		const slides = document.querySelectorAll(`${this.classSelector} .slide`);
		slides.forEach((slide) => {
			slide.style.zIndex = 0;
		});
	},

	/**
	* @function setActiveSlideZIndex
	*
	* @description
	* Setting a larger z-index for the active slide allows the links to function properly
	* Set z-index to 100 for active slide, 0 for all other slides
	*
	*/
	setActiveSlideZIndex() {
		const slides = document.querySelectorAll(`${this.classSelector} .slide`);
		slides.forEach((slide) => {
			slide.style.zIndex = 0;
		});

		this.activeSlide.style.zIndex = 100;
	}
});

export default Component.extend({
	tag: 'tucows-donejs-carousel',
	ViewModel,
	view,
	events: {
		/**
		* @function activeSlideIndex change event handler
		*
		* @description
		* on change of this viewmodel property, fire function to change slidetrack location
		*
		*/
		'{viewModel} activeSlideIndex'() {
			this.viewModel.changeToActiveSlide();
		},
		/**
		* @function window resize event handler
		*
		* @description
		* on window resize sees if it's desktop size and if it's supposed to break on desktop. fires a vm function if so.
		*
		*/
		'{window} resize'() {
			let breakOnDesktop = this.viewModel.carouselOptions.breakOnDesktop;
			let isDesktop = this.viewModel.isDesktop;
			let dissolveTransition = this.viewModel.carouselOptions.transition == 'dissolve';

			if (breakOnDesktop) {
				if (isDesktop) {
					// pause autoplay and set slide to 0
					this.viewModel.handleBreakOnDesktop();
					// if dissolve transition, set opacity of all slides to 1
					if (dissolveTransition) {
						this.viewModel.makeAllSlidesOpaque();
						this.viewModel.resetZIndexAllSlides();
					}
				} else if (dissolveTransition) {
					// if set to break on desktop, but not in desktop, this could mean
					// that the browser was resized to mobile, so we need to make only
					// the active slide opaque and all the others transparent in order
					// for dissolve transition to work properly. also set z-index for
					// active slide to be larger than all the others
					this.viewModel.makeOnlyActiveSlideOpaque();
					this.viewModel.setActiveSlideZIndex();
				}
			}
		},
		/**
		* @function element before-remove event handler
		*
		* @description
		* fires when the ting-carousel component is about to be removed. in this case, cleans up the setTimeout
		*
		*/
		'{element} beforeremove'() {
			this.viewModel.clearAutoPlay();
		},
	}
});
