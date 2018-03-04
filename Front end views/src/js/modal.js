function modal() {
  const overlay = document.querySelector(".overlay");
  const modal = document.querySelector(".modal");
  const modalButton = document.querySelector(".fa-user-plus");
  const exitButton = document.querySelector("#close-modal");


  modalButton.addEventListener("click", () => {
    overlay.style.display = "block";
    overlay.style.animation = "show 0.25s linear forwards";
    modal.style.animation = "modal-show 0.5s linear forwards";
    modal.classList.add("open");
    modalButton.setAttribute("aria-expanded", "true");
  });

  function close() {
    overlay.style.animation = "hide 0.25s linear forwards";
    modal.style.animation = "modal-hide 0.25s linear forwards";

    overlay.addEventListener("animationend", () => {
      overlay.style.display = "none";
    });

    modalButton.setAttribute("aria-expanded", "false");
  };

  overlay.addEventListener("click", () => {
    close();
  });

  exitButton.addEventListener("click", () => {
    close();
  })

  document.onkeydown = (e) => {
    e = e || window.event;
    if (e.keyCode == 27) {
      close();
    }
  };

} modal();

