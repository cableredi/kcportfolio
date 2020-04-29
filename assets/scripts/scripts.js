/* scripts */

/* get current year */
document.getElementById("year").innerHTML = new Date().getFullYear();


/* side nav */
function openNav() {
  document.getElementById("mySidenav").style.width = "130px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


/* Modal */
let modal = document.getElementsByClassName("modal");
let btn = document.getElementsByClassName("btn");
let span = document.getElementsByClassName("close");

for (let i = 0; i < modal.length; i++) {
  btn[i].onclick = function() {
    modal[i].style.display = "block";
  }

  span[i].onclick = function() {
    modal[i].style.display = "none";
  }
}