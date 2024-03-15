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

    targetElements = document.querySelectorAll("#" + elementSelector.value);
    changeColor(targetElements);
    console.log(elementSelector.value);
}