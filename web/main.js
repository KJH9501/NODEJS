const http = require('http'); //http객체

const express = require('express'); // express 서드파티모듈 생성

const app = express(); //express로 객체생성

users = ['stu1', 'stu2', 'stu3', 'stu4'];

// let server = http.createServer(function (request, response) {
//   // response.end('<h1>Hello World</h1>');
//   //console.log(request.url);
//   if(request.url === '/') {
//     response.end('<h1>welcome</h1>');
//     alert('Hi')
//   }
//   else if(request.url === '/users') {
//     response.end('<h1>' + users + '</h2>');
//   }
//   else if(request.url.split('/')[1] ==='users') {
//     const userIdx = request.url.split('/')[2];
//     const username = users[userIdx -1];
//     response.end('<h1>'+username+'</h1>');
//   }
//   //split메소드사용
//   else{
//     response.end('<h1>no page</h1>');
//   }
// }); //http객체에 createServer메소드 호출.

//server.listen(3000); // listen - 클라이언트 요청 대기 / 포트 3000

app.get('/', (request, response) => {
  response.end('<h1>Welcome!</h1>');
});

app.get('/users', (request, response) => {
  response.end('<h1>' + users + '</h1>');
});

app.get('/users/:id', (request, response) => {
   const userName = users[request.params.id -1];
   response.end('<h1>' + userName + '</h1>');
  //console.log(request.params);
});

app.get('*', (request, response) => {
  response.end('<h1>No Page</h1>');
});

app.listen(3000);

