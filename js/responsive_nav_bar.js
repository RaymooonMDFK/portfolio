document.addEventListener("DOMContentLoaded",setup);


var menu_button;
var side_bar;

function setup(){
    side_bar = document.getElementById("bar-nav");
    find_buttons();

}

function find_buttons(){
    const botones = document.getElementsByClassName("nav-button");


    for (index = 0; index < botones.length; index++) {
        const element = botones[index];
        element.addEventListener("click",close_menu);
    }

}


function close_menu(){
    side_bar.open = false;
}

