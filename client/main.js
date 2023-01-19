import { getNode, loadStorage, saveStorage } from "./lib/index.js";

const textField = getNode("#textField");
const deleteButton = getNode('input[value="삭제"]');

// 데이터가 계속 살아있을 수 있도록 
loadStorage('area').then((res)=>{
  textField.value = res;
})

// textField에 받은 값을 storage에 저장
const inputHandler = () => {
  saveStorage("area", textField.value);
};

textField.addEventListener("input", inputHandler);
