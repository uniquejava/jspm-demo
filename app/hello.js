import $ from 'jquery';
import _ from 'myname';

export function sayHello() {
  $('body').text('hello ' + _.VERSION);
  console.log(_.VERSION);
}
