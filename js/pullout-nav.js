const mysidenav = document.querySelector(".sidenav");
const openbutton = document.querySelector(".open-button");
const closebutton = document.querySelector(".close-button");

openbutton.onclick = function () {
    mysidenav.setAttribute("data-navstate", "open");
};
closebutton.onclick = function () {
    mysidenav.setAttribute("data-navstate", "closed");
};

console.log(mysidenav)