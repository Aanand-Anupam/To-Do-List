const btn = document.querySelector("button");
const input_box = document.querySelector(".inputBox");
const list_container = document.querySelector(".myList");

function addTask(){
    if(input_box.value === ""){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        list_container.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7" ; 
        li.append(span);
    }
    input_box.value = "";
    saveData();
}

list_container.addEventListener("click" , (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", list_container.innerHTML);
}

function showData(){
    list_container.innerHTML = localStorage.getItem("data");
}
showData();
