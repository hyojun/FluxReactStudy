//
// Variables and Scoping
//
// var : Function Scope 
// let : Block Scope
// const : 상수
function order(x, y){
	if(x > y){
		let tmp = y;
		y = x;
		x = tmp;
	}
	// 	tmp is undefined
}

//
// Multiple return values
//
function f() {
	return [1, 2];
}
var [a, b] = f();

let obj = {
	first: "koo",
	last: "jahun"
}
let {first: f, last: l} = obj;

//
// Parameter Handling
//
function (x, y=3) {
	return [x,y];
}

//
//Arrow Function
//
var objEs6 = {
  print: function(arg) {
    console.log(arg);
  },
  printAll: function(args) {
    console.log("ES6");
    args.forEach(v => this.print(v));
  }
}
objEs6.printAll([1,2,3,4,5,6,7,8,9,10]);
