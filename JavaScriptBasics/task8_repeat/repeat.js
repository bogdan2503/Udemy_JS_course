let data1 = [49, 51, 63];
let data2 = [31, 29, 43, 58, 52];

function printHumiditiesForecast(arr) {
  let y = "...";

  for (i = 0; i < arr.length; i++) {
    y += `${arr[i]}% humidity in ${i + 1} days...`;
  }
  console.log(y);
}

printHumiditiesForecast(data1);
printHumiditiesForecast(data2);
