/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

// 함수 선언 → 화살표 함수 (표현)식

let arr = [1, 2, 3, 4];
let arr2 = [...arr];

let calcAllMoney = (...args) => {
  // 화살표 함수는 arguments 가 없다.
  // 대신 ...args 가 있고 이건 진짜 배열이다.
  // 유사배열객체인 arguments는 array.from 이런걸로 배열을 바꿔줬어야 했지만,
  // console.log(args);

  let sum = args.reduce((a, b) => a + b, 0);
  return sum;
};

let resultX = calcAllMoney(10000, 8900, 1360, 2100);
let resultY = calcAllMoney(21500, 3200, 9800, 4700);
let resultZ = calcAllMoney(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);

// 화살표 함수와 this
function normalFunction() {
  console.log("일반함수:", this);
}

const arrowFunction = () => {
  console.log("화살표함수:", this);
};

normalFunction(); // 나를 호출한 대상을 this에 참조
arrowFunction(); // this자체를 바인딩하지 않음 this를 안가짐 없으니까 부모인 window가 나오는 것

// 객체의 메서드로 함수를 실행할 경우는 일반함수로 실행해야 this가 객체를 찾음
// 메서드 안에서의 함수는 this를 찾기 위해서 arrow 함수가 좋음

const user = {
  name: "tiger",
  age: 27,
  address: "서울",
  grades: [80, 90, 100],
  totalGrades: function () {
    console.log(this.grades);

    function foo() {
      console.log("foo:", this);
    }
    const bar = () => {
      console.log("bar:", this);
    };

    foo(); //전역
    foo.call(user); //user 객체
    bar(); //user 객체
  },
};

user.totalGrades();

// totalGrades의 메소드를 function(){} 으로 쓰면 user 객체가 나오고, 화살표함수로 쓰면 전역인 window 객체가 나옴

// 그래서 객체 안에서 메소드함수를 만들 때는 화살표 함수보다 일반 function을 쓰는 것이 더 좋다.

// 축약형으로 totalGrades(){} 이렇게 써도 됨

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;

//for문으로 구한 제곱식
const pow = (numeric, powerCount) => {
  let pow = 1;
  for (let i = 1; i <= powerCount; i++) {
    pow *= numeric;
  }
  return pow;
};

//배열 생성후 reduce로 구한 제곱식
const powExpression = (numeric, powerCount) => {
  let arr = Array(powerCount)
    .fill(numeric)
    .reduce((prev, acc) => prev * acc, 1);

  return arr;
};

console.log("for문으로 구한 제곱식: ", pow(2, 53));
console.log("배열 생성후 reduce로 구한 제곱식: ", powExpression(2, 53));

// repeat(text: string, repeatCount: number): string;

//for문을 이용하여 반복하기
const repeat = (text, repeatCount) => {
  let result = "";
  for (let i = 0; i < repeatCount; i++) {
    result += text;
  }
  return result;
};

console.log(repeat("hello", 3));

//repeat 함수 쓰기
const repeat2 = (text, repeatCount) => {
  let arr = Array(repeatCount)
    .fill(text)
    .reduce((prev, acc) => prev + acc, "");
  return arr;
};

console.log(repeat2('loveyou',4));
