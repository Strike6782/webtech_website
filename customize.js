colorPicker.addEventListener("input", watchColorPicker, false);

fontsizePicker.addEventListener("change", function() {
    var targetElements = document.querySelectorAll(elementSelector.value);
    targetElements.forEach((element) => {
        element.style.fontSize = fontsizePicker.value + "px";
        console.log(element, fontsizePicker.value);
    });
});


function watchColorPicker(event) {
    function changeColor(e) {
        e.forEach((element) => {
            console.log(element.style.fontSize, "hlllll");
            element.style.color = event.target.value;
        });
    }

    function changeBackground(e) {
        e.forEach((element) => {
            element.style.backgroundColor = event.target.value;
        });
    }

    var targetElements = document.querySelectorAll(elementSelector.value);
    
    if (elementSelector.value == "body" || elementSelector.value == "footer") {
        changeBackground(targetElements);
    } else {
        changeColor(targetElements);
    }
}