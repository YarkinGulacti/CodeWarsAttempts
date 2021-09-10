const oddNumbers = (e) => Array.from(new Array(Math.floor((e + 1) /2)), (_, i) => 2 * i + 1);

console.log(oddNumbers(100));