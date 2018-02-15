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

