


const active = () => {
  let checkbox = document.querySelector(".task-item #checkbox1").checked,
      taskItem = document.querySelector(".task-description");


  if (checkbox == true) {
    taskItem.classList.add("checked");
  } else {
    taskItem.classList.remove("checked");
  }
}

document.querySelector(".task-item input").addEventListener("click", active);


function sortPanel() {
  const sortButton = document.querySelector(".board-settings .fa-sort"),
        sortList = document.querySelector(".board-settings .fa-sort .sort-list"),
        aria = sortButton.getAttribute("aria-expanded");

  sortButton.addEventListener("click", () => {
    sortButton.classList.toggle("active");
    sortList.classList.toggle("active");

    if (sortList.classList.contains("active")) {
      sortButton.setAttribute("aria-expanded", "true")
    } else {
      sortButton.setAttribute("aria-expanded", "false") 
    }
  });
}  sortPanel();