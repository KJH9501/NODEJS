// let m = require('./math-tool.js');
//
// console.log(m.plus(1,2));

//const fs = require('fs');
// //파일시스템
// let fileList = fs.readdirSync('.');
// console.log(fileList);

//fs.writeFileSync('new', 'Hello node');

// const os = require('os');
// // OS정보
// console.log(os.cpus());
// //현재 컴퓨터 cpu정보출력

// const cowsay = require('cowsay');
//
//   console.log(cow.say({
//     text : "hello",
//   }));

const fs = require('fs');

// console.log('Start');
//
// let content = fs.readFileSync('./new', 'utf8');
// console.log(content);
//
// console.log('Finish');
// // 동기 프로그래밍

console.log('Start');

fs.readFile('./new', 'utf8', (error, data) => {
      console.log(data);
});


console.log('Finish');
// 비동기 프로그래밍
