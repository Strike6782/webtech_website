function openMenu() 
{
    document.getElementById('navigation').style.left='0%';
    document.getElementById('menu').style.opacity='1';
}   

function closeMenu() 
{
    document.getElementById('navigation').style.left='-100%';
    document.getElementById('menu').style.opacity='0';
}

function reportWindowSize() {
    if (window.innerWidth > 700) {
        document.getElementById('menu').style.opacity='1';
    }
}
 
window.onresize = reportWindowSize;