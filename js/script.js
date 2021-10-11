//Animamos al menu para que cuando bajemos se quede estatico

window.onscroll = function(){
    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if(scroll >20){
        header.classList.add('nav_mod');
    }else if (scroll<20){
        header.classList.remove('nav_mod');
    }

}