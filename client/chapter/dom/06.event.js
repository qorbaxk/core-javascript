/* ---------------------------------------------------------------------- */
/* Event Handling                                                         */
/* ---------------------------------------------------------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])

/* 이벤트 추가/제거 --------------------------------------------------------- */

const first = getNode(".first");
const second = getNode(".second");
const ground = getNode(".ground");
const ball = getNode(".ball");

const handler = () => {
  console.log("hit!");
  css(".second", "display", "none");
};

// first.addEventListener('click',handler)

// const bindEvent = (node,type,handler)=>{
//   if(typeof node === 'string'){
//     node = getNode(node);
//   }
//   node.addEventListener(type,handler)
// }

bindEvent(".first", "click", handler);

ground.addEventListener("click", function (e) {
  console.log(e.offsetX, e.offsetY); //그라운드의 좌표
  ball.style.transform = `translate(${e.offsetX - ball.offsetWidth / 2}px,${
    e.offsetY - ball.offsetHeight / 2
  }px)`;
});

// ground.addEventListener("mousemove", function (e) {
//   // console.log(e.offsetX, e.offsetY); 
//   // 클릭하지 않고도 마우스 움직이는대로 좌표

//   let posX = e.offsetX;
//   let posY = e.offsetY;

//   const emotion = /*html*/ `<div class="emotion" style="left:${posX}px; top:${posY}px">😎</div>`

//   insertLast(ground,emotion)
// });
// - addEventListener
// - removeEventListener
