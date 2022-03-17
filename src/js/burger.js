export function burger() {
  let burgerOpen = document.getElementById("nav__open");
  let burgerClose = document.getElementById("nav__close");

  let burgerTl = gsap.timeline({ paused: true });
  burgerTl
    .set(".header__nav-list", { clearProps: "all" })
    .set(".header__nav-item", { clearProps: "all" })
    .to(".header__nav-list", {
      display: "block",
      opacity: 1,
      duration: 0.5,
    })
    .to(".header__nav-item", {
      opacity: 1,
      y: "0",
    });

  burgerOpen.addEventListener("click", () => {
    burgerTl.play();
  });

  burgerClose.addEventListener("click", () => {
    burgerTl.reverse();
  });
}
