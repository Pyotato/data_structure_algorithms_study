//양수의 배열
// 짝수 element 다음에 홀수가 나오도록 정렬하기
const an_array = [2, 4, 533, 1231, 34, 97, 23, 10];

const sortEvenOdd = (arr) => {
  const sortEven = (a) => (a % 2 === 1 ? 0 : -1);
  const an_array = arr.sort(sortEven); //짝수 역순으로 정렬됨
  an_array.sort(sortEven);
  return console.log(an_array);
};
sortEvenOdd(an_array);
