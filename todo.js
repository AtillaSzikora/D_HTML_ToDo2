(function () {
    "use strict";
    var text = document.getElementById("todoInput");
    var btn = document.getElementById("addBtn");
    var todoList = document.getElementById("todos");
    
    var makeToDoHtml = function (todoString, checkHandler) {
        var element = document.createElement("li");
        var checkbox = document.createElement("input");
        var span = document.createElement("span");

        checkbox.type = "checkbox";
        span.textContent = todoString;
        element.appendChild(checkbox);
        element.appendChild(span);
        checkbox.addEventListener("click", checkHandler);

        return element;
    };

    var onChecked = function (event) {
        var target = event.target;
        if (target.checked) {
            target.parentElement.classList.add("done"); }
        else {
            target.parentElement.classList.remove("done"); }
    };

    var addButtonClicked = function (event) {
        var todoText = text.value;
        todoList.appendChild(makeToDoHtml(todoText, onChecked));
        text.value = "";
        text.focus();
    };

    btn.addEventListener("click", addButtonClicked);
    function inputKeyup(event) {
        if (event.keyCode == 13) {
            btn.click();}
    }

    text.addEventListener("keyup", inputKeyup);
    text.focus();

    todoList.appendChild(makeToDoHtml("Item 1", onChecked));
    todoList.appendChild(makeToDoHtml("Item 2", onChecked));
    todoList.appendChild(makeToDoHtml("Item 3", onChecked));

}) ();