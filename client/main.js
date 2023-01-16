import { diceAnimation, getNode } from "./lib/index.js";

// [주사위 굴리기]
// 1. dice 애니메이션 불러오기
// 2. bindEvent 유틸 함수 만들기
// 3. playHandler 함수 만들고 토글로 애니메이션 제어하기
// 4. 변수 보호를 위한 클로저 + IIFE 사용하기

// diceAnimation() 을 주기적으로 호출해줘야 주사위 굴릴때마다 돌아감

const playBtn = getNode(".buttonGroup > button:nth-child(1)");
const recordBtn = getNode(".buttonGroup > button:nth-child(2)");

 // IIFE 패턴
const playHandler = (() => {
  let isRolling = false;
  let stopAnimation;

  return () => {
    if (!isRolling) {
      stopAnimation = setInterval(diceAnimation, 200);
      recordBtn.disabled = true;
    } else {
      clearInterval(stopAnimation);
      recordBtn.disabled = false;
    }

    isRolling = !isRolling;
  };
})()

playBtn.addEventListener("click", playHandler);
