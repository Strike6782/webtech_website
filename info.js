
function createInfoBlock(id){
  //add info blocks to article
  let infoBlock = document.createElement("div");
  infoBlock.className = "info-block";
  infoBlock.id = id;
  article1.appendChild(infoBlock);
}

function createDivInfoBlock(blockToAttach, title, desc, btn) {
  //target the correct InfoBlock
  let target = document.getElementById(blockToAttach);

  //add the div
  let divInfoBlock = document.createElement("div");
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

function createIntroductionBlock(target, text) {
  let article = document.getElementById(target);
  let introBlock = document.createElement("div");
  let div = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  introBlock.className = "introduction-block";
  h1.appendChild(document.createTextNode(text));
  p.appendChild(document.createTextNode("A " + book.genre + " - by " + book.author + " " + book.year));
  div.appendChild(h1);
  div.appendChild(p);
  introBlock.appendChild(div);
  article.appendChild(introBlock);
}

createIntroductionBlock("article1", book.title)

createInfoBlock("block0");
createInfoBlock("block1");
createInfoBlock("block2");

createDivInfoBlock("block0", "The plot", book.plot);
createDivInfoBlock("block1", "Publisher", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie iaculis felis non rhoncus. Sed vehicula, ante nec facilisis fermentum, massa ante elementum ante, a viverra metus nunc eu ligula. Nunc sed nunc non quam convallis vestibulum nec sit amet purus. Suspendisse convallis nunc vitae pretium efficitur. Suspendisse a quam neque. Donec dignissim magna ipsum, ac feugiat nibh condimentum ut. Donec vel ex congue, fermentum quam id, bibendum lacus. Morbi vel aliquet est. Quisque nulla augue, tristique at rhoncus sit amet, interdum eu arcu.");
createDivInfoBlock("block1", "Lorem ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie iaculis felis non rhoncus. Sed vehicula, ante nec facilisis fermentum, massa ante elementum ante, a viverra metus nunc eu ligula. Nunc sed nunc non quam convallis vestibulum nec sit amet purus. Suspendisse convallis nunc vitae pretium efficitur. Suspendisse a quam neque. Donec dignissim magna ipsum, ac feugiat nibh condimentum ut. Donec vel ex congue, fermentum quam id, bibendum lacus. Morbi vel aliquet est. Quisque nulla augue, tristique at rhoncus sit amet, interdum eu arcu.");
createDivInfoBlock("block2", "Lorem ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie iaculis felis non rhoncus. Sed vehicula, ante nec facilisis fermentum, massa ante elementum ante, a viverra metus nunc eu ligula. Nunc sed nunc non quam convallis vestibulum nec sit amet purus. Suspendisse convallis nunc vitae pretium efficitur. Suspendisse a quam neque. Donec dignissim magna ipsum, ac feugiat nibh condimentum ut. Donec vel ex congue, fermentum quam id, bibendum lacus. Morbi vel aliquet est. Quisque nulla augue, tristique at rhoncus sit amet, interdum eu arcu.");

