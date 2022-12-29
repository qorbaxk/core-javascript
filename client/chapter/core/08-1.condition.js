/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = "yes";
// 영화 볼거니?
let goingToWatchMovie = "no";

// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자
// let a = prompt("영화 아바타 봤나요? 봤으면 yes 안봤으면 no를 입력하세요");
// if (a === didWatchMovie) {
//   console.log("아바타 봤어요");
// } else {
//   let b = prompt(
//     "안봤다면, 볼 예정인가요? 볼 예정이면 yes 아니면 no를 입력하세요"
//   );
//   if (b === goingToWatchMovie) {
//     console.log("안볼겁니다");
//   } else {
//     console.log("볼게요");
//   }
// }

//선생님 답
// if(didWatchMovie.includes('yes')){
//   console.log('그거 재밌더라?');
// }else if(goingToWatchMovie === 'yes'){
//   console.log('너무 설렌다');
// }else{
//   console.log('음 별루');
// }




// 멀티 조건부 연산자 식
let answer =
  prompt("영화 아바타 봤나요? 봤으면 yes 안봤으면 no를 입력하세요") ===
  didWatchMovie
    ? "아바타를 봤습니다."
    : prompt(
        "안봤다면, 볼 예정인가요? 볼 예정이면 yes 아니면 no를 입력하세요"
      ) === didWatchMovie
    ? "안봤지만, 아바타를 볼 예정입니다."
    : "안 볼 예정입니다.";
console.log(answer);
