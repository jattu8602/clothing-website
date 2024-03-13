let menubtn = document.getElementById('menubtn');
let nav = document.getElementById('nav');
let menu = document.getElementById('menu');
nav.style.right = "-200px";
menubtn.onclick = function(){
    if(nav.style.right == "-200px")
    {
        nav.style.right = "0";
        menu.src="fashion/close.png";
    }
    else {
        nav.style.right = "-200px";
        menu.src="fashion/menu.png";


        }
}

