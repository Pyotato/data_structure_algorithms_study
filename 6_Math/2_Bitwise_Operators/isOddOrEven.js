const evenNum = 288;
const oddNum = 1997;

const onCheckOddOrEven = (n) => {
  n & 1 ? console.log(`${n}는 홀수입니다`) : console.log(`${n}는 짝수입니다`);
};

onCheckOddOrEven(evenNum);
onCheckOddOrEven(oddNum);
