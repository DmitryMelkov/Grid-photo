export function search() {
  let searchOpen = document.getElementById("search__open");
  let searchClose = document.getElementById("search__close");

  let searchTl = gsap.timeline({ paused: true });
  searchTl
    // .set(".search__btn", { clearProps: "all" })
    .fromTo(
      ".search__btn",
      {
        display: "none",
        opacity: 0,
      },
      {
        display: "flex",
        opacity: 1,
        duration: 0.5,
      }
    )
    .from(".search__btn-input", {
      opacity: 0,
      x: "100px",
    })
    .from("#search__close", {
      opacity: 0,
      x: "100px",
    });

  searchOpen.addEventListener("click", () => {
    searchTl.play();
  });

  searchClose.addEventListener("click", () => {
    searchTl.reverse();
  });
}
