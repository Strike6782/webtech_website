const test = document.getElementById("elementSelector");



function createElementList(element) {
    const getElements = document.querySelectorAll(element);
    for (var i = 0; i < getElements.length; i++) {
        var option = document.createElement("option");

        if(getElements[i].hasAttribute('id') == false) {
            console.log("yes");
            getElements[i].id = element + i;
            option.value = element + i; 
        } else {
            console.log("no");
        }

        var textnode = document.createTextNode(getElements[i].id);
        option.value = getElements[i].id;
        test.appendChild(option);
        option.appendChild(textnode);
    }
}

createElementList("article");
createElementList("section");
console.log(test);