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
        console.log("scrolling scrollY")
    }else if(window.scrollY < 80){
        header.classList.remove("sticky")
    }
    if(window.pageYOffset  > 80){
        header.classList.add("sticky")
        console.log("scrolling pageYOffset")
    }else if(window.pageYOffset < 80){
        header.classList.remove("sticky")
    }
})


// projects starts here 
let projects = document.querySelector(".projects");
console.log(projects)
fetch("./data.json")
.then(resolve=>resolve.json())
.then(data=>{
    console.log(data)

    data.map((element)=>{
        projects.insertAdjacentHTML("beforeend",`
        <div class="column ">
        <div class="image">
            <a href="${element.link}" alt="" target="_blank">
                <img src=${element.image} alt="">
            </a>
        </div>
        <div class="details">
            
            <h4>${element.title}</h4>
        

        </div>

    </div>
        `)
    })
})
// projects ends here 