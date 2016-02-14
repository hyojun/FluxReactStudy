//import ReactDOM from 'react-dom';
//import Greeting from './greeting';
//import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import TestButton from 'js/react/TestButton.js';

require('res/less/sb-admin-2.less');
ReactDOM.render(<TestButton/> , document.getElementById('study_container'));

// ReactDOM.render(
//   <Greeting name='World'/>,
//   document.body
// );
//document.write(''+Test.pi);
// document.write('Hello World!!!');
// document.write('\n');
// let test = new Test();
// let a = test.getA();

// class Polygon {
//
//   //직접 접근이 안되면서 안에서는 사용할 수 있도록
//   // user = {
//   //   name = 'name',
//   //   age = 'age'
//   // };
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//     let xx = this.height;
//     document.write(' ' + xx + ' ');
//   }
//
//   toString() {
//     return 'this.height:' + this.height + 'this.width:' + this.width;
//   }
// }

// let p = new Polygon(3,4);
// document.write(p.toString());



//let testasfasd = Test.newInstance(9,10);


//
// let ls = new Test(1,2);
// document.write('test'+ls.toString());
