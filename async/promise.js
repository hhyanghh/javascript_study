'use strict';

//Promise is a JS object for asynchronous operation.
// 1. state 상태 
// pending -> fullfilled or rejected
// 2. producer 와 consumer의 차이점을 아는 것.
// producer vs consumer 

// 1. producer
// when new Promise is created, the executor runs automatically. 
// 새로운 promise가 만들어 질떄는, 우리가 전달한 excutor라는 함수가 자동으로 실행된다.

const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files etc)
    console.log('doing something...');
    setTimeout(() => {
        //resolve('pado'); //성공 
        reject(new Error('no network')); //실패 
    },2000);
});

// 2. consumers : then, catch, finally
promise
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {console.log('finally');});

// 3. promise chaining promise 연결하기
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});
fetchNumber
.then(num => num*2)
.then(num => num*3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num -1), 1000);
    }) ;
})
.then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'),1000);
    });
const getEgg = hen => 
    new Promise ((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🐣`)),1000);
    });
const cook = egg => 
    new Promise ((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍼`),1000);
    });

getHen()
.then(hen => getEgg(hen))
.catch(error => {
    return '🌭';
})
.then(egg => cook(egg))
.then(meal => console.log(meal))
.catch(console.log);