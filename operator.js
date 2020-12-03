//1. String concatentation
//+를 이용해 문자열과 문자열을 합할수있다.
console.log('my' + 'cat');
console.log('1'+2);
console.log(`string literals:1+2=${1+2}`);

//2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder 나누고 나머지값
console.log(2 ** 3); //exponentiation 2의3승

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//counster = counter + 1;
//카운터 는 카운터(2)에 1을 더해라 즉 3
//증가한 다음에 값을 할당하는 것 
//preIncrement = counter;
console.log(preIncrement);

const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1;
//먼저 변수의 값을 할당하고 그 후에 값을 증가시키는 것
console.log(counter);

//4. Assigment operators
let x = 3;
let y = 6;
x += y;
x -+ y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operatiors  || or, && and, ! not
const value1 = false;
const value2 = 4<2;

// || or 하나라도 true면 true로 출력
// finds the first truth value
// true가 나오면 거기서 멈춤

// && and finds the first falsy value
// 모두 true여야 
// often used to compress long if-statement
// nullableObject && nullableObject.something

console.log(`or : ${value1 || value2 || check()}`);
function check(){
    for (let i = 0; i<10; i++){
        //wasting time
        console.log('바보');
    }
    return true;
}

// !(not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive); //똑같지않다? 아니야 얘넨 똑같애 false

// === strict equality, no type conversion //타입
console.log(stringFive === numberFive); //다른타입 false 달라
console.log(stringFive !== numberFive);

// object equality by reference
const pado1 = {name : 'yangpado'};
const pado2 = {name : 'yangpado'};
const pado3 = pado1;
console.log(pado1 == pado2);
console.log(pado1 === pado2);
console.log(pado1 === pado3);

// equality - puzzler
console.log(0 == false); //t
console.log(0 === false); //f
console.log('' == false); //t
console.log('' === false); //f
console.log(null == undefined); //t
console.log(null === undefined); //f

// 8. conditional operatiors : if
// if, else if, else
const name = 'pado';
if (name === 'pado'){
    console.log ('Welcome, pado!');
} else if (name === 'coder'){
    console.log ('you are amazing coder');
} else{
    console.log('who are you?');
}

// 9. Ternary operator : ? 
// if를 조금 더 간단히 사용함
// condition ? value1 : value2;
console.log(name === 'pado' ? 'yes' : 'no');
// ? a : b
// true면 a false면 b

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser){
    case 'IE' : 
    console.log('go away!');
    break;
    case 'Chrome' :
    case 'Firefox':
        console.log('love you!');
    break;
    default:
    console.log('same all!');
    break;
}


// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i>0){
    console.log(`while:${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition
// 먼저 {}를 실행하고 조건이 맞는지 아닌지 검사
do{
    console.log(`do while : ${i}`);
    i--;
} while (i>0);

// for loop, for (begin; condition; step)
for (i=3; i>0; i--){
    console.log(`for:${i}`);
}

for (let i=3; i>0; i=i-2){
    //inline variable declaration
    console.log(`inline variable for:${i}`);
}

// nested loops
for (let i=0; i<3; i++){
    for (let j=0; j<5; j++){
        console.log(`i:${i}, j:${j}`);
    }
}

// break, continue
// 01. iterate from 0 to 10 and print only even numbers (use continue)
for (let i=0; i<11; i++){
    if (i%2 !== 0){
        continue;
    }
    console.log(`q1. ${i}`);
}
// 02. iterate from 0 to 10 and print number until reaching 8 (use break)
for (let i=0; i<11; i++){
    if(i>8){
        break;
    }
    console.log(`q2. ${i}`);
}
