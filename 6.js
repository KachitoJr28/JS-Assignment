const int1 = prompt("type an integer(for number 6)");
const int2 = prompt("type another integer(for number 6)");
const int3 = prompt("type the last integer(for number 6)");

product = int1 * int2 * int3;
console.log(product);
if (product > 0) {
  console.log("+");
} else if (product < 0) {
  console.log("-");
} else {
  console.log("no sign");
}