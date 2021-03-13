// function add(a, b) {
//   return a+b;
// }
//
// exports.plus = add;

// 하나의 객체로 모아서 외부에 공개
let calc = {
  PI:  3.14,
  add: (a,b) => a+b,
  sub: (a,b) => a-b,
  mul: (a,b) => a*b,
  div: (a,b) => a/b,
  mod: (a,b) => a%b,
};
module.exports = calc;
//module.exports를 써야 객체를 통째로 외부공개가능
