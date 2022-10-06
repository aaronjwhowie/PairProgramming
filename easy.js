//Easy 1
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const odds = arr.filter((number) => {
  return number % 2 !== 0;
});
const evens = arr.filter((num) => num % 2 === 0);

console.log(`${odds} are odd numbers`); // 👉️ [1, 3, 5, 7, 9]
console.log(`${evens} are even numbers`); // 👉️ [1, 3, 5, 7, 9]
// Easy 2

let number = [10];

function isPrimeOrNot(number) {
  for (let i = 2; i < number; i++) {
    let i = 2;
    if (number % i == 0) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(isPrimeOrNot(number));
