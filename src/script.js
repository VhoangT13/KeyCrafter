const btnClose = document.querySelector("#btn-close");
const btnOpen = document.querySelector("#btn-open");
const mobileNav = document.querySelector("#mobile-navbar");

btnOpen.addEventListener("click", () => {
  mobileNav.classList.remove("hidden");
  btnOpen.classList.add("hidden");
});

btnClose.addEventListener("click", () => {
  mobileNav.classList.add("hidden");
  btnOpen.classList.remove("hidden");
});
