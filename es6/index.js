// npm run build

//variables

const My_CONST = 1;

let v = 1;

for (let i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i);
    }, 1000);
}


//#############################################################

//es5
const original = function () {
    return 100;
}

// es6
// const arrow = () => {return 150};

// const arrow = (shift) => {return 150 + shift};
// const arrow = (shift, offset) => {return (150 + shift) * offset};

// const arrow2 = (shift, offset) => (150 + shift) * offset;

const arrow3 = shift => (150 + shift);

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

const name = 'WFM';
const age = 30;

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



//#############################################################