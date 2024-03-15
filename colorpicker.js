colorPicker = document.querySelector("#colorpicker");
colorPicker.addEventListener("input", watchColorPicker, false);
var elementSelector = document.getElementById('elementSelector');

function watchColorPicker(event) {
    var targetElements;

    function changeColor(e) {
        e.forEach((element) => {
            element.style.color = event.target.value;
        });
    }

    function changeBackground(e) {
        e.forEach((element) => {
            element.style.backgroundColor = event.target.value;
        });
    }

    switch(elementSelector.value) {
        case('paragraph'):
            targetElements = document.querySelectorAll(".info-block div p");
            changeColor(targetElements);
            break;
        case('header'):
            targetElements = document.querySelectorAll(".info-block div h3");
            changeColor(targetElements);
            break;
        case('navigation'):
            targetElements = document.querySelectorAll("#navigation ul li a");
            changeColor(targetElements);
            break;
        case('title'):
            targetElements = document.querySelectorAll(".introduction-block div h1, .introduction-block div p");
            changeColor(targetElements);
            break;
        case('textbox'):
            targetElements = document.querySelectorAll(".info-block div");
            changeBackground(targetElements);
            break;
        case('bodybackground'):
            targetElements = document.querySelectorAll("body");
            changeBackground(targetElements);
            break;
    }
}