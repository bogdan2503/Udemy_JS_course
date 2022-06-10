// function getAverage (m1, m2, m3) {
//     let avg = (m1+m2+m3) / 3;
//     return avg;
// }

// let dept1q1 = getAverage (35467, 29842, 38501);
// let dept1q2 = getAverage (50301, 21984, 19207);
// let dept2q1 = getAverage (70533, 50121, 33899);
// let dept2q2 = getAverage (72381, 41562, 29465);

let getAverage = (m1, m2, m3) => (m1+m2+m3) / 3

let dept1q1 = getAverage (35467, 29842, 38501);
let dept1q2 = getAverage (50301, 21984, 19207);
let dept2q1 = getAverage (70533, 50121, 33899);
let dept2q2 = getAverage (72381, 41562, 29465);

console.log (`All average for 2 dept 1 quaters 
${dept1q1} ${dept2q1} 
and 2 dept 2 quaters 
${dept1q2} ${dept2q2}`)

function printBonus (dept1AverSales, dept2AverSales) {
    if (dept1AverSales > dept2AverSales) {
        let dif1 = ((dept1AverSales - dept2AverSales)/dept1AverSales) * 100;
            if (dif1 > 30) {
                console.log (`Dept 1 will get a bonus of ${dif1}%`);
            } else {
                console.log ("No winner 1");
            }
            return dif1;
    } else {
        let dif2 = ((dept2AverSales - dept1AverSales)/dept2AverSales) * 100;
            if (dif2 > 30) {
                console.log (`Dept 2 will get a bonus of ${dif2}%`);
            } else {
                console.log ("No winner 2");
            }
            return dif2;
    }
}

console.log (printBonus (dept1q1, dept2q1));

console.log (printBonus (dept1q2, dept2q2));