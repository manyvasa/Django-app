var btn_hamburger = document.querySelector(".header-menu__icon");
var layout__viewport = document.querySelector(".layout__viewport");


btn_hamburger.onclick = function() {
    layout__viewport.className = "layout__viewport layout__viewport--pushed";
}