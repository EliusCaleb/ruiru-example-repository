
let button = document.getElementById("myBtn");

button.addEventListener("click", myFunction);

function myFunction() {
  alert ("Welcome to Salama!");
}


button.addEventListener("mouseover", function (event) {
    //highlight the mouseover target
    event.target.style.color = "red";
  }, false);
  
  button.addEventListener("mouseout", function (event) {
    // highlight the mouseout target
    event.target.style.color = "white";
  }, false);
  
  