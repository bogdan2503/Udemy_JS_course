// const brand = "Toyota";
// const model = "Camry";
// const color = "red";
// const year = "1999"

// let car;

// car = `<h4>` + `My car` + `</h4>` +
// `<ul>` +
// `<li> Brand -- ` + brand + `</li>` +
// `<li> Model -- ` + model + `</li>` +
// `<li> Color -- ` + color + `</li>` +
// `<li> Year -- ` + year + `</li>` +
// `<ul>`;
//////////////////////////////////////////////////////////////
// car = `
// <h4>My car</h4>
// <ul>
// <li> Brand -- ${brand} </li>
// <li> Model -- ${model} </li>
// <li> Color -- ${color} </li>
// <li> Year -- ${2020+10} </li>
// <li> car  doors -- ${door()} </li>
// <li> tax ${year < 2000 ? "10%" : "20%"} </li>
// <ul>;
// `
// function door (){
//     let x = 1
//     let y = 1
//     return x+y
// }

// document.body.innerHTML = car

//////////////////////////////////////////////////////////////

// console.log (Boolean(0))
// console.log (Boolean(""))
// console.log (Boolean(undefined))
// console.log (Boolean(NaN))
// console.log (Boolean(null))

//////////////////////////////////////////////////////////////

// function colorMixer (color1, color2) {
//     const newColor = `${color1} + ${color2}`
//     return newColor
// }

// function colorized (item, color1, color2) {
//     const color = colorMixer (color1, color2)

//     const colorizedItem = `The ${item} is ${color}.`
//     return colorizedItem
// }

// console.log (colorized ("car", "red", "orange"))

//////////////////////////////////////////////////////////////
// youraObject = {
//     name: "YouRa",
//     lastname: "Allak",
//     birthYear: 1970,
//     job: "programming",
//     hasDriverLicense: false,
//     family: ["Irina", "Mick", "YouRa"],

//     final: function () {
//         this.age = 2021 - this.birthYear
//         return `${this.name} is a ${this.age} - year old ${this.job} and he has ${this.hasDriverLicense ? "a" : "no"} driver licence
// `
//     },
// }

// console.log (youraObject.final ())

// console.log (youraObject)
// console.log (
//     `${youraObject.family[2]} has ${youraObject.family.length} famiy members and the first is ${ youraObject.family[0]}
//    `)

//////////////////////////////////////////////////////////////
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => console.log("done!"), 1000);
// });

// promise.then(
//   (result) => alert(result),

//   (error) => alert(error)
// );
//////////////////////////////////////////////////////////////

// let lastName = "Brown";
// let oldLastName = lastName;
// lastName = "White";
// console.log (lastName, oldLastName);

// const jane = {
//   first: "jane",
//   year: 2015
// }

// let tonia = jane

// console.log (tonia)
// console.log (jane)

// tonia.year = 2010
// console.log (tonia)
// console.log (jane)

// const sara = {
//   first: "sara",
//   year: 2022
// }
// console.log (sara)

// const SaraCopy = Object.assign ({}, sara)
// console.log (SaraCopy)

// SaraCopy.year = 2000
// SaraCopy.first = "SaraCopy White"
// sara.year = 3000

// console.log (sara)
// console.log (SaraCopy)
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
////////////////////// sushi restaraunt //////////////////////
////////////////////// РОЗДІЛ 7 //////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
////////////////// деструктуризація масивів //////////////////
//////////////////////////////////////////////////////////////
const japaneseRestaurant = {
  name: "Banzai",
  location: "108 Markham Woods Rd, Longwood, USA",
  categories: ["Japanese", "Sushi", "Vegetarian", "Organic"],
  appetizers: ["Seaweed salad", "Tempura shrimp", "Edamame", "Sushi rice"],
  mainMenu: ["Sushi", "Ramen", "Tempura"],

  orderFood: function (appetizersIndex, mainMenuIndex) {
    return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
  },
};

// let [cat1, , cat3] = japaneseRestaurant.categories;
// console.log(cat1);
// console.log(cat3);
// [cat1, cat3] = [cat3, cat1];
// console.log(cat1);
// console.log(cat3);
// let [app, mainFood] = japaneseRestaurant.orderFood(2, 1);
// console.log(app);
// console.log(mainFood);

// let arr = [1, 2, [8, 9]];
// let [arr1, , [arr3, arr4]] = arr;
// console.log(arr1);
// console.log(arr3);
// console.log(arr4);

let arr = [3, 5, 6];
let [t = 0, s = 0, d = 0, f = 0] = arr;
console.log(t);
console.log(s);
console.log(d);
console.log(f);
