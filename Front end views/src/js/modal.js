function modal() {
  const overlay = document.querySelector(".overlay");
  const modal = document.querySelector(".modal");
  const modalButton = document.querySelector(".fa-user-plus");
  const exitButton = document.querySelector("#close-modal");


  modalButton.addEventListener("click", () => {
    overlay.style.display = "block";
    modal.classList.add("open");
    modalButton.setAttribute("aria-expanded", "true");
  });

  function close() {
    overlay.style.display = "none";
    modal.classList.remove("open");
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

