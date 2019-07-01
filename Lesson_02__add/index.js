let num = 266219;

let string = String(num);
let i = string.length;
let multiply = 1;

while (i > 0) {
  multiply *= string[i - 1];
  i--;
}
console.log('multiply', multiply);

console.log('power', String(multiply ** 3).substring(0, 2));
