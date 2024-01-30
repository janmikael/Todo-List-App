const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//if click add none text
function addTask() {
  if (inputBox.value === "") {
    alert("You must write Someting!");

    //if you input  will add to li
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    //creat x icon
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  //clear inputbox after add
  inputBox.value = "";
  //call every input to save
  saveData();
}

//function on tast list check uncheck
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

//store data on local browser
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

//to display saved data on local
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
