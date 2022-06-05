let weight = prompt ("enter your weight")
let height = prompt ("enter your height")

let imt = weight/(height*height)

if (imt < 18.5) {
    alert ("Your weight is to low")
} else if (imt >= 18.5 && imt <= 24.9 ) {
    alert ("Your weight is normal")
} else if (imt >= 25 && imt <= 29.9) {
    alert ("Your weight is not normal")
} else if (imt >= 30 ){
    alert ("Your weight is very hight")
}