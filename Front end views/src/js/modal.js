const modal = () => {
  const overlay = document.querySelector(".overlay");
  const modal = document.querySelector(".modal");
  const modalButton = document.querySelector(".fa-user-plus");
  const exitButton = document.querySelector("#close-modal");``

  modalButton.addEventListener("click", () => {
    overlay.style.display = "block";
    overlay.style.animation = "show 0.4s ease-in forwards";
    modal.style.animation = "modal-show 0.4s ease-in forwards";
    modal.style.display = "block";
    modalButton.setAttribute("aria-expanded", "true");
    exitButton.focus();
  });
  
  const close = () => {
    overlay.style.animation = "hide 0.4s ease-in forwards";
    modal.style.animation = "modal-hide 0.4s ease-in forwards";

    const hide = () => {
      overlay.style.display = "none";
      modal.style.display = "none";
      modal.removeEventListener('animationend', hide);
    }
    
    modal.addEventListener('animationend', hide);
    exitButton.blur();
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
}; modal();



