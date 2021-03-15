const http = require('http'); //http객체

const express = require('express'); // express 서드파티모듈 생성

const app = express(); //express로 객체생성

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