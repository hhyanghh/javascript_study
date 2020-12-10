'use strict';

// Array 🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// Index position 0부터 시작
// length

// 2. index position
const fruits = ['🍎','🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
console.clear();
// a. for
for (let i = 0; i<fruits.length; i++) {
    console.log(fruits[i]);
}
// b.for of
for(let fruit of fruits) {
    console.log(fruit);
}

// c.forEach

// 긴 방법
fruits.forEach(function(fruit, index, array){
    console.log(fruit,index,array);
});

//짧은 방법
fruits.forEach((fruit,index) => {
    console.log(fruit,index);
})

//한줄이면 괄호와 ;도 생략가능하다.
fruits.forEach((fruit) => console.log(fruit));

// 4. addition, deletion, copy
// push : add an item to the end
fruits.push('🥝','🍇');
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
console.log(fruits);
//뒤에서부터 하나씩 삭제됨

// unshift : add an item to the beginning
fruits.unshift('🍋');
console.log(fruits);

// shift : remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note ! shift, unshift are slower than pop,push
// 뒤에 추가하는건 빈 공간에 넣기떄문에 쉽다
// 앞에 추가하는건? 기존에 있던 것들의 자리를 먼저 바꾸고 
// 그 후에 새로운 데이터를 넣기떄문에 

// splice : remove an item by index position
fruits.push('🍈','🥥','🍅');
console.log(fruits);
fruits.splice(1,2); //시작 index1, 갯수 2
console.log(fruits);
// splice 사용시 갯수를 지정안하면 다삭제됨~
fruits.splice(1,1,'🥑','🍑');
// 해석 : index1번째부터 하나 삭제하고, 그자리에 두개 집어넣기
console.log(fruits);

// combine two arrays
const fruits2 = ['🥝','🍇'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. searching 검사,검색
// find the index
console.log(fruits);
console.log(fruits.indexOf('🍅'));
console.log(fruits.indexOf('🍑'));
console.log(fruits.includes('🍑'));
console.log(fruits.includes('🍉'));
console.log(fruits.indexOf('🍉')); // 없는 경우 -1출력

// lastIndexOf
console.log(fruits);
fruits.push('🍌');
console.log(fruits);
console.log(fruits.indexOf('🍌'));
console.log(fruits.lastIndexOf('🍌'));


