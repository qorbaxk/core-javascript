import { getNode } from "../dom/getNode.js";

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

const delayP = (
  shouldReject = false,
  timeout = 1000,
  errorMessage = "알 수 없는 오류가 발생했습니다.",
  data = "성공했습니다."
) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout);
  });
};

delayP(false, 1000, "오류가 발생했다!").then((res) => {
  console.log(res);
});

// delayP()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log(delayP());
