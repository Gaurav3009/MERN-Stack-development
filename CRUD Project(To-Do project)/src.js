console.log("hello");
// To check whether the html and css is rendered or not
window.addEventListener("load", ()=>{
    todos = JSON.parse(localStorage.getItem("todos")) || []; // array of objects 
    const nameInput = document.querySelector("#name"); // get the input of the name

    const newTodoForm = document.querySelector("#new-todo-form");
    
    // To show that we can access the local storage and access previous values using getItem 
    const name = localStorage.getItem("name") || "";
    nameInput.value = name;
    console.log(name);

    nameInput.addEventListener("change", (e)=>{
        // console.log("changed");
        // console.log(e.target.value);
        localStorage.setItem("name", e.target.value); // storing the title in LocalStorage 
        // JSON.stingyfy --> used to convertany type in string 

    });

    newTodoForm.addEventListener("submit", (e)=>{
        e.preventDefault(); // To prevent the referesh of the entire page
        console.log(e.target.elements[0].value);
        const todo = {
            content : e.target.elements[0].value, // content is the name of the input tag
            createdAt : new Date().getTime()
        };

        todos.push(todo); // pushing the object inside the array of objects
        localStorage.setItem("todos", JSON.stringify(todos));

        e.target.reset();
        displayTodos(); // while submitting 
    });
    displayTodos(); // for loading
    
});

function displayTodos(){
    let todoList = document.querySelector(".todo-list");
    todoList.innerHTML = "";
    todos.forEach((todo)=>{
        // Creating the dynamic element
        let todoItem = document.createElement("div");
        let label = document.createElement("label");
        let input = document.createElement("input");
        let content = document.createElement("content");
        let actions = document.createElement("div");
        let edit = document.createElement("button");
        let delButton = document.createElement("button");
        // Adding class to those elements
        todoItem.classList.add("todo-item");
        input.type = "checkbox";
        content.classList.add("content");
        actions.classList.add("actions");
        edit.classList.add("edit");
        delButton.classList.add("delete");
        // Adding the contents inside the elements
        content.innerHTML = `<input type="text" class="line" name="content" value=${todo.content} readonly>`;
        edit.innerText="Edit";
        delButton.innerText="Delete";
        // Structuring the elements
        todoList.appendChild(todoItem);
        todoItem.appendChild(label);
        todoItem.appendChild(content);
        todoItem.appendChild(actions);
        label.appendChild(input);
        actions.appendChild(edit);
        actions.appendChild(delButton);
        edit.addEventListener("click", ()=>{
            const input = content.querySelector("input");
            input.removeAttribute("readonly");
            input.focus();
            input.addEventListener("blur", (e)=>{
                input.setAttribute("readonly", true);
                todo.content = e.target.value;
                localStorage.setItem("todos", JSON.stringify(todos));
            });
        });
        delButton.addEventListener("click", ()=>{
            todos = todos.filter((t)=> t != todo);
            localStorage.setItem("todos", JSON.stringify(todos));
            displayTodos();
        });
    });
}
