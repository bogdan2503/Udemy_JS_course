let bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57];
let tips = [];
let totals = [];

let calculateTips = (bills) => {
    for (i=0; i < bills.length; i++){
        tipsFinal = bills[i] / 100 * 15
        // console.log (tipsFinal)
        tips.push (tipsFinal)
        totals.push (bills[i]+tipsFinal)
    }
}

console.log (calculateTips (bills))
console.log (tips)
console.log (totals)


let calculateAverage = (arr)=> {
    sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum = sum + arr[i]
        }
    return sum / arr.length
}

console.log (calculateAverage (totals))