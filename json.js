//JSON
//JavaScript Object Notation

//1. Object to JSON
//stringify (obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`);
    }, //함수는 object가 아니여서 전달안됨
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name','color']);
console.log(json);

json = JSON.stringify(rabbit, (key,value) => {
    console.log(`key : ${key}, value : ${value}`);
    return value;
});
console.log(json);

//2. JSON to Object
//parse(json)

json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
//obj.jump(); // 함수는 JSON으로 변환되지 않기떄문에

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);