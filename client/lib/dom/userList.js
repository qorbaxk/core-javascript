import { insertFirst, insertLast } from "./insert.js";

const createUserCard = ({
  id = "",
  name = "",
  email = "",
  website = "",
} = {}) => {
  // 구조분해할당도 이름을 변경할 수 있다
  // website:site = '' 이렇게하면 website대신에 site로 쓸 수 있음
  // ={} 이것은 그 기본값은 객체로 하겠다 이걸 선언한 것

  return /* html */ `
  <article class="user-card" data-index="user-${id}">
          <h3 class="user-name">${name}</h3>
          <div class="user-resouce-info">
            <div>
              <a class="user-email" href="mailto:${email}"
                >${email}</a
              >
            </div>
            <div>
              <a
                class="user-website"
                href="http://${website}"
                target="_blank"
                rel="noopener noreferer"
                >${website}</a
              >
            </div>
          </div>
          <button class="delete">삭제</button>
        </article>`;
};

const createSpinner = (size =100, loadingMessage = '유저 정보를 가져오는 중...') => {
  return /* html */ `      <figure class="loadingSpinner">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    style="margin: auto; background: #fff; display: block"
    width="${size}"
    height="${size}"
    viewBox="0 0 ${size} ${size}"
    preserveAspectRatio="xMidYMid"
  >
    <g>
      <circle cx="60" cy="50" r="4" fill="#68de51">
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1s"
          values="95;35"
          keyTimes="0;1"
          begin="-0.67s"
        ></animate>
        <animate
          attributeName="fill-opacity"
          repeatCount="indefinite"
          dur="1s"
          values="0;1;1"
          keyTimes="0;0.2;1"
          begin="-0.67s"
        ></animate>
      </circle>
      <circle cx="60" cy="50" r="4" fill="#68de51">
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1s"
          values="95;35"
          keyTimes="0;1"
          begin="-0.33s"
        ></animate>
        <animate
          attributeName="fill-opacity"
          repeatCount="indefinite"
          dur="1s"
          values="0;1;1"
          keyTimes="0;0.2;1"
          begin="-0.33s"
        ></animate>
      </circle>
      <circle cx="60" cy="50" r="4" fill="#68de51">
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1s"
          values="95;35"
          keyTimes="0;1"
          begin="0s"
        ></animate>
        <animate
          attributeName="fill-opacity"
          repeatCount="indefinite"
          dur="1s"
          values="0;1;1"
          keyTimes="0;0.2;1"
          begin="0s"
        ></animate>
      </circle>
    </g>
    <g transform="translate(-15 0)">
      <path
        d="M50 50L20 50A30 30 0 0 0 80 50Z"
        fill="#f5f50e"
        transform="rotate(90 50 50)"
      ></path>
      <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#f5f50e">
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;45 50 50;0 50 50"
          keyTimes="0;0.5;1"
        ></animateTransform>
      </path>
      <path d="M50 50L20 50A30 30 0 0 1 80 50Z" fill="#f5f50e">
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;-45 50 50;0 50 50"
          keyTimes="0;0.5;1"
        ></animateTransform>
      </path>
    </g>
  </svg>
  <figcaption>${loadingMessage}</figcaption>
</figure>`;
};

export const renderSpinner = (node)=>{
  insertLast(node,createSpinner());
}

export const renderUserCard = (node, card) => {
  insertLast(node, createUserCard(card));
};
