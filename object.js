'use strict';
// Objects
// one of the Javascript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// Object = {key : value};

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax
const name = 'pado';
const age = 20;
print(name,age);
function print(name,age){
    console.log(name);
    console.log(age);
}

const pados = { name : 'pado', age : 4};
print(pados);

pados.hasjob = true;
console.log(pados.hasjob);

delete pados.hasjob;
console.log(pados.hasjob);

// 2. Computed properties
// 계산된 속성
// key should be alwalys string
console.log(pados.name);
// .을 쓸땐 코딩하는 그 순간 키에 해당하는 값을 받아오고 싶을때 사용
console.log(pados['name']);
// []는 정확히 어떤 key가 필요할지 모를떄, runtime떄 결정될떄 사용
pados['hasjob'] = true;
console.log(pados.hasjob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(pados,'name');
printValue(pados,'age');

// 3. Property value shorthand
const person1 = { name : 'bob', age: 2 };
const person2 = { name : 'steve', age: 3 };
const person3 = { name : 'dave', age: 4 };
// 이걸 계속 써야하나? 한번에 할 수 있는 방법
const person4 = makePerson('newp',30);
console.log(person4);

// class가 없을때 
function makePerson(name,age) {
    return {
        name,
        age,
    }
}

// 4. Constructor Function
// 다른방법
function Person(name,age){
    // 생략된것 this = {};
    this.name = name;
    this.age = age;
    // 생략된것 return this;
}
const person5 = new Person('ddenggu',30);
console.log(person5);

// 5. In operator : property existence check (key in obj)
// 해당하는 object 안에 key가 있는지 ? 
console.log('name' in pados);
console.log('age' in pados);
console.log('job' in pados);
console.log('hasjob' in pados);
console.log(pados.height);

// 6. for..in vs for..of
//for (key in obj)
let key;
//console.clear();
for (key in pados) {
    console.log(key);
}

// for (value of iterable)
// 예전방법
const array = [1,2,4,5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// 쉬운방법
const arrays = [1,3,5,7,9];
let value;
for (value of arrays){
    console.log(value);
}

// 7. Fun cloning
// Object.assign (dest, [obj1, obj2, obj3...])

const user = {name : 'ellie', age:'20'};
const user2 = user;
user2.name = 'coder';
console.log(user);
// ellie가 지워지고 coder로 출력됨

// object 복제하는 방법
// old way
const user3={}; //빈 object 만들기
for (key in user){
    user3[key] = user[key];
}
console.log(user3);

// 다른방법
const user4 = {};
Object.assign(user4, user);
console.log(user4);
//assign<T, U>(target: T, source: U): T & U;
//assign? 
//복사하고자하는 타켓과 복사할 소스 전달 : 리턴은 타겟과 소스

const user5 = Object.assign({},user);
console.log(user5);

//another example
const fruit1 = { color : 'red' };
const fruit2 = { color : 'green' , size : 'big'};
const mixed = Object.assign({},fruit1,fruit2);
console.log(mixed.color);
console.log(mixed.size);

