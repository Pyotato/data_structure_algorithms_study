//리스트 중복 항목 체크
//리스트 두개를 비교하면 O(n**2)이 됨 대신
//set (python)에서 쓰임,
//책에서는 리스트 길이 비교함

const test_list = [
  "greyhound",
  "alpaca",
  "beaver",
  "great chimpanzee",
  "chipmunk",
  "greyhound",
];
// const check_duplicates = (arr) => {
//   //0.414 sec
//   const tempArr = [];
//   const duplicates = [];
//   arr.map((v) => (!tempArr.includes(v) ? tempArr.push(v) : duplicates.push(v)));
//   return tempArr.length !== arr.length
//     ? duplicates
//     : "there are no duplicates!";
// };

//항목의 첫인덱스와 마지막 인덱스가 다르고 중복배열에 포함 안된다면 배열에 추가
const check_duplicates = (arr) => {
  const duplicates = [];
  arr.map((v) => {
    arr.indexOf(v) !== arr.lastIndexOf(v) && !duplicates.includes(v)
      ? duplicates.push(v)
      : duplicates;
  });
  return duplicates;
};

console.log(check_duplicates(test_list));
