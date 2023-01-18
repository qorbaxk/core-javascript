import { xhrData, insertLast, xhrPromise, butter } from "./lib/index.js";

// xhrData.get(
//   "https://jsonplaceholder.typicode.com/users/1",
//   (res) => {
//     insertLast("body", JSON.stringify(res));
//   },
//   (err) => {
//     insertLast("body", "데이터 로딩에 실패했습니다.");
//   }
// );

// xhrPromise
//   .get("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => {
//     insertLast(document.body, JSON.stringify(res));
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const render = async () => {
  let response = await butter.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  console.log(response);
};

render()
