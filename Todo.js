//////?variables 
const AddBtn = document.querySelector(".addbtn");
const ToDoInput = document.querySelector(".todo-input");
const ToDoList = document.querySelector(".todo-list");
const FliterOption = document.querySelector(".select");


//////?EventListener 
AddBtn.addEventListener("click" ,CreateToDoList);
ToDoList.addEventListener("click" , Compelted_Delete);
FliterOption.addEventListener("click" , FliterToDoLists);


//////?adding ToDo List...
function CreateToDoList(e) {
   e.preventDefault();  ////! ===> create ToDolist without reloading page...
   const NewToDoItem = document.createElement("li")
   NewToDoItem.classList.add("itemlist")
   const ContentItem = 
   `<p id="task">
   ${ToDoInput.value}
   </p>
   <div>
   <button class="trashbtn">
   <i class="fa fa-trash-o"></i>
   </button>
   <button class="compeletebtn">
   <i class="fa fa-edit"></i>
   </button>
   </div>`
   ;
   NewToDoItem.innerHTML = ContentItem;
   ToDoList.appendChild(NewToDoItem);
};


//////?delete / complete ToDo List...
function Compelted_Delete(e) {
   const ClassList = [...e.target.classList]
   const Item = e.target
   if (ClassList[1] === "fa-trash-o") {
      const ToDo = Item.parentElement.parentElement.parentElement;
      ToDo.remove();
   } else if(ClassList[1] === "fa-edit"){
      const ToDo = Item.parentElement.parentElement.parentElement;
      ToDo.classList.toggle("Compeleted");
   }
};


//////?drop down ===> Flitering ToDoLists...
function FliterToDoLists(e) {
   const ToDos = [...ToDoList.childNodes]
   ToDos.forEach((todo) => {
      switch (e.target.value) {
         case "All":
            todo.style.display = "flex"
            break;
         case "Compeleted":
            if (todo.classList.contains("Compeleted")) {
               todo.style.display = "flex"
               console.log(todo.classList.contains("compeleted"));
            } else {
               todo.style.display = "none"
            }
            break;
         case "Uncompeleted":
            if (!todo.classList.contains("Compeleted")) {
               todo.style.display = "flex"
            } else {
               todo.style.display = "none"
            }
            break;
      }
   })
};