// efeitos ao carregar a página
startEffects = () => {
  // efeitos ao carregar a página
  setTimeout(() => {
    document.querySelector("#header h1").classList.remove("is-loading");
    document.querySelector("#header p").classList.remove("is-loading");
    document.querySelector("#header img").classList.remove("is-loading");

    let menuLinks = document.querySelectorAll("#menu a");
    for (link of menuLinks) {
      link.classList.remove("is-loading-links");
    }
  }, 500);

  // efeito de fade in
  setTimeout(() => {
    document
      .querySelector("#page-background")
      .classList.remove("page-background-is-loading");
  }, 2000);
};

startEffects();

// parallax
window.addEventListener("scroll", () => {
  let body = document.querySelector("#body");
  let bgPositionY = body.style.backgroundPositionY;
  console.log(bgPositionY);
  body.style.backgroundPositionY = -window.scrollY * 0.07 + "px";
});
