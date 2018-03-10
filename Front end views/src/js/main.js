
const navigationPanel = () => {
  const navigationUserPanel = document.querySelector(".navigation-user-panel");
  const icon = document.querySelector(".navigation-user-panel .fa");
  const list = document.querySelector(".navigation-user-panel .navigation-user-settings");
  const aria = list.getAttribute("aria-expanded");

  navigationUserPanel.addEventListener("click", () => {
    icon.classList.toggle("active");
    list.classList.toggle("active");

    if (list.classList.contains("active")) {
      navigationUserPanel.setAttribute("aria-expanded", "true")
    } else {
      navigationUserPanel.setAttribute("aria-expanded", "false") 
    }
  });
};  navigationPanel();

const navigationMenu = () => {
  const button = document.querySelector(".navigation-button");
  const menu = document.querySelector(".navigation-menu");

  button.addEventListener("click", () => {
    button.classList.toggle("active");
    menu.classList.toggle("active");

    if (button.classList.contains("active")) {
      menu.setAttribute("aria-expanded", "true")
    } else {
      menu.setAttribute("aria-expanded", "false") 
    }
  });
}; navigationMenu();

