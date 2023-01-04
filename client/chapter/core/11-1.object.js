/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */

/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode =
  /* css */
  `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.

let cssMap = {
  position: "fixed",
  "z-index": 10000,
  top: "50%",
  left: "50%",
  width: "60vw",
  "max-width": "800px",
  height: "40vh",
  "min-height": "280px",
  transform: "translate(-50%,-50%)",
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

// authentication = 인증
// authorization = 권한

let authUser = null;

authUser = {
  uid: "user-id-asdA12k3klf",
  name: "tony",
  email: "tony@naver.com",
  isSignIn: true,
  permission: "paid", //free | paid
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
console.log(authUser.uid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn);
console.log(authUser.permission);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
console.log(authUser["uid"]);
console.log(authUser["name"]);
console.log(authUser["email"]);
console.log(authUser["isSignIn"]);
console.log(authUser["permission"]);

// 계산된 프로퍼티 (calcurate property)
let calculateProperty = "phone"; // phone | tel

const createUser = (computedProp = "phone") => {
  return {
    name: "unknown",
    email: "unknown@company.io",
    [computedProp]: "010-1234-5678",
  };
};
const user = createUser("tel");

console.log(user);
// 프로퍼티 포함 여부 확인

Object.prototype.SIGN = true;

for (let key in authUser) {
  //불필요한 추가된 키 (SIGN) 같은거 걸러지고 진짜 갖고있는 것만 나옴
  if (Object.prototype.hasOwnProperty.call(authUser, key)) {
    console.log(key);
  }
}

// 프로퍼티 나열 authUser:객체 key만 모아놓은 배열, value만 모아놓은 배열
let keyArr = Object.keys(authUser);
console.log(keyArr);
let valueArr = Object.values(authUser);
console.log(valueArr);

const getPropertiesList = (object) => Object.keys(object);

// const getPropertiesList = (object) => {
//   let result = [];
//   for (let key in object) {
//     if (Object.prototype.hasOwnProperty.call(authUser, key)) {
//       result.push(key);
//     }
//   }
//   return result;
// };

let result = getPropertiesList(authUser);

console.log(result);

// 프로퍼티 제거 or 삭제

// authUser['uid'] = null //제거
// delete authUser['uid'] //삭제

// 제거하는 유틸 함수
const removeProperty = (object, prop) => {
  object[`${prop}`] = null;
};
// 삭제하는 유틸 함수
const deleteProperty = (object, prop) => {
  delete object[`${prop}`];
};
removeProperty(authUser, "uid");
deleteProperty(authUser, "name");

console.log(authUser);

// 단축 프로퍼티
let name = "선범";
let email = "seonbeom2@euid.dev";
let authorization = "Lv. 99";
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin,
};
console.log(student);

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(object) {
  let arr = Object.keys(object);
  return arr.length ? true : false;
}

console.log(isEmptyObject(authUser));

const empty = {};

console.log(isEmptyObject(empty));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 430,
};

//월급의 총 합을 구해요

//내가 작성한 values로 만드는 법
const getPay = (object) => {
  let sum = Object.values(object).reduce((prev, acc) => prev + acc, 0);
  return sum;
};

console.log(getPay(salaries));

//entries를 사용해서 만들기
let total = 0;

// 기본 for문 구조
// for (let keyValue of Object.entries(salaries)) {
//   let key = keyValue[0];
//   let value = keyValue[1];
//   total += value;
// }

/* -------------------------------------------------------------------------- */
/*                    배열 구조 분해 할당 destructuring assignments              */
/* -------------------------------------------------------------------------- */

for (let [key, value] of Object.entries(salaries)) {
  total += value;
}
console.log(total);

let color = ["#ff0000", "#2b00ff", "#00ff2f"];
// const COLOR_RED = color[0];
// const COLOR_BLUE = color[1];
// const COLOR_GREEN = color[2];

// 나열해서 쓴 것과 똑같다
const [COLOR_RED, COLOR_BLUE, COLOR_GREEN] = color;

/* -------------------------------------------------------------------------- */
/*                                 객체 구조 분해 할당                          */
/* -------------------------------------------------------------------------- */

/* let salaries = {
  John: 100,
  Ann: 160,
  Pete: 430,
}; */

const { John, Ann, Pete } = salaries;

console.log(Ann);
