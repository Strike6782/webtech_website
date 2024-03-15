//get excisting elements
let article1 = document.getElementById("article1");

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
  divInfoBlock.appendChild(btnInfoBlock);

  //add text
  h2InfoBlock.textContent = title;
  pInfoBlock.textContent = desc;
  btnInfoBlock.textContent = btn;
}

createInfoBlock("target0");
createInfoBlock("target1");
createDivInfoBlock("target1", "Hello!", "I got created first!", "click me");
createDivInfoBlock("target1", "Hello!", "I got created second!", "click me");
createDivInfoBlock("target0", "Hello!", "I got created third!", "click me");