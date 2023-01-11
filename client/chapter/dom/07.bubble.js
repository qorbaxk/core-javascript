/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const visual = getNode(".visual");
const news = getNode(".news");
const desc = getNode(".desc");

visual.addEventListener("click", (e) => {
  let elem = e.currentTarget;
  // console.log('target:',e.target); // 내가 클릭한 대상 (마우스가 제일 처음 만나는애)
  // console.log('currentTarget:',e.currentTarget); // 이벤트가 걸린 대상
  // console.log(this===e.currentTarget);
  // 왜 this를 안쓰고 e.currentTarget을 쓰느냐?
  // 화살표함수는 this를 잡지못하기때문에 e.currentTarget을 쓴다.
  console.log(e.currentTarget);
  console.log("%c visual", "background:dodgerblue");

  css(".pop", "display", "block");
});

getNode(".pop").addEventListener("click", (e) => {
  e.stopPropagation(); // 이렇게해야 닫힘
  css(".pop", "display", "none");
  //none이 됐다가 순식간에 다시 block이 되기 때문에 적용되지 않음
});

/* news.addEventListener('click',()=>{
  console.log('%c news','background:orange');
})
desc.addEventListener('click',(e)=>{
  e.stopPropagation()
  console.log('%c desc','background:hotpink');
}) */

/* 캡처링 ----------------------------------------------------------------- */
