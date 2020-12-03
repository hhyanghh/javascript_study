// javascript is very flexible
// flexible === dangerous 
// added ECMAScript 5
'use strict';

//2.Variable 변수 rw(read/write)
//메모리에 값을 읽고 쓰는게 가능.
//변경될 수 있는 값
//let (added in ES6)

{
    let name='ellie';
    console.log(name);
    name = 'hello'
    console.log(name);
}
console.log(name);

//3. Constant r(readonly)
//읽기만가능, 다시 다른값으로 변경 불가
//use const whenever possible.
//only use let if variable needs to change.

const daysInweek = 7;
const maxNumber = 5;

//Note!
//Immutable data types : primitive types, frozen objects (i,e, object.freeze())
//Mutable data types : all objects by default are mutable in JS

//favor immutable data type always for a few reasons;
//-security
//-thread safery
//-reduce human mistakes

//4. variable types
//primitive, single item : number,string, boolean,null,undefined, symbol
//object, box container / box단위로 
//function, first-class function

const count = 17; //integer
const size = 17.1; //declmal number
console.log(`value:${count}, type:${typeof count}`);
console.log(`value:${size}, type:${typeof size}`);

// number - special numeric values:infinity, -infinity, not a number
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' /2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string 
const char = 'c';
const brenden = 'brenden';
const greeting = 'hello' + brenden;
console.log(`value:${greeting}, type:${typeof greeting}`);
const helloBob = `hi ${brenden}!`;
console.log(`value:${helloBob},type:${typeof helloBob}`);

//boolean 참과 거짓
//false : 0, null, undefined, NaN, ''
//true : any oher value
const canRead = true;
const test = 3<1;
console.log(`value:${canRead}, type:${typeof canRead}`);
console.log(`value:${test},type:${typeof test}`);

//null
let nothing = null;
console.log(`value:${nothing}, type:${typeof nothing}`);

//undefined
let x;
console.log(`value:${x},type:${typeof x}`);

//symbol, create unique identifiers for objects
//심볼 : map이나 자료구조에서 고유한 식별자가 필요하거나
//동시다발적으로 일어나는 코드에서
//우선순위를 주고싶을때 
//고유한 식별자가 필요할때 씀.

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2);
console.log(`value:${symbol1.description}`);

//object , real-life object, data structure
//물건, 물체 박스형태
const ellie = {name : 'ellie', age : 20};
console.log(ellie);
ellie.age=21;
console.log(ellie);
//const 변경 못하지만
//속에 여러가지 아이는 변경할 수 있음

// 5. dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h 0번째 
console.log(`value:${text},type:${typeof text}`);
text=1;
console.log(`value:${text},type:${typeof text}`);
text = '7' + 5;
console.log(`value:${text},type:${typeof text}`);
text = '8' / '2';
console.log(`value:${text},type:${typeof text}`);
