/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

/* 문은 값을 반환 x 식은 값을 반환 o

  if문 if ... {//scope}
  for문 for ... {}
  while문 while ... {}
  함수선언 문
  do while 문 do 

  함수선언 문

  let result = condition ? value1 : value2
  let result = value1 || value2
  let result = value1 && value2

*/

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

const getRandomValue = () => {
  return Math.random() > 0.5 ? 1 : 0;
};
const getCalcPriceError = () => {
  throw new Error(
    "calcPrice 함수의 첫 번째 인수와 두 번째 인수는 필수 입력 값 입니다."
  );
};

const calcPrice = (
  priceA = getCalcPriceError(),
  priceB = getCalcPriceError(),
  priceC = getRandomValue(),
  priceD = 0
) => {
  // 이렇게 하면 기본값이 계속 복잡해진 일이 생김 그래서 파라미터 자체에 그냥 기본값을 넣어주면 쉽게 해결됨
  // 기본 값 대신 함수를 넣을 수도 있다.

  // if (!priceD && !priceC && !priceB) {
  //   priceB = 0;
  //   priceC = 0;
  //   priceD = 0;
  // } else if (!priceD && !priceC) {
  //   priceC = 0;
  //   priceD = 0;
  // } else if (!priceD) {
  //   priceD = 0;
  // }
  return priceA + priceB + priceC + priceD;
};

let result = calcPrice(100, 200);
console.log(result);

// 함수 선언

// 함수 호출

// 함수 값 반환

// 매개 변수

// 매개 변수 vs. 전달 인자

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
const rem = (pxValue, base = 16) => {
  typeof pxValue === "string" && (pxValue = parseInt(pxValue, 10));
  typeof base === "string" && (base = parseInt(base, 10));

  let rem = pxValue / base;
  return `${rem}rem`;
};
// 항상 테스트를 거쳐서 확인해보는 것이 좋음
// console.assert(rem(20) === "1.25rem");

console.log(rem(20)); //1.25rem
console.log(rem("30px")); //1.875rem
console.log(rem("56px", 10)); //5.6rem
console.log(rem("30px", "10px")); //3rem

console.assert(rem(20) === "1.25rem");
console.assert(rem("30px") === "1.875rem");
console.assert(rem("56px", 10) === "5.6rem");

// css(node: string, prop: string, value: number|strung) : string;
let css;

// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.
