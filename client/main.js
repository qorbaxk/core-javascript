//1. 인풋 밸류값 가져오기
//2. 이벤트 핸들러 연결하기
//3. 이벤트 기본동작 차단하기
//4. 두 수의 합을 더해주기
//5. 화면에 출력하기

let firstInput = getNode("#firstNumber");
let secondInput = getNode("#secondNumber");

let submit = getNode("#done");
let result = getNode(".result");

// 숫자로 안 넣을 경우 예외 처리
const getInputValue = (node) => {
  if (typeof node === "string") node = getNode(node);
  if (node.tagName !== "INPUT")
    refError("getInputValue 함수는 INPUT ELEMENT 만 허용합니다.");
  return node.value;
};

// 덧셈함수
const sum = (valueA, valueB) => valueA + valueB;

// 기존 컨텐츠 지우기
const clearContents = (node) => {
  if (typeof node === "string") node = getNode(node);
  node.textContent = "";
};

const handler = (e) => {
  e.preventDefault();
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);
  clearContents(".result");
  insertLast(result, total);
};

submit.addEventListener("click", handler);
