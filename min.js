const navBtn = document.querySelector(".btn");
const navbar = document.querySelector(".navbar");
const navBg = document.querySelector(".navBG");

navBtn.addEventListener("click",()=>{
    navBtn.classList.add("btn_active");
    navbar.classList.add("navbar_active");
    navBg.classList.add("navBG_active");
})
navBg.addEventListener("click",()=>{
    navBg.classList.remove("navBG_active");
    navbar.classList.remove("navbar_active");
    navBtn.classList.remove("btn_active");
})