/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
*/
const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);

console.log(between(1, 20));