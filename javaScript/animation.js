let toggleBtn = document.getElementsByClassName("menu-toggler");
let cardContainerDiv = document.getElementsByClassName("card-container-div");

toggleBtn.onchange = function() {
  if (cardContainerDiv.style.display !== "none") {
    cardContainerDiv.style.display = "none"; 
  } else {
    cardContainerDiv.style.display = "block"; 
  }
  
}


//const cardContainerDiv = document.getElementById("cardContainerDiv");
//
//const navBarMenuToggleBtn = document.getElementById("navBarMenuToggleBtn");
//navBarMenuToggleBtn.addEventListener("change", myFunction, false);
//
//function myFunction () {
//  let isChecked = navBarMenuToggleBtn.checked;
//  
//  if (isChecked) {
//        cardContainerDiv.style.display = "none"; 
//  } else {
//    cardContainerDiv.style.display = "block";
//  }
//}
