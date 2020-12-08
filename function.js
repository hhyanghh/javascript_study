//Function
// - fundamental builing block in the program
// 프로그램을 구성하는 굉장히 중요한 
// - subprogram can be used multiple times
// 여러번 재사용 가능
// - performs a task or calculates a value
// 한가지의 task나 값을 계산할 떄 쓰인다.

// 1. Function declaration 함수정의
// function name(param1, param2) { body ... return; }
// 함수 이름지정 (매개변수 나열) {body 함수안에 기본적인 비즈니스로직 작성 한 다음 리턴}
// one function === one thing
// 중요한 포인트 하나의 함수는 한가지의 일만 하도록 ! 
// naming : doSomething, command, verb
// 무언가를 동작하는 것이기 때문에 동사형태로 이름 지정하기
// e.g. createCardAndPoint -> createCard, createPoint
// 함수는 최대한 간단하게! 세분화해서 나누기 , 깨끗하게 만들기
// function is object in JS

function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('yangpado hellow');
log(1234);
log('1234' + '1254');
log(1234+5678);

// 2. Parameters 
// premitive parameters : passed by value
// 메모리에 value가 저장됨
// object parameters : passed by reference
// reference가 저장됨
function changeName(obj){
    obj.name = 'coder';
}
const pado = {name : 'pado'};
changeName(pado);
console.log(pado);

// changeName 이름을 변경하는 함수

// 3. Default parameters (added in ES6)
function showMessage1(message, from){
    console.log(`${message} by ${from}`);
}
showMessage1('Hi!');
//message만 전달된 상태 / from은 전달되어있지 않음

 
function showMessage2(message,from){
    if (from === undefined) {
        from = 'maniddo';
    }
    console.log(`${message} by ${from}`);
}
showMessage2('Hi!');

function showMessage3(message, from = 'from me'){
    console.log(`${message} by ${from}`);
}
showMessage3('Hi!');

// 4. Rest parameters (added in ES6)
// 배열형태 array
function printAll(...args) {
    //방법1
    for (let i = 0; i < args.length; i++ ){
        console.log(args[i]);
    }

    //방법2
    for (const arg of args){
        console.log(arg);
    }

    //방법3 제일 간단함
    args.forEach((arra) => console.log(arra));
}
printAll('summer', 'beach', 'pado');
// length : 갯수


// 5. Local scope 지역
let globalMessage = 'global'; //global variable
function printMessage(){
    let message = 'hello';
    console.log(message); //local variable hello 출력
    console.log(globalMessage); //global 출력
    function printAnother(){
        let childMessage = 'helloanother';
        console.log(childMessage);
    }
    printAnother();
    return undefined;
}
printMessage();

//밖에서는 안이 보이지않고, 안에서만 밖을 볼 수 있다.
//{}안에서 선언하면 지역변수 
//지역변수는 안에서만 접근 가능
//밖에서 출력하면 오류남 (밖에서는 변수 지정이 안됐기때문)

sum(9,3);
// 6. Return a value
function sum(a,b){
    return a + b;
}
const result = sum(1,2); //3
console.log(`sum: ${sum(1,2)}`);

// return undefined; 기본
// return a + b; 리턴할 값 지정

// 7. Early return, early exit
// bad 안좋은 방법
function upgradeUser(user){
    if (user.point > 10){
        // long upgrade logic ...
    }
}

// good
function upgradeUser(user){
    if (user.point <= 10){
        return;
    }
    // long upgrade logic... 
}

// First-class function
// functions are treated like any other variable
// function은(함수는) 다른 변수와 마찬가지루
// can be assigned as a value to variable
// 변수에 할당이 되고 
// can be passed as an argument to other functions
// function의 parameter 값으로도
// can be returned by another function
// return 값으로도 전달이 된다.

// 1. Function expression
// a function declatation can be called ealier than it is defined.(hosited)
// a function expression is created when the exclution reaches it.

const print = function (){ // 함수에 이름이 없음 anonymous function
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(4,7));

// 2. callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'orange is the new black') {
        printYes();
    } else{
        printNo();
    }
}
const printYes = function () {
    console.log('ph-1');
}
// Named function 
// better debugging in debugger's stack traces
// recursion
const printNo = function print() {
    console.log('American drama');
    // 함수에 이름을 쓸땐 디버깅할떄 사용
    // 또는 함수 안에서 함수를 부를때 사용 ! 그렇지만 쓰지말기 계속 호출됨 -> call stack size exceeded
};
randomQuiz('orange is orange',printYes, printNo);
randomQuiz('orange is the new black',printYes, printNo);

//randomQuiz에 정담, 맞을떄, 틀릴때 함수들을 전달해줌 
//상황에 맞게 전달해주는 것을 callback 함수라고 함
//정답이 맞으면 printYes , 틀리면 printNo

// Allow function
// always anoymous
// 간결하게 만들어주는 너무 좋은 
const simplePrint = function () {
    console.log('simplePrint');
};

const simplePrint2 = () => console.log('simplePrint2');
const add = (a,b) => a + b;
console.log(add (3,4));
const simpleMultiply = (a,b) => {
    return a*b;
};
console.log(simpleMultiply (4,7));

// IIFE : Immediately Invoked function Expression
// 함수를 바로바로 실행하고 싶을 떄 !
(function hellow() {
    console.log('IIFE');
})();

// homework 🥕
//function calculate (command, a, b)
//command : add, substract, divide, multiply, remainder


