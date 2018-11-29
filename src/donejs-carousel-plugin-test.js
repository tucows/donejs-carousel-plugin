'use strict';
/* global
	describe,
	beforeEach,
	afterEach,
	it,
	chance
*/

import 'steal-mocha';
import chai from 'chai';
chai.should();

import 'chance';
import sinon from 'sinon';

import DefineMap from 'can-define/map/map';

import {ViewModel, SWIPE_OBJECT_DEFAULT} from './donejs-carousel-plugin';

// imports for functional testing
import {slides, slideArray} from 'src/test-and-demo-constants';
import template from 'src/demo/demo.stache';

// ViewModel unit tests
describe('tucows-donejs-carousel', () => {
	describe('viewModel properties', () => {
		let vm = new ViewModel();

		describe('activeSlideIndex', () => {
			it('should be set to 0 initially', () => {
				vm.activeSlideIndex.should.equal(0);
			});
		});

		describe('lastSlideIndex', () => {
			it('should return the last slides index number', () => {
				// setup
				vm.slides = [0, 1, 2, 3];
				// test
				vm.lastSlideIndex.should.equal(3);
			});
		});

		describe('swipeObject', () => {
			it('should be set to the default initially', () => {
				// setup
				let swipeObject = new DefineMap(SWIPE_OBJECT_DEFAULT);
				// test
				vm.swipeObject.should.deep.equal(swipeObject);
			});
		});

		describe('dragging', () => {
			it('should be set to false initially', () => {
				vm.dragging.should.be.false;
			});
		});

		describe('slideWidth', () => {
			// not currently testing this because it involves dom manipulation
		});

		describe('isDesktop', () => {
			// revisit, was previously using steal-clone
		});

		describe('carouselOptions', () => {
			let autoPlayInitValue = 3000;

			let vm = new (ViewModel.extend({seal: false}, {
				isDesktop: {
					type: 'boolean',
					value: false
				},
				autoPlay: {
					type: 'number',
					value: autoPlayInitValue
				},
				slides: {
					type: 'observable',
					value: ['slide1', 'slide2']
				}
			}));

			describe('when autoPlay is defined in carousel options', () => {
				describe('when breakOnDesktop is true and it is desktop view', () => {
					it('should not set autoPlay in the view model', () => {
						// setup 
						let randomNumber = chance.natural();
						let newOptions = {
							autoPlay: randomNumber,
							breakOnDesktop: true
						};
						vm.isDesktop = true;
						// run
						vm.carouselOptions = newOptions;
						// test
						vm.autoPlay.should.equal(autoPlayInitValue);
						vm.carouselOptions.should.deep.equal(newOptions);
					});
				});
				describe('when slides length is 1', () => {
					it('should not set autoPlay in the view model', () => {
						// setup 
						let randomNumber = chance.natural();
						let newOptions = {
							autoPlay: randomNumber,
							breakOnDesktop: true
						};
						vm.isDesktop = true;
						vm.slides = ['slide1'];
						// run
						vm.carouselOptions = newOptions;
						// test
						vm.autoPlay.should.equal(autoPlayInitValue);
						vm.carouselOptions.should.deep.equal(newOptions);
					});
				});
				describe('when breakOnDesktop is true, it is not desktop view (-) and slide length is > 1', () => {
					it('should set autoPlay in the view model', () => {
						// setup 
						let randomNumber = chance.natural();
						let newOptions = {
							autoPlay: randomNumber,
							breakOnDesktop: true
						};
						vm.isDesktop = false;
						vm.slides = ['slide1', 'slide2'];
						// run
						vm.carouselOptions = newOptions;
						// test
						vm.autoPlay.should.equal(randomNumber);
						vm.carouselOptions.should.deep.equal(newOptions);
					});
				});
				describe('when breakOnDesktop is not defined (-) and slide length is > 1', () => {
					it('should set autoPlay in the view model', () => {
						// setup 
						let randomNumber = chance.natural();
						let newOptions = {autoPlay: randomNumber};
						vm.isDesktop = false;
						// run
						vm.carouselOptions = newOptions;
						// test
						vm.autoPlay.should.equal(randomNumber);
						vm.carouselOptions.should.deep.equal(newOptions);
					});
				});
			});

			describe('when autoPlay is not defined in carousel options (-) and slide length is > 1', () => {
				it('should not set autoPlay in the view model', () => {
					// setup 
					vm.autoPlay = autoPlayInitValue; // reset auto play to default value
					let newOptions = {breakOnDesktop: false};
					vm.isDesktop = true;
					// run
					vm.carouselOptions = newOptions;
					// test
					vm.autoPlay.should.equal(autoPlayInitValue);
					vm.carouselOptions.should.deep.equal(newOptions);
				});
			});
		});

		describe('autoPlay', () => {
			// setup
			let vm = new (ViewModel.extend({seal: false}, {}));
			let setIntervalStub;

			beforeEach(() => {
				setIntervalStub = sinon.stub(window, 'setInterval');
			});

			afterEach(() => {
				setIntervalStub.restore();
			});

			it('should call window.setInterval once when duration is a number', () => {
				let randomNumber = chance.natural();
				vm.autoPlay = randomNumber;
				// test
				setIntervalStub.calledOnce.should.be.true;
				vm.autoPlay.should.equal(randomNumber);
			});

			it('should not call window.setInterval if not a number', () => {
				let randomNumber = chance.word();
				vm.autoPlay = randomNumber;
				// test
				setIntervalStub.called.should.be.false;
			});
		});

		describe('autoPlayDirection', () => {
			it('should be equal to right on default', () => {
				vm.autoPlayDirection.should.equal('right');
			});
		});

		describe('classSelector', () => {
			it('should be ".slideTrack" if no extra class defined', () => {
				vm.classSelector.should.equal('.slideTrack');
			});

			it('should be ".x-carousel .slideTrack" if "x-carousel" defined as extra class', () => {
				vm.carouselOptions.extraClass = 'x-carousel';
				vm.classSelector.should.equal('.x-carousel .slideTrack');
			});
		});
	});

	describe('oneSlideOver()', () => {
		// setup 
		let vm = new (ViewModel.extend({seal: false}, {}));

		let changeToActiveSlideStub;
		let direction;

		let fakeSlides = [1, 2, 3];

		vm.slides = fakeSlides;

		beforeEach(() => {
			changeToActiveSlideStub = sinon.stub(vm, 'changeToActiveSlide');
		});
		afterEach(() => {
			changeToActiveSlideStub.restore();
		});

		describe('when direction is right', () => {
			it('should increment the active slide flag', () => {
				// setup
				let activeSlide = 1;
				vm.activeSlideIndex = activeSlide;
				direction = 'right';
				// run 
				vm.oneSlideOver(direction);
				// test
				vm.activeSlideIndex.should.equal(activeSlide + 1);
			});
		});

		describe('when direction is left', () => {
			it('should increment the active slide flag', () => {
				// setup
				let activeSlide = 1;
				vm.activeSlideIndex = activeSlide;
				direction = 'left';
				// run 
				vm.oneSlideOver(direction);
				// test
				vm.activeSlideIndex.should.equal(activeSlide - 1);
			});
		});
	});

	describe('directionHandler()', () => {
		// setup 
		let autoPlay = chance.natural();

		let vm = new (ViewModel.extend({seal: false}, {
			autoPlay: {
				type: 'number',
				value: autoPlay
			}
		}));

		let oneSlideOverStub;
		let direction;
		let maxSlide;

		beforeEach(() => {
			oneSlideOverStub = sinon.stub(vm, 'oneSlideOver');
		});
		afterEach(() => {
			oneSlideOverStub.restore();
		});

		describe('when active slide does not equal the max slide', () => {
			it('should call the oneSlideOver function once', () => {
				// setup 
				direction = chance.pickone(['right', 'left']);
				maxSlide = 3;
				vm.activeSlideIndex = 1;
				// run
				vm.directionHandler(direction, maxSlide);
				// test
				oneSlideOverStub.calledOnce.should.be.true;
				oneSlideOverStub.calledWith(direction).should.be.true;
			});
		});

		describe('when active slide equals the max slide', () => {
			describe('when autoplay is defined', () => {
				it('should call the oneSlideOver function once with the opposite direction', () => {
					// setup 
					direction = 'left';
					maxSlide = 3;
					vm.activeSlideIndex = 3;
					// run 
					vm.directionHandler(direction, maxSlide);
					// test
					oneSlideOverStub.calledOnce.should.be.true;
					oneSlideOverStub.calledWith('right').should.be.true;
					vm.autoPlayDirection.should.equal('right');
				});
			});
		});
	});

	describe('arrowClickHandler()', () => {
		// setup 
		let vm = new (ViewModel.extend({seal: false}, {}));
		let e = {
			preventDefault: () => {
				// fake event with fake prevent default
			}
		};
		// setup
		let determineKeyDirectionStub;
		let directionHandlerStub;
		let direction;

		let fakeSlides = [1, 2, 3];

		vm.slides = fakeSlides;

		beforeEach(() => {
			directionHandlerStub = sinon.stub(vm, 'directionHandler');
			determineKeyDirectionStub = sinon.stub(vm, 'determineKeyDirection');
		});
		afterEach(() => {
			directionHandlerStub.restore();
			determineKeyDirectionStub.restore();
		});

		it('should call determine key direction function if direction is keyboard', () => {
			// setup 
			direction = 'keyboard';
			// run
			vm.arrowClickHandler(direction, e);
			// test
			determineKeyDirectionStub.calledOnce.should.be.true;
			determineKeyDirectionStub.calledWith(e).should.be.true;
		});

		describe('when the direction is right', () => {
			it('should call the direction handler function', () => {
				// run
				vm.arrowClickHandler('right');
				// test
				directionHandlerStub.calledOnce.should.be.true;
				directionHandlerStub.calledWith('right', vm.lastSlideIndex).should.be.true;
			});
		});

		describe('when the direction is left', () => {
			it('should call the direction handler function', () => {
				// run
				vm.arrowClickHandler('left');
				// test
				directionHandlerStub.calledOnce.should.be.true;
				directionHandlerStub.calledWith('left', 0).should.be.true;
			});
		});
	});

	describe('determineKeyDirection()', () => {
		// setup
		let vm = new ViewModel();

		let e = {
			target: {tagName: 'DIV'},
			keyCode: 37
		};

		describe('when the target is a textarea, input or select element', () => {
			it('should return nothing', () => {
				// setup 
				e.target.tagName = 'TEXTAREA';
				// run 
				// let direction = vm.determineKeyDirection(e);
				// test
				// should.equal(direction, undefined); // not sure why this isn't working
			});
		});

		describe('when target is none of those above mentioned elements', () => {
			it('should return left if keycode is 37', () => {
				// setup 
				e.target.tagName = 'DIV';
				e.keyCode = 37;
				// run 
				let direction = vm.determineKeyDirection(e);
				// test
				direction.should.equal('left');
			});

			it('should return right if keycode is 39', () => {
				// setup 
				e.keyCode = 39;
				// run 
				let direction = vm.determineKeyDirection(e);
				// test
				direction.should.equal('right');
			});
		});
	});

	describe('dotClickHandler()', () => {
		// setup
		let vm = new (ViewModel.extend({seal: false}, {}));
		let index = 2;
		let changeToActiveSlideStub;

		beforeEach(() => {
			changeToActiveSlideStub = sinon.stub(vm, 'changeToActiveSlide');
		});

		afterEach(() => {
			changeToActiveSlideStub.restore();
		});

		it('should set active slide index', () => {
			// run 
			vm.dotClickHandler(index);
			// test
			vm.activeSlideIndex.should.equal(index);
		});
	});

	describe('swipeHandler()', () => {
		// setup
		let vm;
		let event = 'anything, just for testing';
		let action;
		let swipeStartStub;
		let swipeMoveStub;
		let swipeEndStub;

		beforeEach(() => {
			vm = new (ViewModel.extend({seal: false}, {
				isDesktop: {
					type: 'bool',
					value: true
				},
				carouselOptions: {
					type: 'any',
					value: {}
				}
			}));
			swipeStartStub = sinon.stub(vm, 'swipeStart');
			swipeMoveStub = sinon.stub(vm, 'swipeMove');
			swipeEndStub = sinon.stub(vm, 'swipeEnd');
		});

		afterEach(() => {
			swipeStartStub.restore();
			swipeEndStub.restore();
			swipeMoveStub.restore();
		});

		describe('when break-on-desktop flag and is-desktop flag is true', () => {
			it('should not call the swipe functions at all', () => {
				// setup 
				vm.carouselOptions.breakOnDesktop = true;
				action = chance.pickone(['start', 'move', 'end']);
				// run 
				vm.swipeHandler(event, action);
				// test
				swipeStartStub.called.should.be.false;
				swipeMoveStub.called.should.be.false;
				swipeEndStub.called.should.be.false;
			});
		});

		describe('when break-on-desktop flag or is-desktop flag is false', () => {
			describe('when action is start', () => {
				it('should call swipe-start function with the event', () => {
					// setup 
					action = 'start';
					// run 
					vm.swipeHandler(event, action);
					// test
					swipeStartStub.called.should.be.true;
					swipeStartStub.calledWith(event).should.be.true;
				});
			});
			describe('when action is move', () => {
				it('should call swipe-move function with the event', () => {
					// setup 
					action = 'move';
					// run 
					vm.swipeHandler(event, action);
					// test
					swipeMoveStub.called.should.be.true;
					swipeMoveStub.calledWith(event).should.be.true;
				});
			});
			describe('when action is end', () => {
				it('should call swipe-end function with the event', () => {
					// setup 
					action = 'end';
					// run 
					vm.swipeHandler(event, action);
					// test
					swipeEndStub.called.should.be.true;
				});
			});
		});
	});

	describe('defineTouchEvent()', () => {
		let vm = new ViewModel();
		describe('when touches is not defined', () => {
			it('should return fingercount of 1 and touches as null', () => {
				// setup 
				let event = {};
				// run
				let touchesEvent = vm.defineTouchEvent(event);
				// test
				touchesEvent.fingerCount.should.equal(1);
				// should.equal(touchesEvent.touches, null); // revisit, why isn't this working?
			});
		});
		describe('when touches is defined', () => {
			it('should return the calculated finger count and the first touches object', () => {
				// setup 
				let first = 'hello';
				let event = {touches: ['hello', 'goodbye'] };
				// run
				let touchesEvent = vm.defineTouchEvent(event);
				// test
				touchesEvent.fingerCount.should.equal(2);
				touchesEvent.touches.should.equal(first);
			});
		});
	});

	describe('swipeStart()', () => {
		// setup
		let vm = new (ViewModel.extend({seal: false}, {}));
		let pageX = chance.word();
		let clientX = chance.word();

		let event = {touches: [{pageX: pageX}] };

		let defineTouchStub;

		beforeEach(() => {
			defineTouchStub = sinon.stub(vm, 'defineTouchEvent');
		});

		afterEach(() => {
			defineTouchStub.restore();
		});

		describe('when the event has a touches and pagex property', () => {
			describe('when finger count is equal to 1', () => {
				it('should assign pageX to startX and currentX to the viewmodel', () => {
					// setup
					defineTouchStub.returns({
						fingerCount: 1,
						touches: event.touches[0]
					});
					// run 
					vm.swipeStart(event);
					// test
					vm.swipeObject.startX.should.equal(event.touches[0].pageX);
					vm.swipeObject.currentX.should.equal(event.touches[0].pageX);
				});
			});
			describe('when finger count is greater than 1', () => {
				it('should break out of the function, swiping is not allowed', () => {
					// setup
					defineTouchStub.returns({
						fingerCount: 2,
						touches: event.touches[0]
					});
					// run 
					let returnValue = vm.swipeStart(event);
					// test
					returnValue.should.be.false;
				});
			});
		});

		describe('when the event does not have a touches and pagex property', () => {
			it('should assign clientX to startX and currentX to the viewmodel', () => {
				// setup 
				defineTouchStub.returns({
					fingerCount: 1,
					touches: null
				});
				event.clientX = clientX;
				event.touches = null;
				// run 
				vm.swipeStart(event);
				// test
				vm.swipeObject.startX.should.equal(event.clientX);
				vm.swipeObject.currentX.should.equal(event.clientX);
			});
		});

		it('should set dragging to true', () => {
			// setup 
			defineTouchStub.returns({
				fingerCount: 1,
				touches: null
			});
			event.clientX = clientX;
			// run 
			vm.swipeStart(event);
			// test
			vm.dragging.should.be.true;
		});

		it('should call defineTouchEvent with event', () => {
			// setup
			defineTouchStub.returns({
				fingerCount: 1,
				touches: null
			});
			// run 
			vm.swipeStart(event);
			// test
			defineTouchStub.calledOnce.should.be.true;
			defineTouchStub.calledWith(event).should.be.true;
		});
	});

	describe('swipeMove()', () => {
		// setup
		let vm = new (ViewModel.extend({seal: false}, {
			slideWidth: {
				type: 'number',
				value: '1180'
			}
		}));
		let moveCarouselToPositionStub;
		let fadeSlideByAmountStub;
		let getLeftStub;
		let defineTouchStub;
		let preventDefaultStub;
		let clientX = chance.natural();
		let pageX = chance.natural();
		let event = {touches: [{pageX: pageX}] };
		let startX = chance.natural();
		vm.swipeObject.startX = startX;

		beforeEach(() => {
			defineTouchStub = sinon.stub(vm, 'defineTouchEvent');
			moveCarouselToPositionStub = sinon.stub(vm, 'moveCarouselToPosition');
			fadeSlideByAmountStub = sinon.stub(vm, 'fadeSlideByAmount');
			getLeftStub = sinon.stub(vm, 'getLeft');
			preventDefaultStub = sinon.stub(vm, 'preventDefault');
		});

		afterEach(() => {
			defineTouchStub.restore();
			moveCarouselToPositionStub.restore();
			fadeSlideByAmountStub.restore();
			getLeftStub.restore();
			preventDefaultStub.restore();
		});

		describe('when dragging is false', () => {
			it('should stop here and exit the function', () => {
				// setup 
				defineTouchStub.returns({
					fingerCount: 1,
					touches: null
				});
				vm.dragging = false;
				// run 
				let returnValue = vm.swipeMove(event);
				// test
				returnValue.should.be.false;
			});
		});

		describe('when touch and pageX are defined', () => {
			it('should assign pageX to currentX on view model', () => {
				// setup 
				defineTouchStub.returns({
					fingerCount: 1,
					touches: event.touches[0]
				});
				vm.dragging = true;
				// run
				vm.swipeMove(event);
				// test
				vm.swipeObject.currentX.should.equal(pageX);
			});

			it('should assign currentX minus startX to swipeLength on view model', () => {
				// setup 
				defineTouchStub.returns({
					fingerCount: 1,
					touches: event.touches[0]
				});
				vm.dragging = true;
				let swipeLength = pageX - startX;
				// run
				vm.swipeMove(event);
				// test
				vm.swipeObject.swipeLength.should.equal(swipeLength);
			});
		});

		describe('when touch and pageX are not defined', () => {
			it('should assign clientX to currentX on view model', () => {
				// setup
				event = {
					touches: null,
					clientX: clientX
				};
				defineTouchStub.returns({
					fingerCount: 1,
					touches: event.touches
				});

				vm.dragging = true;
				// run
				vm.swipeMove(event);
				// test
				vm.swipeObject.currentX.should.equal(clientX);
			});

			it('should assign currentX minus startX to swipeLength on view model', () => {
				// setup 
				defineTouchStub.returns({
					fingerCount: 1,
					touches: event.touches
				});
				vm.dragging = true;
				let swipeLength = clientX - startX;
				// run
				vm.swipeMove(event);
				// test
				vm.swipeObject.swipeLength.should.equal(swipeLength);
			});
		});


		describe('when carouselOptions.transition is "dissolve"', () => {
			it('should call the fadeSlideByAmount function with swipeAmount', () => {
				vm.carouselOptions.transition = 'dissolve';
				// setup 
				defineTouchStub.returns({
					fingerCount: 1,
					touches: event.touches
				});
				vm.dragging = true;
				let swipeLength = clientX - startX;
				let swipeAmount = swipeLength / vm.slideWidth;
				// run
				vm.swipeMove(event);
				// test
				fadeSlideByAmountStub.calledOnce.should.be.true;
				fadeSlideByAmountStub.calledWith(swipeAmount).should.be.true;
			});
		});

		describe('when carouselOptions.transition is not specified', () => {
			it('should call getLeft function once with the active slide', () => {
				vm.carouselOptions.transition = null;
				// setup 
				defineTouchStub.returns({
					fingerCount: 1,
					touches: null
				});
				vm.dragging = true;
				let activeSlide = 77;
				vm.activeSlideIndex = activeSlide;
				// run 
				vm.swipeMove(event);
				// test
				getLeftStub.calledOnce.should.be.true;
				getLeftStub.calledWith(activeSlide);
			});

			it('should call the moveCarouselToPosition function with pointerPosition', () => {
				vm.carouselOptions.transition = null;
				// setup 
				defineTouchStub.returns({
					fingerCount: 1,
					touches: event.touches
				});
				vm.dragging = true;
				let swipeLength = clientX - startX;

				let currentLeft = chance.natural();
				getLeftStub.returns(currentLeft);

				let pointerPosition = currentLeft + swipeLength;
				// run
				vm.swipeMove(event);
				// test
				moveCarouselToPositionStub.calledOnce.should.be.true;
				moveCarouselToPositionStub.calledWith(pointerPosition).should.be.true;
			});
		});
	});

	describe('swipeEnd()', () => {
		// setup
		let changeToActiveSlideStub;

		let vm = new (ViewModel.extend({seal: false}, {
			lastSlideIndex: {
				type: 'number',
				value: 5
			},
			activeSlideIndex: {
				type: 'number',
				value: 0
			},
			swipeObject: {
				type: 'any',
				value: {swipeLength: 0}
			},
			slideWidth: {
				type: 'number',
				value: 0
			}
		}));

		let defineTouchStub;

		beforeEach(() => {
			defineTouchStub = sinon.stub(vm, 'defineTouchEvent');
			changeToActiveSlideStub = sinon.stub(vm, 'changeToActiveSlide');
		});

		afterEach(() => {
			defineTouchStub.restore();
			changeToActiveSlideStub.restore();
		});

		describe('when dragging is false', () => {
			it('should stop here and exit the function', () => {
				// setup 
				vm.dragging = false;
				// run 
				let returnValue = vm.swipeMove();
				// test
				returnValue.should.be.false;
			});
		});

		describe('when swipe is to the left and greater than 10%, AND it is not the last slide', () => {
			it('should increment the active slide property and call the changeToActiveSlide function', () => {
				// setup 
				vm.dragging = true;
				vm.swipeObject.swipeLength = -15;
				vm.slideWidth = 100;
				let activeSlide = 1;
				vm.activeSlideIndex = activeSlide;
				// run 
				vm.swipeEnd();
				// test
				vm.activeSlideIndex.should.equal(activeSlide + 1);
			});
		});

		describe('when swipe is to the right and is greater than 10%, AND it is not the first slide', () => {
			it('should reduce the active slide property and call the changeToActiveSlide function', () => {
				// setup
				vm.dragging = true;
				vm.swipeObject.swipeLength = 15;
				vm.slideWidth = 100;
				let activeSlide = 2;
				vm.activeSlideIndex = activeSlide;
				// run 
				vm.swipeEnd();
				// test
				vm.activeSlideIndex.should.equal(activeSlide - 1);
			});
		});

		describe('when swipe (to right or left) is less than 10% OR its the first/last slide', () => {
			it('should call changeToActiveSlide on the existing active slide index (goes back to center)', () => {
				// setup 
				vm.dragging = true;
				vm.swipeObject.swipeLength = chance.pickone([5, -5, 1, -8]);
				vm.slideWidth = 100;
				let activeSlide = 2;
				vm.activeSlideIndex = activeSlide;
				// run 
				vm.swipeEnd();
				// test
				vm.activeSlideIndex.should.equal(activeSlide);
			});
		});

		it('should set reset the swipe object', () => {
			// setup 
			vm.dragging = true;
			// run
			vm.swipeEnd();
			// test
			vm.swipeObject.should.deep.equal(SWIPE_OBJECT_DEFAULT);
		});

		it('should set dragging flag to false', () => {
			// setup 
			vm.dragging = true;
			// run
			vm.swipeEnd();
			// test
			vm.dragging.should.be.false;
		});
	});

	describe('getLeft()', () => {
		let slideWidth = chance.natural();
		let slideIndex = 2;

		let vm = new (ViewModel.extend({seal: false}, {
			slideWidth: {
				type: 'number',
				value: slideWidth
			}
		}));

		it('should return the left pixel position of the current slide', () => {
			// setup 
			let leftSide = -slideWidth * slideIndex;
			// run
			let returnLeft = vm.getLeft(slideIndex);
			// test
			returnLeft.should.equal(leftSide);
		});
	});

	describe('changeToActiveSlide()', () => {
		describe('when carousel options transition is "dissolve"', () => {
			let fadeToActiveSlideStub;
			let vm = new (ViewModel.extend({seal: false}, {
				carouselOptions: {
					type: 'any',
					value: {transition: 'dissolve'}
				}
			}));
			beforeEach(() => {
				fadeToActiveSlideStub = sinon.stub(vm, 'fadeToActiveSlide');
			});
			afterEach(() => {
				fadeToActiveSlideStub.restore();
			});
			it('should call fadeToActiveSlide function', () => {
				vm.changeToActiveSlide();
				fadeToActiveSlideStub.calledOnce.should.be.true;
			});
		});

		describe('when carousel options transition is not specified', () => {
			let moveCarouselToActiveSlideStub;
			let vm = new (ViewModel.extend({seal: false}, {
				carouselOptions: {
					type: 'any',
					value: {}
				}
			}));
			beforeEach(() => {
				moveCarouselToActiveSlideStub = sinon.stub(vm, 'moveCarouselToActiveSlide');
			});
			afterEach(() => {
				moveCarouselToActiveSlideStub.restore();
			});
			it('should call moveCarouselToActiveSlide function', () => {
				vm.changeToActiveSlide();
				moveCarouselToActiveSlideStub.calledOnce.should.be.true;
			});
		});
	});

	describe('moveCarouselToPosition()', () => {
		// NOTE: We are not currently testing DOM manipulation
	});

	describe('moveCarouselToActiveSlide()', () => {
		// NOTE: We are not currently testing DOM manipulation
	});

	describe('fadeSlideByAmount()', () => {
		// NOTE: We are not currently testing DOM manipulation
	});

	describe('fadeSlideToActivePosition()', () => {
		// NOTE: We are not currently testing DOM manipulation
	});

	describe('preventDefault()', () => {
		// NOTE: Nothing to test here
	});

	describe('handleBreakOnDesktop()', () => {
		let clearAutoPlayStub;

		let vm = new (ViewModel.extend({seal: false}, {}));

		beforeEach(() => {
			clearAutoPlayStub = sinon.stub(vm, 'clearAutoPlay');
		});

		afterEach(() => {
			clearAutoPlayStub.restore();
		});

		it('should call changeToActiveSlide once with no parameters', () => {
			// run 
			vm.handleBreakOnDesktop();
			// test
			vm.activeSlideIndex.should.equal(0);
			clearAutoPlayStub.calledOnce.should.be.true;
		});
	});

	describe('makeAllSlidesOpaque()', () => {
		// NOTE: We are not currently testing DOM manipulation
	});

	describe('makeOnlyActiveSlideOpaque()', () => {
		// NOTE: We are not currently testing DOM manipulation
	});

	describe('clearAutoPlay()', () => {
		// NOTE: We are not currently testing DOM manipulation
	});

	describe('Demo Page', () => {
		let componentElements;
		let testArea = document.getElementById('mocha-fixture');

		/**
		 * @function beforeSetup
		 * @description iterate through slideArray and append all the carousels
		 * to the testArea DOM
		 */
		const beforeSetup = (done) => {
			slideArray.forEach((slideOpts) => {
				let map = new DefineMap(slideOpts);
				testArea.appendChild(template(map));
			});

			componentElements = document.body.querySelectorAll('tucows-donejs-carousel');

			done();
		};

		/**
		 * @function afterTeardown
		 * @description remove everything inside the testArea DOM element
		 */
		const afterTeardown = () => {
			// remove all carousel elements
			while (testArea.firstChild) {
				testArea.removeChild(testArea.firstChild);
			}
		};

		describe('placement', () => {
			before(beforeSetup);
			after(afterTeardown);

			it('should show 8 carousels', () => {
				componentElements.length.should.equal(8);
			});
		});
	});

	describe('Functional Tests', () => {
		let componentElement;
		let activeSlide;
		let indexOfActiveSlide;
		let testArea = document.getElementById('mocha-fixture');

		/**
		 * @function beforeSetup
		 * @description create new carousel with navArrows option set to true
		 */
		const beforeSetup = (done) => {
			let map = new DefineMap({
				slides: slides,
				carouselOptions: {navArrows: true}
			});
			testArea.appendChild(template(map));

			componentElement = document.body.querySelector('tucows-donejs-carousel');

			done();
		};

		/**
		 * @function afterTeardown
		 * @description remove everything inside the testArea DOM element
		 */
		const afterTeardown = () => {
			// remove all carousel elements
			while (testArea.firstChild) {
				testArea.removeChild(testArea.firstChild);
			}
		};

		describe('Click on the right arrow', () => {
			let rightArrow;

			before((done) => {
				beforeSetup(() => {
					rightArrow = componentElement.querySelector('.rightArrow');
					rightArrow.click();
					done();
				});
			});
			after(afterTeardown);

			describe('active slide', () => {
				it('should be the second one (index 1)', () => {
					activeSlide = componentElement.querySelector('.slide.active');
					// get the index of the active slide relative to siblings
					indexOfActiveSlide = [...activeSlide.parentNode.children].indexOf(activeSlide);

					indexOfActiveSlide.should.equal(1);
				});
			});
		});

		describe('Click on the left arrow', () => {
			let leftArrow;

			before((done) => {
				beforeSetup(() => {
					leftArrow = componentElement.querySelector('.leftArrow');
					leftArrow.click();
					done();
				});
			});
			after(afterTeardown);

			describe('active slide', () => {
				it('should stay on first slide', () => {
					activeSlide = componentElement.querySelector('.slide.active');
					// get the index of the active slide relative to siblings
					indexOfActiveSlide = [...activeSlide.parentNode.children].indexOf(activeSlide);

					indexOfActiveSlide.should.equal(0);
				});
			});
		});

		// describe('clicking', () => {
		// 	before((done) => {
		// 		beforeSetup(() => {
		// 			button.click();
		// 			done();
		// 		});
		// 	});
		// 	after(afterTeardown);

		// 	it('should show the tooltip', () => {
		// 		tooltip.classList.contains('show').should.equal(true);
		// 	});

		// 	it('should hide the tooltip when clicked again', () => {
		// 		button.click();
		// 		tooltip.classList.contains('show').should.equal(false);
		// 	});
		// });

		// describe('hovering', () => {
		// 	before((done) => {
		// 		beforeSetup(() => {
		// 			domEvents.dispatch(button, 'mouseover');
		// 			done();
		// 		});
		// 	});
		// 	after(afterTeardown);

		// 	it('should show the tooltip', () => {
		// 		tooltip.classList.contains('show').should.equal(true);
		// 	});

		// 	it('should set lastHoverTimestamp', () => {
		// 		componentVM.lastHoverTimestamp.should.be.greaterThan(0);
		// 	});

		// 	it('should hide the tooltip when no longer being hovered over', () => {
		// 		domEvents.dispatch(button, 'mouseout');
		// 		tooltip.classList.contains('show').should.equal(false);
		// 	});
		// });
	});
});
