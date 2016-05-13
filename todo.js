(function () {
    "use strict";
    var text = document.getElementById("todoInput");
    var btn = document.getElementById("addBtn");
    var todoList = document.getElementById("todos");
    
    var makeToDoHtml = function (todoString) {
        var element = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        var span = document.createElement("span");
        span.textContent = todoString;
        element.appendChild(checkbox);
        element.appendChild(span);
        return element; };

    var onChecked = function (event) {
        
    };

    todoList.appendChild(makeToDoHtml("Item 1"));
    todoList.appendChild(makeToDoHtml("Item 2"));
    todoList.appendChild(makeToDoHtml("Item 3"));

}) ();