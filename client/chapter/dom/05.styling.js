/* ---------------------------------------------------------------------- */
/* DOM Styling                                                            */
/* ---------------------------------------------------------------------- */

const first = getNode(".first");

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// first.classList.add('hello')
// first.classList.remove("hello");
// console.log(first.classList.contains("hello"));

// 클래스 추가
// const addClass = (node, className) => {
//   if (typeof node === "string") {
//     node = getNode(node);
//   }
//   if (typeof className !== "string") {
//     typeError("addClass의 두번째 인자는 문자타입이어야합니다.");
//   }
//   node.classList.add(className);
// };

// // 클래스 제거
// const removeClass = (node, className) => {
//   if (typeof node === "string") {
//     node = getNode(node);
//   }
//   // 지정해준 값이 없으면 전체 클래스 다 지우기
//   if (!className) {
//     node.className = "";
//     return;
//   }
//   if (typeof className !== "string") {
//     typeError("removeClass 두번째 인자는 문자타입이어야합니다.");
//   }
//   node.classList.remove(className);
// };

// // 토글 클래스
// const toggleClass = (node, className) => {
//   if (typeof node === "string") {
//     node = getNode(node);
//   }
//   if (typeof className !== "string") {
//     typeError("toggleClass 두번째 인자는 문자타입이어야합니다.");
//   }

//   node.classList.toggle(className);
// };

addClass(".second", "is-active");
removeClass(".second", "is-active");
/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

first.style.backgroundColor = "red";
first.style.transform = "rotate(360deg)";

console.log(first.style.fontSize);
/* 계산된 스타일 읽기 ------------------------------------------------------- */

let size = getComputedStyle(first).fontSize;
console.log(size);

// const getCss = (node, prop) => {
//   if (typeof node === "string") {
//     node = getNode(node);
//   }
//   // 카멜케이스로 변경해보기
//   // prop = prop
//   //   .split("-")
//   //   .map((v) => v.slice(0, 1).toUpperCase() + v.slice(1))
//   //   .join("");
//   // prop = prop.slice(0, 1).toLowerCase() + prop.slice(1);
//   // console.log(prop);
//   if (!(prop in document.body.style)) {
//     SyntaxError(
//       "getCss 함수의 두번째 인자인 prop은 유효한 css 속성이 아닙니다."
//     );
//   }
//   return getComputedStyle(node)[prop];
// };

console.log(getCss(".first", "font-size"));

// const setCss = (node, prop, value) => {
//   if (typeof node === "string") {
//     node = getNode(node);
//   }
//   if (!(prop in document.body.style)) {
//     SyntaxError(
//       "setCss 함수의 두번째 인자인 prop은 유효한 css 속성이 아닙니다."
//     );
//   }
//   if (!value) {
//     SyntaxError("setCss 함수의 세번째 인자는 필수 값 입니다.");
//   }
//   node.style[prop] = value;
// };

setCss(".second", "color", "blue");

// const css = (node, prop, value) => {
//   return value ? setCss(node, prop, value) : getCss(node, prop);
// };

css(".first", "font-size", "100px");
console.log(css(".first", "font-size"));

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`
