function createArticle(id) {
  let body = document.getElementById("body");
  let article = document.createElement("article");
  body.appendChild(article);
  article.id = id;
  article.className = "article-summary p";
}

function createDivInfoBlock(blockToAttach, title, desc, btn) {
  //target the correct InfoBlock
  let target = document.getElementById(blockToAttach);

  //add the div
  let divInfoBlock = document.createElement("section");
  target.appendChild(divInfoBlock);

  //add things inside that div
  let h2InfoBlock = document.createElement("h3");
  let pInfoBlock = document.createElement("p");
  let btnInfoBlock = document.createElement("button");
  divInfoBlock.appendChild(h2InfoBlock);
  divInfoBlock.appendChild(pInfoBlock);

  if (btn != null) {
    divInfoBlock.appendChild(btnInfoBlock);
  }

  //add text
  h2InfoBlock.textContent = title;
  pInfoBlock.textContent = desc;
  btnInfoBlock.textContent = btn;
}

var book = new Book();

book.title = "The Hunger Games";
book.genre = "genre"
book.author = "writer";
book.year = "1900"
book.plot = "Panem is a dystopian nation divided into twelve districts, ruled by the Capitol. As punishment for a failed rebellion many years before, each district must annually choose two tributes, one boy and one girl between the ages of twelve and eighteen, to fight to the death in the annual Hunger Games, until one victor remains. The event is televised across the Capitol and all districts, who are forced to watch.";

// function createIntroductionBlock(target, text) {
//   let article = document.getElementById(target);
//   let introBlock = document.createElement("div");
//   let div = document.createElement("div");
//   let h1 = document.createElement("h1");
//   let p = document.createElement("p");

//   //introBlock.className = "introduction-block";
//   h1.appendChild(document.createTextNode(text));
//   p.appendChild(document.createTextNode("A " + book.genre + " - by " + book.author + " " + book.year));
//   div.appendChild(h1);
//   div.appendChild(p);
//   introBlock.appendChild(div);
//   article.appendChild(introBlock);
// }

function createBookBlock(target, Book, Author, Publisher) {
  let article = document.getElementById(target);
  let introBlock = document.createElement("div");
  let div = document.createElement("div");
  let h1 = document.createElement("h1");

  function createP(text) {
    let p = document.createElement("p");
    p.appendChild(document.createTextNode(text));
    div.appendChild(p);
  }
  
  h1.appendChild(document.createTextNode(Book.title));
  div.appendChild(h1);

  createP("Genre: " + Book.genre);
  createP("Year: " + Book.year);
  createP("Author: " + Author.name);
  createP("Publisher: " + Publisher.name);
  createP("Plot: " + Book.plot);
  introBlock.appendChild(div);
  article.appendChild(introBlock);
}

HGAuthor = new Author("Suzanne Collins", "1962", "The Hunger Games", "link")
HGPublisher = new Publisher("Scholastic", "link", "The Hunger Games")
HGBook = new Book(HGAuthor, 2008, "The Hunger Games", "Sciencefiction", HGPublisher, "img", 
"Panem is a dystopian nation divided into twelve districts, ruled by the Capitol. As punishment for a failed rebellion many years before, each district must annually choose two tributes, one boy and one girl between the ages of twelve and eighteen, to fight to the death in the annual Hunger Games, until one victor remains. The event is televised across the Capitol and all districts, who are forced to watch.");

createArticle("article0");
//createArticle("article1");
// createDivInfoBlock("article0", "TEST", "YOOo");
createBookBlock("article0", HGBook, HGAuthor, HGPublisher);
