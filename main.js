// // let m = require('./math-tool.js');
// //
// // console.log(m.plus(1,2));

// //const fs = require('fs');
// // //파일시스템
// // let fileList = fs.readdirSync('.');
// // console.log(fileList);

// //fs.writeFileSync('new', 'Hello node');

// // const os = require('os');
// // // OS정보
// // console.log(os.cpus());
// // //현재 컴퓨터 cpu정보출력

// // const cowsay = require('cowsay');
// //
// //   console.log(cow.say({
// //     text : "hello",
// //   }));

// const fs = require('fs');

// // console.log('Start');
// //
// // let content = fs.readFileSync('./new', 'utf8');
// // console.log(content);
// //
// // console.log('Finish');
// // // 동기 프로그래밍

// console.log('Start');

// fs.readFile('./new', 'utf8', (error, data) => {
//       console.log(data);
// });


// console.log('Finish');
// // 비동기 프로그래밍 

const EventEmitter = require('events'); // emitter 코어모듈 땡겨옴

const myEmitter = new EventEmitter; // 클래스 사용위해 객체에 잡아넣음

const myEmitter2 = new EventEmitter; // 함수 재정의.

var fs = require('fs');

var text = fs.readFileSync('new', 'utf8');

let today = new Date();

const obj = {type: 'text', data: text, date : today};

myEmitter.on('test', () => {
      console.log('test1'); 
});  // test라는 이벤트 발생 시 '    ' 문구 출력

myEmitter.on('test', () => {
      console.log('test2');
});

myEmitter2.on('test', (arg1, arg2, arg3) => {
      console.log(arg1);
      console.log(arg2);
      console.log(arg3);
});

myEmitter2.on('test', (info) => {
      console.log(info);
});


myEmitter.emit('test'); // myEmitter로 test라는 이벤트 발생.
myEmitter2.emit('test', 'data', 'content', 'file'); // 이 메서드가 62line 위로가게되면 출력순서 또한 바뀜
myEmitter2.emit('test', obj)