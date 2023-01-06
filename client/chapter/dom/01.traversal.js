/* ---------------------------------------------------------------------- */
/* DOM traversal                                                          */
/* ---------------------------------------------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// 제일 많이 씀
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

// let first = document.querySelector(".first");
// console.log(first);
let span = document.querySelectorAll("span");

// let first = span[0];
// let second = span[1];
// console.log(first);

// 이렇게 썼던 것 처럼
// for (let keyValue of Object.entries(object)) {
//   let key = keyValue[0];
//   let value = keyValue[1];
// }
// for (let [key,value] of Object.entries(object)) {
// }

// 구조분해할당으로 이렇게 쓸 수 있다.
let [first, second] = document.querySelectorAll("span");
// console.log(second);

// const getNode = (node) =>{
//   if(typeof node !== 'string'){
//     throw new Error('getNode 함수의 인자는 문자 타입이어야 합니다.');
//   }
//   return document.querySelector(node)
// }
console.log(getNode(".first"));
/* 문서 대상 확인 */
// - matches
//  선택자 안에 class || id 를 가지고 있는 대상이있어?
console.log(getNode(".first").matches(".first"));

// - contains
// 선택자의 자식들 중에 해당 element가 있어?
console.log(getNode("h1").contains(getNode(".first")));
