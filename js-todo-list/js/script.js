const toastSuccessDOM = document.querySelector("#liveToast.success");
const toastErrorDOM = document.querySelector("#liveToast.error");

const newElement = (event) => {
  event.preventDefault();
  let taskInputDOM = document.querySelector("#task");
  if (taskInputDOM.value.length != 0) {
    let taskListDOM = document.querySelector("#list");
    let addTaskLiDOM = document.createElement("li");
    addTaskLiDOM.innerHTML = `${taskInputDOM.value} <i class="bi bi-x-lg float-right btn">`;
    addTaskLiDOM.querySelector("i").addEventListener("click", removeElement);
    taskListDOM.append(addTaskLiDOM);
    const toast = new bootstrap.Toast(toastSuccessDOM);
    toast.show();
    taskInputDOM.value = "";
  } else {
    const toast = new bootstrap.Toast(toastErrorDOM);
    toast.show();
  }
};

let addTaskDOM = document.querySelector("#liveToastBtn");
addTaskDOM.addEventListener("submit", newElement);

let ulLiIDOM = document.getElementsByTagName("i");
let ulLiDOM = document.getElementsByTagName("li");

function removeElement() {
  this.parentElement.remove();
}

for (let index = 0; index < ulLiIDOM.length; index++) {
  ulLiIDOM[index].addEventListener("click", removeElement);
}


const markedDone = () => {
  console.log("çalıştı")
    
}

for (let index = 0; index < ulLiDOM.length; index++) {
    ulLiDOM[index].addEventListener("click", markedDone);
  }


