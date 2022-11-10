const openRules = document.querySelector(".game-rules-button");
const closeRules = document.querySelector(".rules-image");
const rules = document.querySelector(".rules");

console.log({ openRules, closeRules, rules });

openRules.addEventListener("click", () => {
  rules.style.transform = "translateY(-100%)";
  console.log(33);
});
