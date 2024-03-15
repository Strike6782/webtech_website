var authorImage = document.getElementById('author-pic');
var popupBox = document.getElementById('popup-box');


function updateDisplay(event) {
  popupBox.style.left = event.pageX + 'px';
  popupBox.style.top = event.pageY + 'px';

  console.log(event.pageX + 'px', event.pageY + 'px'); 
} 

authorImage.addEventListener('mouseover', function(){
  popupBox.style.position='fixed';
  popupBox.style.display='block';
});

authorImage.addEventListener('mouseout', function(){
  popupBox.style.display='none';
});

authorImage.addEventListener("mousemove", updateDisplay, false);
authorImage.addEventListener("mouseenter", updateDisplay, false);
authorImage.addEventListener("mouseleave", updateDisplay, false);

















