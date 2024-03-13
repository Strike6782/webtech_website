function createNavigationItem(name, href) 
{
    var menu = document.getElementById("menu");
    const textnode = document.createTextNode(name);
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = href;
    a.appendChild(textnode);
    li.appendChild(a);
    menu.appendChild(li);
}

createNavigationItem("Home", "index.html");
createNavigationItem("Summary", "summary.html");
createNavigationItem("Author", "author.html");
createNavigationItem("Reviews", "reviews.html");
createNavigationItem("Characters", "characters.html");