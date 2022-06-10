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

function colorMixer (color1, color2) {
    const newColor = `${color1} + ${color2}`
    return newColor
}

function colorized (item, color1, color2) {
    const color = colorMixer (color1, color2)
    
    const colorizedItem = `The ${item} is ${color}.`
    return colorizedItem
}

console.log (colorized ("car", "red", "orange"))
