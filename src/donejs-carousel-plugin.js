import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './donejs-carousel-plugin.less';
import view from './donejs-carousel-plugin.stache';

export const ViewModel = DefineMap.extend({
  message: {
    default: 'This is the tucows-donejs-carousel component'
  }
});

export default Component.extend({
  tag: 'tucows-donejs-carousel',
  ViewModel,
  view
});
