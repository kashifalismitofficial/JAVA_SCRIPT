let inputTodo = document.querySelector(`#inputTodo`);
let ol = document.querySelector(`ul`);
let arr = [];

function runTodo() {
    ol.innerHTML = "";
    arr.push(inputTodo.value);
    inputTodo.value = "";
    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        ol.innerHTML += `<li>${arr[i]}
        <span class="action"><button onclick="deletTodo(${i})">Delete</button> <button onclick=
        "editTodo(${i})">Edit</button></span>
        </li>`
    }



}


function deletTodo(index) {
    ol.innerHTML = "";
    console.log(`delete todo`, index)
    arr.splice(index, 1)

    for (let i = 0; i < arr.length; i++) {
        ol.innerHTML += `<li>${arr[i]}
        <span class="action"><button onclick="deletTodo(${i})">Delete</button> <button onclick=
        "editTodo(${i})">Edit</button></span>
        </li>`

    }
}

function editTodo(index) {
    ol.innerHTML = ""
    console.log(`edit todo`, index);
    let updatedvalue = prompt("Enter Updated Value");
    arr.splice(index, 1, updatedvalue)


    for (let i = 0; i < arr.length; i++) {
        ol.innerHTML += `<li>${arr[i]}
        <span class="action"><button  onclick="deletTodo(${i})">Delete</button> <button class="btn2" onclick=
        "editTodo(${i})">Edit</button></span>
        </li>`

    }
}






