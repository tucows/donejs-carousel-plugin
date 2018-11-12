@parent donejs-carousel-plugin
@module {can.Component} donejs-carousel-plugin <tucows-donejs-carousel>

Create a sliding carousel based on pre-defined slides. Utilizes arrow, dot and touch/mouse-drag navigation.

@signature `<tucows-donejs-carousel>`

@body

## Use

Creates a carousel with the slides passed into this component. Carousel options can be passed to the component. The carousel options include: 1) navArrows (boolean) - whether or not to display clickable arrows for slide navigation; 2) extraClass (string) - class name to be added to parent carousel element for styling; 3) breakOnDesktop (boolean) - whether or not the carousel should be enabled on desktop view; 4) autoPlay (number) - include this option if you want autoPlay enabled and the number represents the amount of time (in millisecond) between slide changes.  5) transition (string) - if set to 'dissolve', creates a fading transition between slides as opposed to sliding