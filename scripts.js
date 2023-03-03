window.onload = function () {
  const clickIcon = document.querySelector("#hamburger");
  const menu = document.querySelector(".navbar__links");

  clickIcon.src = "./images/icon-hamburger.svg";

  clickIcon.addEventListener("click", function (event) {
    menu.classList.toggle("navbar__links--show");
    menu.classList.toggle("navbar__links--hidden");

    event.stopPropagation();
  });

  document.documentElement.addEventListener("click", function () {
    if (menu.classList.contains("navbar__links--show")) {
      menu.classList.toggle("navbar__links--show");
      menu.classList.toggle("navbar__links--hidden");
    }
  });
};
