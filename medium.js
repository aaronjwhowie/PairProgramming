// let vowels = ["a", "e", "i", "o", "u"];
// function vowelChecker(x) {
//   if (vowels == x) {
//     console.log(`${x} is a vowel`);
//   } else {
//     console.log(`${x} is Not a Vowel`);
//   }
// }

// console.log(vowelChecker(["a"]));

// function vowelChecker(x) {
//   if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
//     console.log(`${x} is a vowel`);
//   } else {
//     console.log(`${x} is Not a Vowel`);
//   }
// }

// console.log(vowelChecker("b"));

// -------------------------------
// Medium 2

// String1 = "GOD";
// String2 = "DGO";

// const anagramChecker = (String1, String2) => {
//   let str1 = String1.split("").sort().join("");
//   let str2 = String2.split("").sort().join("");
//   if (str1 == str2) {
//     console.log("This is an anagram");
//   } else {
//     console.log("This is not an anagram");
//   }
// };

// console.log(anagramChecker(String1, String2));

// Medium 3
// let a = 10;
// let b = 64;

// a = Math.abs(a);
// b = Math.abs(b);
// while (b) {
//   var c = b;
//   b = a % b;
//   a = c;
// }

// console.log(a);

//Medium 4

var car = {
  Make: "",
  Model: "",
  Year: "",
  Milage: 100,
  Color: "",

  driveToWork(x) {
    x = 33;
    this.Milage + x;
    console.log(this.Milage);
    console.log(this.driveToWork);
  },

  driveAroundTheWorld() {
    console.log(this.Milage);
  },

  runErrands() {
    console.log(this.Milage);
  },

  //   driveToWork = 33 miles
  // driveAroundTheWorld = 24,000 miles
  // runErrands = 30 miles
};

console.log(car[this.Milage]);
console.log(this.driveToWork);
