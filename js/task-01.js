const listItemEl = document.querySelectorAll(".item");
console.log(`Number of item: ${listItemEl}`);

const navTitleEl = document.querySelector(".item");
const firstTitleEl = navTitleEl.firstElementChild.textContent;
const lastTitleEl = navTitleEl.lastElementChild;

categories.forEach((el) => {
  alert(`Number of categories: ${el.firstElementChild.textContent}`);
});
