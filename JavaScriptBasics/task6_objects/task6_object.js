let jack = {
    firstName: "Jack",
    lastName: "White",
    weight: 91,
    height: 1.93,
    bmiCalc: function () {
        this.bmi = this.weight/this.height**2
        return this.bmi
    }
}

let mike = {
    firstName: "Mike",
    lastName: "Black",
    weight: 79,
    height: 1.7,
    bmiCalc: function () {
        this.bmi = this.weight/this.height**2
        return this.bmi
    }
}

console.log (mike.bmiCalc())
console.log (mike.bmi)

console.log (jack.bmiCalc())
console.log (jack.bmi)

let e1 = jack.bmi > mike.bmi
console.log (e1)

if (e1) {
    console.log (`Jack White BMI (${jack.bmi}) is higher than Mike Black BMI (${mike.bmi})`)
} else {
    console.log (`Mike Black BMI (${mike.bmi}) is higher than Jack White BMI (${jack.bmi})`)
}