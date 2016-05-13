(function () {
    var text = document.getElementById("todoInput");
    var btn = document.getElementById("addBtn");
    var todoList = document.getElementById("todos");
    
    var makeToDoHtml = function (todoString) {
        var element = document.createElement("li");
        element.textContent = todoString;
        return element; };

    todoList.appendChild(makeToDoHtml("Item 1"));
    todoList.appendChild(makeToDoHtml("Item 2"));
    todoList.appendChild(makeToDoHtml("Item 3"));

}) ();  