// 클래스 추가
const addClass = (node, className) => {
  if (typeof node === "string") {
    node = getNode(node);
  }
  if (typeof className !== "string") {
    typeError("addClass의 두번째 인자는 문자타입이어야합니다.");
  }
  node.classList.add(className);
};

// 클래스 제거
const removeClass = (node, className) => {
  if (typeof node === "string") {
    node = getNode(node);
  }
  if (!className) {
    node.className = "";
    return;
  }
  if (typeof className !== "string") {
    typeError("removeClass 두번째 인자는 문자타입이어야합니다.");
  }
  node.classList.remove(className);
};

// 클래스 토글
const toggleClass = (node, className) => {
  if (typeof node === "string") {
    node = getNode(node);
  }
  if (typeof className !== "string") {
    typeError("toggleClass 두번째 인자는 문자타입이어야합니다.");
  }

  node.classList.toggle(className);
};

// css 속성값 가져오기
const getCss = (node, prop) => {
  if (typeof node === "string") {
    node = getNode(node);
  }
  if (!(prop in document.body.style)) {
    SyntaxError(
      "getCss 함수의 두번째 인자인 prop은 유효한 css 속성이 아닙니다."
    );
  }
  return getComputedStyle(node)[prop];
};

// css 속성값 부여하기
const setCss = (node, prop, value) => {
  if (typeof node === "string") {
    node = getNode(node);
  }
  if (!(prop in document.body.style)) {
    SyntaxError(
      "setCss 함수의 두번째 인자인 prop은 유효한 css 속성이 아닙니다."
    );
  }
  if (!value) {
    SyntaxError("setCss 함수의 세번째 인자는 필수 값 입니다.");
  }
  node.style[prop] = value;
};

// get, set 합쳐서 만든 css 함수
const css = (node, prop, value) =>
  !value ? getCss(node, prop) : setCss(node, prop, value);
