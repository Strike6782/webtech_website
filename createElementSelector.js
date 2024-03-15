var footer = document.querySelector("footer");

var customizeDiv = document.createElement("div");
customizeDiv.className = "customize";

var elementSelector = document.createElement("select");
elementSelector.id = elementSelector;

var colorPicker = document.createElement("input");
colorPicker.type = "color";
colorPicker.id = "colorpicker";

var fontsizePicker = document.createElement("select");
fontsizePicker.id = "fontsizePicker";

for(var i = 12; i <= 28; i = i + 2) {
    var option = document.createElement("option");
    option.value = i;
    option.appendChild(document.createTextNode(i));
    fontsizePicker.appendChild(option);
}

customizeDiv.appendChild(elementSelector);
customizeDiv.appendChild(colorPicker);
customizeDiv.appendChild(fontsizePicker);

footer.appendChild(customizeDiv);

function checkIfElementExists(element) {
    const temp = document.querySelectorAll(element);
    if(temp.length > 0) {
        var option = document.createElement("option");
        var textnode = document.createTextNode(element);

        option.value = element;
        option.appendChild(textnode);
        elementSelector.appendChild(option);
    }
}

checkIfElementExists("header");
checkIfElementExists("body");
checkIfElementExists("footer");
checkIfElementExists("article");
checkIfElementExists("section");
checkIfElementExists("aside");
