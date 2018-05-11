import QUnit from 'steal-qunit';
import plugin from './donejs-carousel-plugin';

QUnit.module('donejs-carousel-plugin');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the donejs-carousel-plugin plugin');
});
