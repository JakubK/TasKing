
function editElement() {
  const tasksList = document.querySelector(".tasks-list");
  const checkbox = document.querySelector(".task-item #checkbox1").checked;
  const taskDescription = document.querySelectorAll(".task-item .task-description");
  const taskEditWrapper = document.querySelectorAll(".task-item-edit");
  const itemList = document.querySelectorAll(".task-item-box");
  const input = document.querySelectorAll(".task-item .task-input");
  const cancelButton = document.querySelectorAll(".task-item .btn-decline");
  const editButton = document.querySelectorAll(".task-item .btn-add");
  const deleteButton = document.querySelectorAll(".task-item .btn-delete");

  for (let i = 0; i < itemList.length; i++) {
    itemList[i].addEventListener("click", () => {
      taskEditWrapper[i].classList.add("visible");
      itemList[i].classList.add("hidden");
    });

    cancelButton[i].addEventListener("click", () => {
      itemList[i].classList.remove("hidden");
      taskEditWrapper[i].classList.remove("visible");
    });

    input[i].value = taskDescription[i].innerHTML;

    editButton[i].addEventListener("click", () => {
      taskDescription[i] .innerHTML = input[i].value;
      itemList[i].classList.remove("hidden");
      taskEditWrapper[i].classList.remove("visible");
    });

    deleteButton[i].addEventListener("click", () => {
      tasksList.removeChild(tasksList.childNodes[i]);
    });
  }
} editElement();

function addElement() {
  const addButton = document.querySelector(".add-task .btn-task-item");
  const cancelButton = document.querySelector("#cancel-task");
  const confirmButton = document.querySelector("#add-task");
  const addTask = document.querySelector(".task-item-add");
  const input = document.querySelector(".task-item-add .task-input");
  
  addButton.addEventListener("click", () => {
    addButton.classList.add("hidden");
    addTask.classList.add("visible");

    if (addButton.classList.contains("hidden")) {
      addButton.setAttribute("aria-expanded", "true");
    } else {
      addButton.setAttribute("aria-expanded", "false") ;
    }
  });

  cancelButton.addEventListener("click", () => {
    addButton.classList.remove("hidden");
    addTask.classList.remove("visible");

    if (addButton.classList.contains("hidden")) {
      addButton.setAttribute("aria-expanded", "true");
    } else {
      addButton.setAttribute("aria-expanded", "false") ;
    }
  });

  confirmButton.addEventListener("click", () => {
    addButton.classList.remove("hidden");
    addTask.classList.remove("visible");

    const newTask = document.createElement("li");

    document.querySelector(".tasks-list").appendChild(newTask).innerHTML = '<li class="task-item"> <div class="task-item-box"> <input type="checkbox" id="checkbox1"> <label for="checkbox1"> <span class="fa fa-check" aria-hidden="true"></span> </label> <p class="task-description">'+ input.value +'</p> </div> <div class="task-item-edit"> <div class="task-item-edit-input"> <input class="task-input" type="text"> </div> <div class="task-item-edit-buttons"> <button class="btn-task-item btn-add">Zapisz</button> <button class="btn-task-item btn-decline">Anuluj</button></div></div></li>';
    input.value = "";
  });

} addElement();

function sortPanel() {
  const sortButton = document.querySelector(".board-settings .fa-sort");
  const sortList = document.querySelector(".board-settings .fa-sort .sort-list");
  const aria = sortButton.getAttribute("aria-expanded");

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