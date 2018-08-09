import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './donejs-carousel-plugin.less';
import view from './donejs-carousel-plugin.stache';

import platform from 'steal-platform';
import $ from 'jquery';

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
	* @property {array} slides populates slides with the appropriate data. This will likely change.
	*/
	// slides: 'any',
	slides: 'any',
	/**
	* @property {number} activeSlideIndex slide that the user wants to see
	*/
	activeSlideIndex: {
		type: 'number',
		value: 0
	},
	lastSlideIndex: {
		type: 'number',
		/**
    * @property {number} lastSlideIndex index of last slide in the array
    */
		get() {
			if (this.slides) {
				return this.slides.length - 1;
			}
		}
	},
	/**
	* @property {object} swipeObject properties used to complete the swipe(drag but not drop) functionality (via touch and mouse)
	*/
	swipeObject: {
		type: 'observable',
		value: SWIPE_OBJECT_DEFAULT
	},
	/**
	* @property {boolean} dragging flag to indicate that the user is dragging (mousedown event fired but mouseup event not fired)
	*/
	dragging: {
		type: 'boolean',
		value: false
	},
	slideWidth: {
		type: 'number',
		/**
		* @property {number} slideWidth returns the width of the slide (assumes all slides are equal width)
		*/
		get() {

			let extraClass = this.carouselOptions.extraClass;

			let slide = extraClass ? $(`.${extraClass} .slide`) : $('.slide');

			return slide.outerWidth(true);
		}
	},
	isDesktop: {
		type: 'boolean',
		/**
		 * @property {boolean} isDesktop returns true if screen is desktop size (> 1024px)
		 */
		get() {
			return !isMobile('isTablet');
		}
	},
	/**
	* @property {object} carouselOptions passed in from the parent component 
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
	* @property {number} autoPlayInterval current interval of setInterval function that handles the auto play of the carousel
	*/
	autoPlayInterval: {type: 'any'},

	autoPlay: {
		type: 'number',
		/**
    * @property {number} autoPlay determines the setInterval duration for the auto sliding of the carousel
    */
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
	* @property {string} autoPlayDirection changes based on active slide index
	*/
	autoPlayDirection: {
		type: 'string',
		value: 'right'
	},
	/**
	* @property {boolean} isDesktopBrowser whether or not the current environment is browser
	*/
	isDesktopBrowser: {
		type: 'boolean',
		value: platform.isDesktopBrowser
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
		// move carousel to the new active slide
		this.moveCarousel('active slide');
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
		// move carousel so the newly activated slide is shown
		this.moveCarousel('active slide');
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
				this.swipeEnd();
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
		if (touchEvent.fingerCount > 1) {
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
		if (touchEvent.fingerCount > 1 || !this.dragging) {
			// break out of this function
			return false;
		}
		// get the x position of the left of the active slide (i.e. first slide is 0, second slide is width of slide 1, etc.)
		let currentLeft = this.getLeft(this.activeSlideIndex);
		// reassign the current x coordinate based on the event data
		this.swipeObject.currentX = touchEvent.touches ? touchEvent.touches.pageX : event.clientX;
		// figure out and assign the swipe length (positive is swipe right, negative is swipe left)
		let swipeLength;
		this.swipeObject.swipeLength = swipeLength = this.swipeObject.currentX - this.swipeObject.startX;
		// prevent horizontal scrolling when swiping the carousel
		if (this.swipeObject.swipeLength < -4 || this.swipeObject.swipeLength > 4) {
			this.preventDefault(event);
		}
		// based on swipe length and the inital position, figure out how much the slide should move horizontally
		let moveAmount = currentLeft + swipeLength;
		// move carousel to where the mouse or finger has traveled
		this.moveCarousel('pointer position', moveAmount);
	},
	/**
	* @function swipeEnd
	*
	* @description
	* handles the mouseend, mouseleave, touchend and touchcancel events
	*
	*/
	swipeEnd() {
		// calculate swipe length percentage based on slide width
		let swipePercentage = (this.swipeObject.swipeLength / this.slideWidth) * 100;
		// if you swipe left enough and it's not the last slide 
		if (swipePercentage < -10 && this.activeSlideIndex != this.lastSlideIndex) {
			// set the next slide to active
			this.activeSlideIndex++;
			// move carousel to the next slide
			this.moveCarousel('active slide');
			// if you swipe right enough and it's not the first slides
		} else if (swipePercentage > 10 && this.activeSlideIndex != 0) {
			// set the previous slide to active
			this.activeSlideIndex--;
			// move carousel to the next slide
			this.moveCarousel('active slide');
			// if you don't swipe right or left enough, stay on the current slide
		} else {
			// move carousel back to the center of the current slide
			this.moveCarousel('active slide');
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
	* @function moveCarousel
	*
	* @description
	* set css transform and transition properties to move the slide 
	*
	* @param {object} eventType cli  
	*/
	moveCarousel(moveTo, pointerPosition) {
		let translateX;
		// default is none
		let transitionAnimation = 'none';
		// set css properties according to where we are trying to move to
		switch (moveTo) {
			case 'active slide':
				// first slide is 0, second slide is -100%, etc.
				translateX = `translateX(${-(this.activeSlideIndex * 100)}%)`;
				transitionAnimation = '500ms ease';
				break;
			case 'pointer position':
				translateX = `translateX(${pointerPosition}px)`;
				break;
		}

		let classSelector;
		// if there is more than one carousel on the page, will need to define extraClass so it knows which track to translate
		if (this.carouselOptions.extraClass) {
			classSelector = `.${this.carouselOptions.extraClass} .slideTrack`;
		} else {
			classSelector = '.slideTrack';
		}

		$(classSelector).css(
			{
				'transform': translateX,
				'transition': transitionAnimation
			}
		);
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
	* When the carousel breaks on desktop, make sure the slide track is translated back to 0 and auto play is turned off
	*
	*/
	handleBreakOnDesktop() {
		// slide track back to square one
		this.moveCarousel('pointer position', 0);
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
	}
});

export default Component.extend({
	tag: 'tucows-donejs-carousel',
	ViewModel,
	view,
	events: {
		/**
		* @function window resize event handler
		*
		* @description
		* on window resize sees if it's desktop size and if it's supposed to break on desktop. fires a vm function if so.
		*
		*/
		'{window} resize'() {
			if (this.viewModel.carouselOptions.breakOnDesktop && this.viewModel.isDesktop) {
				this.viewModel.handleBreakOnDesktop();
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
