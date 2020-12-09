'use strict';
//Object-oriented programing
//class : template
//object : instance of a class
//Javascript classes
//-introduced in ES6
//-syntactical sugar over prototype-based inheritance
//기존에 존재하던 프로토타입을 기본으로 문법상으로 달달한 

//class가 도입되기 전에는? 바로 object를 만들 수 있었음 function을 이용해서

// 1. class declarations class 선언
class Person {
    // constructor
    constructor(name,age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name} : hello!`);
    }
}

const pado = new Person('pado',20);
console.log(pado.name);
console.log(pado.age);
pado.speak();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){
        return this._age;
    }
    set age(value) {
        
        /*if (value < 0) {
            throw Error('age can not be negative');
        }
        this._age = value;*/
        this._age = value < 0 ? 0 : value;
    }
}
const user1 = new User('steve','jobs',-1);
console.log(user1.age);

//3. fields (public, private)
// Too soon
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon
class Article{
    static publisher = 'Dream coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 상속, 다양성
// 반복되어지는 것들을 찾아서 한번 정의하고
// 공통적으로 쓰이는 속성값을 재사용

// 5. Inheritance
// a way for one class to extend another class.

class shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of!`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends shape {}
class Triangle extends shape {
    draw(){
        super.draw();
        console.log('🔺');
    }
    getArea(){
        return (this.width * this.height) / 2;
    }
}
const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle (20,20,'red');
triangle.draw();
console.log(triangle.getArea());

//triangle 의 너비값만 다르게 지장하고싶어서
//class Triangle extends shape 안에 getArea 값 따로 지정함
//draw도 따로 지정했더니, 위에 정의한 draw는 지워진게 보임
//이럴땐 super.draw(); 부모의 draw도 쓴다 라고 정의해내림된다.

// 6. Class checking : instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof shape);
console.log(triangle instanceof Object);
//왼쪽에 있는 object가 오른쪽에 있는 class의 instance인지 아닌지 
//오른쪽 class로 만들어진 object인지 아닌지 출력 true / false
