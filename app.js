const activityInput = document.getElementById("list-input");
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
const resultText = document.getElementById("result-text");
const list = document.getElementById("list");

function addToList() {
    
    let task = activityInput.value.trim();

    if(!task) {
        resultText.textContent = "Please enter a task to-do!";
        return;
    } else {

        resultText.textContent = "Current Tasks:";

        let listItem = document.createElement("li");
        listItem.classList.add("listItem");
        list.appendChild(listItem);
        listItem.textContent = task;

    
        let completedBtn = document.createElement("button");
        completedBtn.classList.add("completedBtn");
        completedBtn.textContent = "Completed";
        listItem.appendChild(completedBtn);

        completedBtn.addEventListener("click", () => {
            completedBtn.remove();
            listItem.style.textDecoration = "line-through";
        });

    
        let removeBtn = document.createElement("button");
        removeBtn.classList.add("removeBtn");
        removeBtn.textContent = "Remove";
        listItem.appendChild(removeBtn);

        removeBtn.addEventListener("click", () => {
            listItem.remove();
        });

    }

}


function clearList() {

    if(list.children.length === 0) {
        resultText.textContent = "The list is already empty!";
    } else {
        list.innerHTML = "";
        resultText.textContent = "The list has been cleared!";
    }

}

addBtn.addEventListener("click", addToList);

document.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        addToList();
    } 
});

clearBtn.addEventListener("click", clearList);