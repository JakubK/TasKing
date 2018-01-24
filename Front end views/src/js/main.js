/*
const navigationPanel = () => {
  const navigationUserPanel = document.querySelector(".navigation-user-panel"),
        icon = document.querySelector(".navigation-user-panel .fa")

  navigationUserPanel.addEventListener("click", () => {
    icon.classList.toggle("active");
  });
} */

function navigationPanel() {
  const navigationUserPanel = document.querySelector(".navigation-user-panel"),
        icon = document.querySelector(".navigation-user-panel .fa"),
        list = document.querySelector(".navigation-user-panel .navigation-user-settings"),
        aria = list.getAttribute("aria-expanded");

  navigationUserPanel.addEventListener("click", () => {
    icon.classList.toggle("active");
    list.classList.toggle("active");

    if (list.classList.contains("active")) {
      list.setAttribute("aria-expanded", "true")
    } else {
      list.setAttribute("aria-expanded", "false") 
    }

  });
} navigationPanel(); 