//move all zeros to the end of a given array
const test1 = [8, 0, 3, 0, 12];
const test2 = [8, 0, 3, 0, 12, 1412, 33, 0, 1, 0, 233, 12, 0, 1, 7, 0, 0, 22];

const moveZeros = (arr) => {
  const others = arr.filter((v) => v !== 0);
  const filt = arr.filter((v) => v === 0);

  return (arr = others.concat(...filt));
};
// console.log(moveZeros(test1)); // 0.371 seconds
// console.log(moveZeros(test2));

const moveZerosWithFor = (arr) => {
  let zero_index = 0;
  for (index in arr) {
    if (arr[index] !== 0) {
      arr[zero_index] = arr[index];
      //   if (zero_index !== index) {  // index=0일때 0으로 교체..
      if (zero_index !== index && zero_index !== 0) {
        arr[index] = 0;
      }
      zero_index += 1;
    }
  }
  return arr;
};

console.log(moveZerosWithFor(test1)); // 0.593 seconds
// console.log(moveZerosWithFor(test2));
