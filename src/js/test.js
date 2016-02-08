export default class Test {
  
  static newInstance(){
    return new Test(1,2);
  }


  constructor(height, width){
    this.height = height;
    this.width = width;
  }

  toString() {
    return 'this.height:' + this.height + 'this.width:' + this.width;
  }


}

// //factory method pattern
// export var newInstance = function(height, width){
//   return new Test(height, width);
// };
//
//
// //singleton pattern
// var instance = null;
// export var getInstance = function(height, width){
//   if(instance === null){
//     instance = new Test(height, width);
//   }
//   return instance;
// };


//InnerClass
// class InnerClass {
//
// }
