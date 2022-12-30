/* ---------------------------------------------------------------------- */
/* Nullish Coalescing Operator                                            */
/* ---------------------------------------------------------------------- */

let emailAddress;
let receivedEmailAddress;

// if (emailAddress === undefined || emailAddress === null) {
//   receivedEmailAddress = "user@company.io";
// } else {
//   receivedEmailAddress = emailAddress;
// }

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.
receivedEmailAddress =
  emailAddress === undefined || emailAddress === null
    ? "user@company.io"
    : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress = emailAddress ?? "user@company.io";

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '10px';
// const INIT = 0;

// const button = document.querySelector('.button');

// button.style.height = INIT || WIDTH; //10px
// button.style.height = INIT ?? WIDTH; //0
// button.style.height = `${INIT ?? parseInt(WIDTH)}px`;

// console.log(button.style.height);
const boolean = false;


console.log(null || WIDTH); //10px
console.log(null ?? WIDTH); //10px

console.log(undefined || WIDTH); //10px
console.log(undefined ?? WIDTH); //10px


console.log(true || WIDTH); //true
console.log(false || WIDTH); //10px

console.log(true ?? WIDTH); //true
console.log(false ?? WIDTH); //false는 사용자가 정의한 값으로 인식해서 false 반환

console.log('' || WIDTH); //10px
console.log('' ?? WIDTH); //'' 이것도 정의된 값으로 인식

console.log(boolean || WIDTH); //10px
console.log(boolean ?? WIDTH); //false 위에서 정의해줬기 때문에 