/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

// let age = +prompt('나이가 어떻게 되나요?')
let age = 26;

if (age >= 14 && age <= 90) {
  console.log(`당신은 ${age}살 이군요!`);
} else {
  console.log("당신은 탈락되었소");
}

let a = 10;
let b = "";
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && " " && [] && { thisIsFalsy: false };
console.log(whichFalsy); //전부 true라서 마지막 값이 반환됨

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || "" || [2, 3].length || { thisIsTruthy: true };
console.log(whichTruthy);

// 로그인 구현하기

let userName = prompt("이름을 입력하세요");
if (userName?.toUpperCase() === "ADMIN") {
  let pw = prompt("비밀번호를 입력하세요");
  pw?.toUpperCase() === "THEMASTER"
    ? console.log("환영합니다!")
    : pw === "" || pw === null
    ? console.log("취소되었습니다.")
    : console.log("인증에 실패하였습니다.");
} else if (userName.replace(/\s*/g,'') === "" || userName === null) {
  console.log("취소되었습니다.");
} else {
  console.log("난 너가 누군지 모른다.");
}
