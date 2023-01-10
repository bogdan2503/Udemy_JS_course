let tips = []
let totalBill = []

let calculateTips = (bill) => {
   
    for (i=0; i < bill.length; i++){

    if (bill[i] <= 20) {
        tips1 = bill[i] / 100 * 20
        console.log (tips1)
        tips.push (tips1)
        totalBill.push (bill[i]+tips1)
    } else {
        tips2 = bill[i] / 100 * 15
        console.log (tips2)
        tips.push (tips2)
        totalBill.push (bill[i]+tips2)
    }
}

console.log (tips)
console.log (totalBill)
}


let bills = [11, 20, 47]
console.log (calculateTips (bills))