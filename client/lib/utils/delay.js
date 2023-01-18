import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./typeOf.js";

const first = getNode(".first");

const delay = (callback, timeout = 1000) => {
  setTimeout(callback, timeout);
};

delay(() => {
  first.style.top = "-100px";
  delay(() => {
    first.style.transform = "rotate(360deg)";
    delay(() => {
      first.style.top = "0px";
    });
  });
});

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: "성공",
  errorMessage: "알 수 없는 오류가 발생했습니다.",
};

export const delayP = (options = {}) => {
  let config = { ...defaultOptions };
  // 앞에있는걸 뒤에있는걸로 덮어씀

  if (isNumber(options)) {
    config.timeout = options;
  }
  if (isObject(options)) {
    config = { ...config, ...options };
  }

  const { shouldReject, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout);
  });
};

// delayP(3000).then((res) => {
//   console.log(res);
// });

// delayP()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log(delayP());

/* -------------------------------------------------------------------------- */
/*                                 async await                                */
/* -------------------------------------------------------------------------- */

// async는 일반함수를 promise를 반환하는 함수로 만든다.
// await은 1. promise가 반환하는  result 가져오기
//         2. 코드 실행 흐름 제어
const delayA = async () => {
  return "완료";
};

let result = await delayA();

// console.log(result);

// async function 라면끓이기() {
//   try {
//     await delayP(1500);
//     first.style.top = "-100px";

//     await delayP(1500);
//     first.style.transform = "rotate(360deg)";

//     await delayP(1500);
//     first.style.top = "0px";

//     await delayP(1500);
//     console.log("계란넣기");

//     // throw new Error("계란 껍질이 들어가버렸다!");

//     await delayP(1500);
//     console.log("그릇에담기");
//   } catch (err) {
//     console.log(err);
//   }
// }

// 라면끓이기();
