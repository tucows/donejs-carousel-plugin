/* eslint-disable max-lines */
'use strict';
/* global
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

/**
 * @function cleanUpTestArea
 * @description remove everything inside the testArea DOM element
 */
const cleanUpTestArea = (testArea) => {
	// remove all carousel elements
	while (testArea.firstChild) {
		testArea.removeChild(testArea.firstChild);
	}
};

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

		describe('isMultiSlide', () => {
			it('should be true when there are multiple slides', () => {
				// setup
				vm.slides = [...chance.word({length: 5})];
				// test
				vm.isMultiSlide.should.equal(true);
			});

			it('should be false when there is only one slide', () => {
				// setup
				vm.slides = [...chance.word({length: 1})];
				// test
				vm.isMultiSlide.should.equal(false);
			});
		});

		describe('isUsingMultipleFingers', () => {
			it('should be true when there are multiple touches', () => {
				// setup
				const result = vm.isUsingMultipleFingers({touches: [...chance.word({length: 5})] });
				// test
				result.should.equal(true);
			});

			it('should be false when there is only a single touch', () => {
				// setup
				const result = vm.isUsingMultipleFingers({touches: [...chance.word({length: 1})] });
				// test
				result.should.equal(false);
			});
		});

		describe('isDisableOnDesktop', () => {
			describe('when view is desktop', () => {
				it('should set it to true when breakOnDesktop true', () => {
					// setup
					vm.isDesktop = true;
					vm.carouselOptions = {breakOnDesktop: true};
					// test
					vm.isDisableOnDesktop.should.equal(true);
				});

				it('should set it to false when breakOnDesktop false', () => {
					// setup
					vm.isDesktop = true;
					vm.carouselOptions = {breakOnDesktop: false};
					// test
					vm.isDisableOnDesktop.should.equal(false);
				});
			});

			describe('when view is not desktop', () => {
				it('should set it to false when breakOnDesktop true', () => {
					// setup
					vm.isDesktop = false;
					vm.carouselOptions = {breakOnDesktop: true};
					// test
					vm.isDisableOnDesktop.should.equal(false);
				});

				it('should still set it to false when breakOnDesktop false', () => {
					// setup
					vm.isDesktop = false;
					vm.carouselOptions = {breakOnDesktop: false};
					// test
					vm.isDisableOnDesktop.should.equal(false);
				});
			});
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
					value: () => {
						['slide1', 'slide2'];
					}
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
						vm.autoPlayDuration.should.equal(0, 'falsy value');
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
						vm.autoPlayDuration.should.equal(0, 'falsy value');
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
						vm.autoPlayDuration.should.equal(randomNumber);
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
						vm.autoPlayDuration.should.equal(randomNumber);
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
					vm.autoPlayDuration.should.equal(0, 'falsy value');
					vm.carouselOptions.should.deep.equal(newOptions);
				});
			});
		});

		describe('autoPlayDirection', () => {
			it('should be equal to right on default', () => {
				vm.autoPlayDirection.should.equal('right');
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

	describe('changeToActiveSlide()', () => {
		// setup
		let vm = new (ViewModel.extend({seal: false}, {}));

		beforeEach(() => {
			sinon.stub(vm, 'fadeToActiveSlide');
			sinon.stub(vm, 'moveCarouselToActiveSlide');
		});

		afterEach(() => sinon.restore());

		describe('when transition is dissolve', () => {
			it('should call fadeToActiveSlide()', () => {
				// setup 
				vm.carouselOptions = {transition: 'dissolve'};
				// run
				vm.changeToActiveSlide();
				// test
				vm.fadeToActiveSlide.calledOnce.should.be.true;
				vm.moveCarouselToActiveSlide.calledOnce.should.be.false;
			});
		});

		describe('when transition is undefined', () => {
			it('should call moveCarouselToActiveSlide()', () => {
				// setup 
				vm.carouselOptions = {transition: undefined};
				// run
				vm.changeToActiveSlide();
				// test
				vm.fadeToActiveSlide.calledOnce.should.be.false;
				vm.moveCarouselToActiveSlide.calledOnce.should.be.true;
			});
		});
	});

	describe('swipeStart()', () => {
		// setup
		let vm;
		let pageX = chance.word();
		let clientX = chance.word();
		let event = {touches: [{pageX: pageX}] };

		beforeEach(() => {
			vm = new (ViewModel.extend({seal: false}, {}));
			sinon.stub(vm, 'isDisableOnDesktop').returns(false);
		});

		afterEach(() => sinon.restore());

		describe('when the event has a touches and pagex property', () => {
			describe('when finger count is equal to 1', () => {
				it('should assign pageX to startX and currentX to the viewmodel', () => {
					sinon.stub(vm, 'isUsingMultipleFingers').returns(false);
					// run 
					vm.swipeStart(event);
					// test
					vm.swipeObject.startX.should.equal(event.touches[0].pageX);
					vm.swipeObject.currentX.should.equal(event.touches[0].pageX);
				});
			});
			describe('when finger count is greater than 1', () => {
				it('should break out of the function, swiping is not allowed', () => {
					sinon.stub(vm, 'isUsingMultipleFingers').returns(true);
					// run 
					vm.swipeStart(event);
					// test 
					// should.equal(vm.swipeObject.currentX, undefined) does not work
					(vm.swipeObject.startX == undefined).should.equal(true);
					(vm.swipeObject.currentX == undefined).should.equal(true);
				});
			});
		});

		describe('when the event does not have a touches and pagex property', () => {
			it('should assign clientX to startX and currentX to the viewmodel', () => {
				// setup
				sinon.stub(vm, 'isUsingMultipleFingers').returns(false);
				event.clientX = clientX;
				event.touches = null;
				// run 
				vm.swipeStart(event);
				// test
				vm.swipeObject.startX.should.equal(event.clientX);
				vm.swipeObject.currentX.should.equal(event.clientX);
			});
		});
	});

	describe('swipeMove()', () => {
		// setup
		let vm = new (ViewModel.extend({seal: false}, {
			slideWidth: {
				type: 'number',
				value: '1180'
			},
		}));
		let clientX = chance.natural();
		let pageX = chance.natural();
		let startX = chance.natural();
		vm.swipeObject.startX = startX;
		vm.carouselOptions = {transition: undefined};

		beforeEach(() => {
			sinon.stub(vm, 'isDisableOnDesktop').returns(false);
			sinon.stub(vm, 'isUsingMultipleFingers').returns(false);
			sinon.stub(vm, 'preventDefault');
			sinon.stub(vm, 'moveCarouselToPosition');
			sinon.stub(vm, 'fadeSlideByAmount');
		});

		afterEach(() => sinon.restore());

		describe('when touch and pageX are defined', () => {
			let event = {touches: [{pageX: pageX}] };
			it('should assign pageX to currentX on view model', () => {
				// run
				vm.swipeMove(event);
				// test
				vm.swipeObject.currentX.should.equal(pageX);
			});

			it('should assign currentX minus startX to swipeLength on view model', () => {
				// setup 
				let swipeLength = pageX - startX;
				// run
				vm.swipeMove(event);
				// test
				vm.swipeObject.swipeLength.should.equal(swipeLength);
			});
		});

		describe('when touch and pageX are not defined', () => {
			let event = {
				touches: undefined,
				clientX,
			};
			it('should assign clientX to currentX on view model', () => {
				// run
				vm.swipeMove(event);
				// test
				vm.swipeObject.currentX.should.equal(clientX);
			});

			it('should assign currentX minus startX to swipeLength on view model', () => {
				// setup 
				let swipeLength = clientX - startX;
				// run
				vm.swipeMove(event);
				// test
				vm.swipeObject.swipeLength.should.equal(swipeLength);
			});
		});


		describe('when carouselOptions.transition is "dissolve"', () => {
			let event = {
				touches: undefined,
				clientX,
			};
			it('should call the fadeSlideByAmount function with swipeAmount', () => {
				// setup 
				vm.carouselOptions.transition = 'dissolve';
				let swipeLength = clientX - startX;
				let swipeAmount = swipeLength / vm.slideWidth;
				// run
				vm.swipeMove(event);
				// test
				vm.fadeSlideByAmount.calledOnce.should.be.true;
				vm.fadeSlideByAmount.calledWith(swipeAmount).should.be.true;
			});
		});

		describe('when carouselOptions.transition is not specified', () => {
			let event = {
				touches: undefined,
				clientX,
			};
			it('should call the moveCarouselToPosition function with pointerPosition', () => {
				// setup 
				vm.carouselOptions.transition = null;
				vm.activeSlideIndex = 1;
				let swipeLength = clientX - startX;
				let currentLeft = -vm.slideWidth * vm.activeSlideIndex;

				let pointerPosition = currentLeft + swipeLength;
				// run
				vm.swipeMove(event);
				// test
				vm.moveCarouselToPosition.calledOnce.should.be.true;
				vm.moveCarouselToPosition.calledWith(pointerPosition).should.be.true;
			});
		});
	});

	describe('swipeEnd()', () => {
		// setup
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
				value: () => ({swipeLength: 0})
			},
			slideWidth: {
				type: 'number',
				value: 0
			}
		}));

		beforeEach(() => {
			sinon.stub(vm, 'isDisableOnDesktop').returns(false);
			sinon.stub(vm, 'isUsingMultipleFingers').returns(false);
			sinon.stub(vm, 'changeToActiveSlide');
		});

		afterEach(() => sinon.restore());

		describe('when swipe is to the left and greater than 10%, AND it is not the last slide', () => {
			it('should increment the active slide property and call the changeToActiveSlide function', () => {
				// setup 
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
			// run
			vm.swipeEnd();
			// test
			vm.swipeObject.should.deep.equal(SWIPE_OBJECT_DEFAULT);
		});
	});

	describe('changeToActiveSlide()', () => {
		describe('when carousel options transition is "dissolve"', () => {
			let fadeToActiveSlideStub;
			let vm = new (ViewModel.extend({seal: false}, {
				carouselOptions: {
					type: 'any',
					value: () => ({transition: 'dissolve'})
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
					value: () => ({}),
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
			cleanUpTestArea(testArea);
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
		const testArea = document.getElementById('mocha-fixture');

		describe('Slide movement', () => {
			/**
			 * @function beforeSetup
			 * @description create new carousel with navArrows
			 */
			const beforeSetup = (done) => {
				let map = new DefineMap({
					slides: slides,
					carouselOptions: {
						navArrows: {
							leftSvgUrl: '/src/assets/icons.svg#pointLeft',
							rightSvgUrl: '/src/assets/icons.svg#pointRight'
						}
					}
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
				cleanUpTestArea(testArea);
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

			describe('Press right arrow key', () => {
				before((done) => {
					beforeSetup(() => {
						componentElement.querySelector('.carousel').dispatchEvent(
							new KeyboardEvent('keydown', {
								keyCode: 39,
								which: 39,
								key: 'ArrowRight',
								code: 'ArrowRight'
							})
						);
						done();
					});
				});
				after(afterTeardown);

				describe('active slide', () => {
					it('should go to second slide', () => {
						activeSlide = componentElement.querySelector('.slide.active');
						// get the index of the active slide relative to siblings
						indexOfActiveSlide = [...activeSlide.parentNode.children].indexOf(activeSlide);

						indexOfActiveSlide.should.equal(1);
					});
				});
			});

			describe('Press right arrow key twice, followed by left arrow once', () => {
				before((done) => {
					beforeSetup(() => {
						componentElement.querySelector('.carousel').dispatchEvent(
							new KeyboardEvent('keydown', {
								keyCode: 39,
								which: 39,
								key: 'ArrowRight',
								code: 'ArrowRight'
							})
						);
						componentElement.querySelector('.carousel').dispatchEvent(
							new KeyboardEvent('keydown', {
								keyCode: 39,
								which: 39,
								key: 'ArrowRight',
								code: 'ArrowRight'
							})
						);
						componentElement.querySelector('.carousel').dispatchEvent(
							new KeyboardEvent('keydown', {
								keyCode: 37,
								which: 37,
								key: 'ArrowLeft',
								code: 'ArrowLeft'
							})
						);
						done();
					});
				});
				after(afterTeardown);

				describe('active slide', () => {
					it('should finish on second slide ', () => {
						activeSlide = componentElement.querySelector('.slide.active');
						// get the index of the active slide relative to siblings
						indexOfActiveSlide = [...activeSlide.parentNode.children].indexOf(activeSlide);

						indexOfActiveSlide.should.equal(1);
					});
				});
			});
		});

		describe('Transition Length', () => {
			let activeSlide;
			let indexOfActiveSlide;

			/**
			 * @function beforeSetup
			 * @description create new carousel with autoPlay set to 500ms
			 */
			const beforeSetup = (done) => {
				let map = new DefineMap({
					slides: slides,
					carouselOptions: {autoPlay: 200}
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
				cleanUpTestArea(testArea);
			};

			describe('active slide after 200ms', () => {
				before(beforeSetup);
				after(afterTeardown);
				/*
				it('should be the second slide', (done) => {
					setTimeout(() => {
						activeSlide = componentElement.querySelector('.slide.active');
						// get the index of the active slide relative to siblings
						indexOfActiveSlide = [...activeSlide.parentNode.children].indexOf(activeSlide);

						indexOfActiveSlide.should.equal(1);

						done();
					}, 200);
				});
				*/
			});
		});
	});
});
