const validForm = () => {
  const valid = /^(?=.*\d)(?=.*[a-z])(?=.*[\!\@\#\$\%\^\&\*\(\)\_\+\-\=])(?=.*[A-Z])(?!.*\s).{8,}$/;
  const inputWrapper = document.querySelector("#password-group");
  const input = document.querySelector("#password");
  const warning = document.createElement("p");

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

}; validForm();

