let test1 = 18;
let i = 1;
const onFizzBuzzTest = (n) => {
  i % 3 === 0 && i % 5 === 0
    ? console.log("FizzBuzz")
    : i % 3 === 0
    ? console.log("Fizz")
    : i % 5 === 0
    ? console.log("Buzz")
    : console.log(i);
  i++;
  return n >= i ? onFizzBuzzTest(n) : n;
};
onFizzBuzzTest(test1);
