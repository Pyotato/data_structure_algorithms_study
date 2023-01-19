const notPwr2 = 7;
const Pwr2 = 16;
const Pwr2_2 = 1;
const Pwr2_3 = -1;

const isPwrOf2 = (n) => {
  if (n < 0) {
    return console.log(`${n}은 음수입니다.`);
  }
  (n & (n - 1)) == 0
    ? console.log(`${n}은 2ⁿ으로 표현 가능한 수입니다.`)
    : console.log(`${n}은 2ⁿ으로 표현 불가능한 수입니다.`);
};

isPwrOf2(notPwr2);
isPwrOf2(Pwr2);
isPwrOf2(Pwr2_2);
isPwrOf2(Pwr2_3);
