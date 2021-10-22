'use strict';
// let a = 12.32;
// console.log(a.toString(16));
// console.log(Math.trunc(12.999999).toFixed(3));
// console.log(a.toFixed(2))
// console.log(isNaN(Number(a)));
// let arr = [15, 64, 2];
// let arr2 = [51, 24, 36, 98];
// console.log(Math.max(...arr));
// let newArr = [15, 64, 2, 51, 24, 36, 98];

// let Name = `Rasim ${a} salam ${15}`;
// let b = "Rasim " + a;

// console.log(Name.slice(5, 17));
// console.log(Name.substring(5, 17));
// console.log(Name.substr(5, 5));

// console.log("a".codePointAt(0) - "A".codePointAt(0));
// console.log(String.fromCodePoint(97))

// console.log("    Lorem ipsum       ".trim());
// console.log(" *".repeat(5));

// let Rasim = {
//     name: "Rasim",
//     surname: "Abbasov",
//     age: 25,
//     isMarried: false,
//     FullInfo() {
//         return `${this.name} ${this.surname} ${this.age}`;
//     }
// }

// console.log(Rasim.FullInfo());


// function Person(Name = "", Surname = "", Age = 0, IsMarred = false) {
//     this.name = Name,
//         this.surname = Surname,
//         this.age = Age,
//         this.isMarred = IsMarred,
//         this.Fullname = function () {
//             return `${this.name} ${this.surname}`;
//         }
// }

// let Rasim = new Person("Rasim", "Abbasov", 25, false);

// console.log(Rasim.Fullname());


// class Person {
//     constructor(Name = "", Surname = "", Age = 0, IsMarred = false) {
//         this.name = Name,
//             this.surname = Surname,
//             this.age = Age,
//             this.isMarred = IsMarred,
//             this.Fullname = function () {
//                 return `${this.name} ${this.surname}`;
//             }
//     }
// }



// class Student extends Person {
//     constructor(Name, Surname = "", Age = 0, IsMarred = false, Score, Group) {
//         super(Name, Surname, Age, IsMarred),
//             this.score = Score,
//             this.group = Group
//     }
// }


// let Rasim = new Student("Rasim", "Abbasov", 25, true, 550, "CE");
// console.log(Rasim.Fullname());



// class CoffeeMachine {
//     #_waterAmount = 0;

//     set waterAmount(value) {
//         if (value < 0) {
//             value = 0;
//         }
//         this._waterAmount = value;
//     }

//     get waterAmount() {
//         return this._waterAmount;
//     }

//     constructor(power) {
//         this._power = power;
//     }
// }

// let obj = new CoffeeMachine();
// obj._waterAmount = -12;

// console.log(obj._waterAmount);