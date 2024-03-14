//get excisting elements
let article1 = document.getElementById("article1");



function createInfoBlock(title1, title2, desc1, desc2, btn1, btn2){
  //add info blocks to article
  let infoBlock = document.createElement("div");
  infoBlock.className = "info-block";
  article1.appendChild(infoBlock);

    //create two divs inside this info block
  createDivInfoBlock(infoBlock, title1, desc1, btn1);
  createDivInfoBlock(infoBlock, title2, desc2, btn2);
}

function createDivInfoBlock(blockToAttach, title, desc, btn){
  //add the div
  let divInfoBlock = document.createElement("div");
  blockToAttach.appendChild(divInfoBlock);

  //add things inside that div
  let h2InfoBlock = document.createElement("h3");
  let pInfoBlock = document.createElement("p");
  let btnInfoBlock = document.createElement("button");
  divInfoBlock.appendChild(h2InfoBlock);
  divInfoBlock.appendChild(pInfoBlock);
  divInfoBlock.appendChild(btnInfoBlock);

  //add text
  h2InfoBlock.textContent = title;
  pInfoBlock.textContent = desc;
  btnInfoBlock.textContent = btn;
}

createInfoBlock("titel 1", "titel 2", "beschrijving 1", "beschrijving 2", "knopie 1", "knoppie 2");

