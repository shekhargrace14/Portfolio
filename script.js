let hamburgerMenu = document.getElementById("hamburgerMenu");
let mobileRow = document.getElementById("navbar")


hamburgerMenu.addEventListener("click", function(){
   console.log("hamburger clicked");
   mobileRow.classList.toggle("active");
})



