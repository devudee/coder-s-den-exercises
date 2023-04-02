let rate = 0;
let ratings = document.querySelectorAll(".buttons p");

console.log(ratings);
ratings.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e);
  });
});
