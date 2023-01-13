import {
  getInputValue,
  getNode,
  getRandom,
  clearContents,
  insertLast,
  isNumericString,
  showAlert,
} from "./lib/index.js";
import { jujeobData } from "./data/data.js";

const submit = getNode("#submit");
const result = getNode(".result");

const clickSubmitHandler = (e) => {
  e.preventDefault();
  let name = getInputValue("#nameField");
  if (!name) {
    showAlert(".alert-error", "이름을 입력하세요!");
    return;
  }
  if (isNumericString(name)) {
    showAlert(".alert-error", "제대로된 이름을 입력하세요!");
    return;
  }

  let list = jujeobData(name);
  let text = list[getRandom(list.length - 1)];
  clearContents(result);
  insertLast(result, text);
};

submit.addEventListener("click", clickSubmitHandler);
