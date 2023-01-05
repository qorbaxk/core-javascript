/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */

let message = "Less is more.";

for (let key of message) {
  console.log(key);
}

// length 프로퍼티
let stringTotalLength = message.length;
console.log("stringTotalLength", stringTotalLength);

// 특정 인덱스의 글자 추출
let extractCharacter = message[0];
console.log("extractCharacter", extractCharacter);

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;
/* 
message[3] = 'i'
console.log(message); // 안됨

message = 'more' + message[5];
console.log(message); // 됨 */

// 부분 문자열 추출
let slice = message.slice(8, -1);
console.log("slice", slice);
// 이만큼만 짤라서 나가라

let subString = message.substring(-1, 5);
console.log("subString", subString);
// 슬라이스랑 다르게 앞에도 음수 가능

// let subStr = message.sub;

// 문자열 포함 여부 확인
let indexOf = message.indexOf("s");
console.log("indexOf", indexOf);
// i 문자의 위치 인덱스를 반환 없으면 -1을 반환
// 해당문자가 여러개있으면 제일 앞에 것을 반환

let lastIndexOf = message.lastIndexOf("s");
console.log("lastIndexOf", lastIndexOf);
// 뒤에서부터의 인덱스 반환

let includes = message.includes("s");
console.log("includes", includes);

let startsWith = message.startsWith("M");
console.log("startsWith", startsWith);
// 첫글자에 이 문자가 있어?

let endsWith = message.endsWith(".");
console.log("endsWith", endsWith);
// 마지막 글자에 이 문자가 있어?

// 공백 잘라내기
// let trimLeft = message.trimLeft();
// let trimRight = message.trimRight();
let trim = message.trim();
console.log("trim", trim);
// 띄어쓰기는 안 없어짐

// 텍스트 반복
let repeat = message.repeat(3);
console.log("repeat", repeat);

// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log("toLowerCase", toLowerCase);
let toUpperCase = message.toUpperCase();
console.log("toUpperCase", toUpperCase);

// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, "")
      .toUpperCase()
  );
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}

console.log(toCamelCase("less-is-more")); //lessIsMore
console.log(toPascalCase("less-is-more")); //LessIsMore
