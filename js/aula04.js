/* function menu(){
    let menu = document
            .getElementById("menu");

    if(menu.style.display == "block")
        menu.style.display = "none";
    else    
        menu.style.display = "block";
} */

let icon = document.getElementsByClassName("icon");
let menu = document.getElementById("menu");

icon[0].addEventListener('click', () => {
    if(menu.style.display === "block")
        menu.style.display = "none";
    else    
        menu.style.display = "block";
})