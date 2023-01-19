/* global gasp */

import {
  insertLast,
  delayP,
  butter,
  renderUserCard,
  getNode,
  changeColor,
  renderSpinner,
} from "./lib/index.js";

const userCardContainer = getNode(".user-card-inner");

const rendingUserList = async () => {
  renderSpinner(userCardContainer);
  try {
    await delayP(1000)
    getNode('.loadingSpinner').remove();

    let response = await butter.get(
      "https://jsonplaceholder.typicode.com/users"
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
  }
};

rendingUserList();
