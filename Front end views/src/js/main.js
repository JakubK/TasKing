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
      navigationUserPanel.setAttribute("aria-expanded", "true")
    } else {
      navigationUserPanel.setAttribute("aria-expanded", "false") 
    }
  });
}  

function validForm() {
  
  const valid = /^(?=.*\d)(?=.*[a-z])(?=.*[\!\@\#\$\%\^\&\*\(\)\_\+\-\=])(?=.*[A-Z])(?!.*\s).{8,}$/,
        inputWrapper = document.querySelector("#password-group"),
        input = document.querySelector("#password");
        warning = document.createElement("p");

  warning.setAttribute("class", "warning");
  warning.innerText = "Password is incorrect";

  document.querySelector("#login-form .btn-form").addEventListener("click", () => {
    let password = document.querySelector("#password").value;

    if (valid.test(password)) {
      input.classList.remove("warning");
      if (document.querySelector(".warning")) {
        inputWrapper.removeChild(warning);
      } else {}

    } else {
      inputWrapper.appendChild(warning);
      input.classList.add("warning");
    }
  });

} validForm();

