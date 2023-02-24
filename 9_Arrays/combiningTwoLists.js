const test1 = [1, 2, 3, 4];
const test2 = [5, 6, 7, 8];
const testTitle = ["first", "second", "third", "fourth"];

//뒤에 이어붙이기
// console.log(test1.concat(test2));

//새로운 배열의 길이를 리턴

//[5, 6, 7, 8, 1, 2, 3, 4]
const shiftTest = [...test1];
shiftTest.unshift(...test2);
// console.log(shiftTest);

//뒤에 이어붙이기
const pushTest = [...test1];
pushTest.push(...test2);
// console.log(pushTest);

//배열에 합치기 python 의 zip

const newArr = testTitle.map((v, index) => [v, test1[index]]);
console.log(newArr);
//[ [ 'first', 1 ], [ 'second', 2 ], [ 'third', 3 ], [ 'fourth', 4 ] ]
