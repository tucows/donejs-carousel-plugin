import QUnit from 'steal-qunit';
import { ViewModel } from './donejs-carousel-plugin';

// ViewModel unit tests
QUnit.module('donejs-carousel-plugin');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the tucows-donejs-carousel component');
});
