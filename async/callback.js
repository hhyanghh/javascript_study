'use strict';

// JavaScript is synchronous.
// 자바스크립트는 동기적이다.
// Execute the code block in order after hoisting.
// hoisting이 된 이후부터 코드가 우리가 작성한 순서에 맞춰 
// 하나씩 동기적으로 실행된다.
// hoisting : var, function declaration 선언들이 자동적으로 제일 위로 올라가는

console.log('1');
setTimeout(function(){
    console.log('2');
},1000)
console.log('3');

// setTimeout() ?
// web API 지정한 시간이 지나면, 우리가 전달한 함수를 호출 ::콜백함수 === 나중에 호출한다.
//콜백함수 : 나중에 다시 불러줘!

// Synchronous callback
// 즉각적으로 동기적으로 실행
function printImmediately(print){
    print();
}
printImmediately(()=>console.log('hello'));

// Asynchronous callback
// 나중에 언제 실행될지 예측할 수 없음
function printWithDelay(print,timeout){
    setTimeout(print, timeout);
}
printWithDelay(()=>console.log('async callback'),2000);

// 위의 내용을 정리하면
// 1. function 이 먼저 올라감
function printImmediately(print){
    print();
}

function printWithDelay(print,timeout){
    setTimeout(print, timeout);
}

console.log('1'); //동기
setTimeout(function(){ //비동기
    console.log('2');
},1000)
console.log('3'); //동기
printImmediately(()=>console.log('hello')); //동기
printWithDelay(()=>console.log('async callback'),2000); //비동기

