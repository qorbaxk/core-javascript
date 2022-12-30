/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);


/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)
let z1 = performance.now();
// let i = 0;
// while(i<frontEndDev.length){
//   console.log(frontEndDev[i]);
//   i++
// }

// shift 사용 및 배열 얕은 복사
let copyArray1 = [...frontEndDev];

while(copyArray1.length){
  console.log(copyArray1.shift());
  
}

// while 문 (역순환 : 역방향)
let z2 = performance.now();
// i = frontEndDev.length-1;

// while(i>=0){
//   console.log(frontEndDev[i]);
//   i--
// }

//i를 정의하지 않고도 돌리는 법
// pop 사용 및 배열 얕은 복사
// let copyArray2 = [...frontEndDev];

// slice 사용으로 복사
let copyArray2 = frontEndDev.slice(); 

while(copyArray2.length){
  console.log(copyArray2.pop()); //pop을 통해 마지막 값을 빼서 나옴
}



console.log(frontEndDev);


// 성능 진단 : 순환 vs. 역순환
console.log('순환',z1);
console.log('역순환',z2);

//지금은 성능차이가 크지 않지만, 원래는 역순환이 성능이 더 좋다고 한다
