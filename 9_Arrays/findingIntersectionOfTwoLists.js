//find the intersection of two lists
const this_weeks_winners = [2, 43, 48, 62, 64, 28, 3];
const most_common_winners = [1, 28, 42, 70, 3, 20, 62, 31, 4, 14];
const most_common_winners2 = [1, 62, 31, 4, 14];

//GOAL : most_common_winners에 this_weeks_winners 의 어떤 항목이 공통인지

//방법1:
//list의 for in lopp으로 같은 값 찾기, 정렬이 안됐기 떄문에 O(n**2)

//방법2:
//set의 intersection 함수 사용 ...js는 이 함수가 없음 ㅜㅜ
//원하는 만큼의 개수의 sets비교 가능

//for of
// const find_intersection = (s1, s2) => {
//   const set1 = new Set([...s1]);
//   const set2 = new Set([...s2]);
//   const intersection = [];
//   for (item of set1) {
//     set2.has(item) ? intersection.push(item) : intersection;
//   }
//   return console.log(intersection);
// };

find_intersection(this_weeks_winners, most_common_winners);
