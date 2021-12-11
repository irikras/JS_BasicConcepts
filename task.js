'use strict'

function solveEquation(a, b, c) {
  if (a == 0) {
    return false;
  }
  let arr;
  let d = b **2 - 4 * a * c;
  console.log("Discriminant: " + d);

  if (d < 0) {
    arr = [];
  } else if (d == 0) {
    arr = [(-b / (2 * a))];
  } else if (d > 0) {
    let x = [];
    x.push((-b + Math.sqrt(d)) / (2 * a));
    x.push((-b - Math.sqrt(d)) / (2 * a));
    arr = x;
  }
  return arr; // array
}
let res = solveEquation(a, b, c);
console.log(`Quadratic root: ${res}`);
