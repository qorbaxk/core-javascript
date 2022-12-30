/* ---------------------------------------------------------------------- */
/* For Loop                                                               */
/* ---------------------------------------------------------------------- */

// for(let j=0; j<10; j++){
//   console.log(j);
  
// }

// 2 ~ 10까지의 짝수 출력하기
// for(let z=2; z<=10; z+=2){
//   console.log(z);
  
// }
//continue 사용하기
// for(let z=1; z<=10; z++){
//   if(z%2!==0){
//     continue;
//   }
//   console.log(z);
// }

const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');


// while(i < l) {
  //   console.log(frontEndDev[i]);
  //   i += 1;
  // }
  
  // while 문 → for 문 (순환)
  // - 실행 흐름
  // - 순환 중단 또는 이어서 순환
  //   - 조건이 맞을 경우, 이어서(continue) 순환
  
  let i = 0;
  let l = frontEndDev.length;
  for(i=0; i<l; i++){
    // //   - 조건: SVG, jQuery는 출력하지 마세요.
    // if(frontEndDev[i].includes('SVG')||frontEndDev[i].includes('jQuery')){
    //   continue;
    // }
    //   - 조건: JavaScript 까지만 출력하세요.
    if(frontEndDev[i].includes('JavaScript')) break;
    console.log(frontEndDev[i]);

  }

//   - 조건이 맞을 경우, 순환 중단(break)


//   - 무한 루프 (브레이크)
//   - for 문 (역순환)