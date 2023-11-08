let hamburgerMenu = document.getElementById("hamburgerMenu");
let navbar = document.getElementById("navbar");


hamburgerMenu.addEventListener("click", function(){
    console.log("ham is a burger menu");
    navbar.classList.toggle("active");
    
})