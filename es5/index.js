"use strict";

// npm run build

//variables

// const My_CONST = 1;
//
// let v = 1;
//
// for (let i = 0; i < 5; i++){
//     setTimeout(function(){
//         console.log(i);
//     }, 1000);
// }


//#############################################################

//es5
var original = function original() {
    return 100;
};

// es6
// const arrow = () => {return 150};

// const arrow = (shift) => {return 150 + shift};
// const arrow = (shift, offset) => {return (150 + shift) * offset};

// const arrow2 = (shift, offset) => (150 + shift) * offset;

// const arrow3 = shift => (150 + shift);

//#############################################################
// ===== problem ======
// const obj = {
//     name: 'WFM',
//
//     logName: function () {
//         setTimeout(function () {
//             console.log(this.name)
//         },2000);
//     }
// }
// obj.logName();

// ===== resolve es5
// const obj = {
//     name: 'WFM es5',
//
//     logName: function () {
//         var self = this;
//         setTimeout(function () {
//             console.log(self.name)
//         },2000);
//     }
// }
// obj.logName();

// ===== resolve es6
// const obj = {
//     name: 'WFM es6',
//
//     logName: function () {
//         setTimeout(() => {
//             console.log(this.name)
//         },2000);
//     }
// }
// obj.logName();

//#############################################################
//default parameter in function

// problem
// const funct = (a) => {
//   return a;
// };
// console.log(funct()); //error undefined

// resolve es5
// const funct = (a) => {
//     a = a || 10;
//     return a;
// };
// console.log(funct()); //10

// resolve es6
// const funct = (a = 20) => {
//     return a;
// };
// console.log(funct()); //20

// example es6
// const funct = (a = 20, b = a + 50) => {
//     return a + b;
// };
// console.log(funct()); //90


//#######################5######################################
// create OBJECTS

// const name = 'WFM';
// const age = 30;

//es5
// const obj = {
//     name: name,
//     age: age
// };
// console.log(obj);

//es6 if field name and variable name are equals
// const obj = {
//     name,
//     age
// };
// console.log(obj);

//es6
// const createPerson = (name, surName) => {
//     const fullName = name + ' ' + surName;
//     return {fullName, name, surName}
// };
// console.log(createPerson('John', 'Doe'));

//es6
// const createPerson = (name, surName) => {
//     const fullName = name + ' ' + surName;
//     return {fullName, name, surName}
// };
// console.log(createPerson('John', 'Doe'));

//es6
// const createPerson = (name, surName) => {
//     const fullName = name + ' ' + surName;
//     return {
//         fullName,
//         name,
//         surName,
//         getJob(){
//             return 'Frontend'
//         }
//     }
// };
// console.log(createPerson('John', 'Doe').getJob());

//es6 dynamic field es5
// const createPerson = (name, surName, fieldName) => {
//     const fullName = name + ' ' + surName;
//     const person = {
//         fullName,
//         name,
//         surName,
//         getJob(){
//             return 'Frontend'
//         }
//     };
//     person[fieldName] = 20; //es5
//     return person;
// };
// console.log(createPerson('John', 'Doe', 'age'));

//es6 dynamic field
// const createPerson = (name, surName, fieldName) => {
//     const fullName = name + ' ' + surName;
//     return {
//         fullName,
//         name,
//         surName,
//         getJob(){
//             return 'Frontend'
//         },
//         [fieldName]: 21
//     };
// };
// console.log(createPerson('John', 'Doe', 'age'));


//##########################6###################################
//destrucure object
//es5
// let obj = {
//     name: 'John',
//     age: 20
// }
//
// let name = obj.name;
// let age = obj.age;
//
// console.log(name, age);

//es6 v1
// let obj = {
//     name: 'John',
//     age: 20
// }
//
// let {name} = obj;
// let {age} = obj;
//
// console.log(name, age);


//es6 v2
// let obj = {
//     name: 'John',
//     age: 20
// }
//
// let {name, age} = obj;
//
// console.log(name, age);


//es6 v3
// let obj = {
//     name: 'John',
//     age: 20
// }
//
// let {name: n, age: a} = obj;
//
// console.log(n, a);

//destrucure array
//es 5
// array = ['WFM', 30, 'red'];
//
// let name = array[0];
// let age = array[1];
// let color = array[2];
//
// console.log(name + ' ' + age + ' ' + color);

//es6
// array = ['WFM', 30, 'red'];
//
// let [name, age, color] = array;
// console.log(name + ' ' + age + ' ' + color);
//
// let [name,, color] = array;
// console.log(name + ' ' + color);
//
// let [,, color] = array;
// console.log(color);
//
// let [,,,someVariable = "str"] = array;
// console.log(someVariable);


//##########################7###################################
// ======= new operator Rest

// es5
// function logStrings(num, str, str2, str3) {
//     var args = Array.prototype.slice.call(arguments);
//     console.log(num, args)
// }
// logStrings(20, 'kavabanga', 'WFM', 'qwerty');

// es6
// function logStrings(num, ... args) {
//     console.log(num, args)
// }
// logStrings(20, 'kavabanga', 'WFM', 'qwerty');

// ======== new operator Spread

// let spreadArray = ['s1', 's2', 's3', 's4'];
// logStrings(20, ... spreadArray);


//##########################8###################################
// ===== strings

// es5
// let name = 'WFM';
// let str1 = 'Hello ' + name + ', glad to see you';
// console.log(str1);

// es6
// let name = 'WFM';
// let str1 = `Hello ${name}, glad to see you! ${5 + 10}`;
// let str2 = `Hello '${name}', glad to see you! ${5 + 10}`;
// let str3 = `Hello '${name}', glad to see "you"! ${5 + 10}`;
//
// let html = `
//     <div>
//         <h1>Hello World</h1>
//         <p>
//         text text text text text text text text text text text text text text text text text text text text
//         </p>
//     </div>
// `;
//
// console.log(str1);
// console.log(str2);
// console.log(str3);
// console.log(html);

//##########################9###################################
// ======= cycles

// es5
// const array = [1, 2,3,4,5,];
//
// for (let i = 0; i < array.length; i++){
//     console.log(array[i])
// }
//
// array.forEach(function (item) {
//     console.log(item)
// });

// es6
// const array = [1, 2,3,4,5,];
// for (let item of array) {
//     console.log(item)
// }

// es6
// for (let item of 'ABCDEFtyu') {
//     console.log(item)
// }

//##########################10###################################
// ======= classes

//es5
// function Car(name) {
//     this.name = name;
// }
//
// Car.prototype.logName = function (){
//   console.log(this.name)
// };
//
// let car = new Car('audi');
// car.logName();

//es6
// class Car {
//     constructor(name){
//         this.name = name;
//     }
//     logname(){
//         console.log(this.name);
//     }
//
//     static staticFunction(){
//         console.log('I am static function');
//     }
// }
// let car = new Car('Mazda');
// car.logname();
// Car.staticFunction();

//=======inheritance
//es6
// class Car {
//     constructor(name) {
//         this.name = name;
//         console.log('Car constructor');
//     }
//
//     logName() {
//         console.log('Car name is: ', this.name)
//     }
// }
//
// class Bmw extends Car {
//
//     constructor(name){
//         super(name);
//         console.log('Bmw constructor');
//     }
//
//     logName() {
//         console.log('Bmw name is: ', this.name)
//     }
// }
//
// let bmw = new Bmw('x6');
// bmw.logName();

//##########################11###################################
// ======= SET and WeakSet
// let set = new Set();
//
// set.add(10);
// set.add('hello');
// set.add({});
// set.add(10);
//
// console.log(set.size);
//
// let set2 = new Set([1, 2, 3, 4, 4, 4, 5]);
// console.log(set2);
//
// let set3 = new Set().add(2).add(3).add(4);
// console.log(set3);
// console.log('has?' + set3.has(3));
// console.log('delete?' + set3.delete(4));


//==========weakSet

// let set = new WeakSet();
//
// let key = {};
// set.add(key);
// console.log(set.size);
// key = null;
// console.log(set.size);


//##########################11###################################
// ======= Map and WeakMap
//
// let map = new Map();
//
// map.set('name', 'qwerty');
// map.set('age', 123);
//
// console.log(map);
// console.log(map.get('name'));
// console.log('size ' + map.size);
// console.log('has age? ' + map.has('age'));
// console.log('delete ' + map.delete('age'));
//
// let map2 = new Map([
//     ['name', 'asdf'],
//     ['age', 911]
// ]);
// console.log(map2);
//
// for (let val of map2.values()) {
//     console.log('value ' + val);
// }
//
// for (let key of map2.keys()) {
//     console.log('key ' + key);
// }
//
// for (let entry of map2.entries()) {
//     console.log(`${entry[0]} - ${entry[1]}`);
// }
//