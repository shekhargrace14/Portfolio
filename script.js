let hamburgerMenu = document.getElementById("hamburgerMenu");
let navbar = document.getElementById("navbar");
let topBar = document.getElementById("topBar");
let middleBar = document.getElementById("middleBar")
let bottomBar = document.getElementById("bottomBar")


hamburgerMenu.addEventListener("click", function(){
    console.log("ham is a burger menu");
    navbar.classList.toggle("active");
    // hamburgerMenu.style.backgroundColor="red";
    topBar.classList.toggle("topBarRotate");
    middleBar.classList.toggle("middleBarHide");
    bottomBar.classList.toggle("bottomBarRotate");
    
})

let header = document.getElementById("header")
window.addEventListener('scroll', function(){
    if(window.scrollY  > 80){
        header.classList.add("sticky")
    }else if(window.scrollY < 80){
        header.classList.remove("sticky")
    }
})