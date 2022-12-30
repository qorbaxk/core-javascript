/* ---------------------------------------------------------------------- */
/* Do While Loop                                                          */
/* ---------------------------------------------------------------------- */

// let i = 10;
// do {
//   console.log("최초 실행");
//   i++;
// } while (i < 5);

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// let count = prompt('몇 번 순환할까요?','');
// do{
//   console.log(count);
//   count--;
  
// }while(count)

// do{
//   console.log('처음값',count);
//   if(count<=0 || !count){
//     console.log('최초실행');
//     break;
    
//   }
//   count--;
//   console.log(count);
// }while(count)


// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정


let first = document.querySelector('.first');
let second = document.querySelector('.second');
// console.log(first.nextSibling); //first에게 너의 다음 형제가 누구야? 하고 묻는 것
//하지만 text 로 반환되는데, 그 이유는 span 뒤의 빈칸 공간을 형제로 인식하는 것
// console.log(first.nextSibling.nextSibling); 
//그래서 두번 해야 원하던 second가 나옴
//하지만, 중간에 주석이 껴있다면? 주석이 출력됨

//그래서 엘리먼트 요소를 찾을 때 까지 루프를 돌리는 것

const next = (node) =>{
  do{
    node = node.nextSibling;
  }while(node.nodeType!== document.ELEMENT_NODE);
  return node;
}
// let second = next(first);

// 앞쪽 엘리먼트를 찾는 함수
const prev = (node) =>{
  do{
    node = node.previousSibling;
  }while(node.nodeType!==document.ELEMENT_NODE);
  return node;
}
console.log(prev(second));

// console.log(second);
