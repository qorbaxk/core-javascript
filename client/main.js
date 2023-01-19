/* global gasp */

import {
  insertLast,
  delayP,
  butter,
  renderUserCard,
  getNode as $,
  changeColor,
  renderSpinner,
  renderError,
  attr,
} from "./lib/index.js";

const userCardContainer = $(".user-card-inner");

const rendingUserList = async () => {
  renderSpinner(userCardContainer);
  try {
    await delayP(300);
    $(".loadingSpinner").remove();

    let response = await butter.get(
      "http://localhost:3000/users"
    );
    let userData = response.data;

    userData.forEach((value) => {
      renderUserCard(userCardContainer, value);
    });

    changeColor(".user-card");

    gsap.to(gsap.utils.toArray(".user-card"), {
      x: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.2,
    });
  } catch (err) {
    console.log(err);
    renderError(userCardContainer);
  }
};

rendingUserList();

const deleteHandler = (e) => {
  let deleteBtn = e.target.closest("button");
  let article = e.target.closest("article");

  if (!deleteBtn || !article) return;

  let id = attr(article,'data-index').slice(5)
  butter.delete(`http://localhost:3000/users/${id}`).then(()=>{
    userCardContainer.innerHTML = '';
    rendingUserList()
  })
};

userCardContainer.addEventListener("click", deleteHandler);
