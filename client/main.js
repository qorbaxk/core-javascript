import {
  getInputValue,
  getNode,
  getRandom,
  clearContents,
  insertLast,
  isNumericString,
  showAlert,
  clipboard,
  addClass,
  removeClass,
} from "./lib/index.js";
import { jujeobData } from "./data/data.js";

const submit = getNode("#submit");
const result = getNode(".result");

const clickSubmitHandler = (e) => {
  e.preventDefault();
  let name = getInputValue("#nameField");
  if (!name) {
    showAlert(".alert-error", "이름을 입력하세요!", 2000);
    // GSAP을 쓰면 해결될 편한 문제
    gsap.fromTo(result,0.01,{x:-5},{x:5, clearProps:'x', repeat:20})
    // addClass(result, "shake");
    // setTimeout(() => {
    //   removeClass(result, "shake");
    // },1000);

    return;
  }
  if (isNumericString(name)) {
    showAlert(".alert-error", "제대로된 이름을 입력하세요!", 2000);
    return;
  }

  let list = jujeobData(name);
  let text = list[getRandom(list.length - 1)];
  clearContents(result);
  insertLast(result, text);
};

const clickCopyHandler = () => {
  // e.preventDefault();
  let text = result.textContent;
  clipboard(text).then(() => {
    showAlert(".alert-success", "클립보드 복사가 완료됐습니다", 2000);
  });
};

submit.addEventListener("click", clickSubmitHandler);
result.addEventListener("click", clickCopyHandler);
