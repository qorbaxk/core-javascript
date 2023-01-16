import { typeError } from "../error/typeError.js";
import { isElement } from "../utils/typeOf.js";
import { getNode } from './getNode.js';

// JSDoc
/**
 * @function isElement checkElement
 * @param {HTMLElement} node 
 * @return {disabled} set disabled
 */
export const disableElement = (node) => {
  if(!isElement(node)){
    typeError('disableElement 함수의 인자는 DOM 요소 노드이어야 합니다.')
  }
  node.disabled = true;
};
export const enableElement = (node) => {
  if(!isElement(node)){
    typeError('enableElement 함수의 인자는 DOM 요소 노드이어야 합니다.')
  }
  node.disabled = false;
};

export const visibleElement = (node) =>{
  //보여야함
  if(!isElement(node)){
    typeError('visibleElement 함수의 인자는 DOM 요소 노드이어야 합니다.')
  }
  if(typeof node === 'string'){
    node = getNode(node);
  }
  node.hidden = false;
}

export const invisibleElement = (node) =>{
  //안보여야함
  if(!isElement(node)){
    typeError('visibleElement 함수의 인자는 DOM 요소 노드이어야 합니다.')
  }
  if(typeof node === 'string'){
    node = getNode(node);
  }
  node.hidden = true;
}