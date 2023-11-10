const sec2_an1 = document.querySelector(".section_2>img:nth-child(1)");
const sec2_an2 = document.querySelector(".section_2>img:nth-child(2)");
const sec2_an3 = document.querySelector(" .sec2_context");
const sec2_an4 = document.querySelector(".sec3_context");
const sec2_an5 = document.querySelector(".sec3_context_3");
const sec2_an6 = document.querySelector(".sec4_context_3");
const sec2_an7 = document.querySelector(".sec4_context_4");
const sec2_an8 = document.querySelector(".sec5_context_1");
const sec2_an9 = document.querySelector(".sec5_context_2");
const sec2_an10 = document.querySelector(".sec6_context_1");
const sec2_an11 = document.querySelector(".sec6_context_2");
const sec2_an12 = document.querySelector(".sec7_context_1");
const sec2_an13 = document.querySelector(".sec8_context_1");
const sec2_an14 = document.querySelector(".sec8_context_2");
const sec2_an15 = document.querySelector(".sec9_context_1");
const sec2_an16 = document.querySelector(".sec9_context_2");

const h = window.innerHeight + 10;


window.addEventListener("scroll",(ev)=>{
    if(sec2_an1.y < h){
        sec2_an1.classList.add("sec2_an1")
    }
    if(sec2_an1.y >= h){
        sec2_an1.classList.remove("sec2_an1")
    }
});
window.addEventListener("scroll",(ev)=>{
    if(sec2_an2.y < h){
        sec2_an2.classList.add("sec2_an2")
    }
    if(sec2_an2.y >= h){
        sec2_an2.classList.remove("sec2_an2")
    }
});
window.addEventListener("scroll",(ev)=>{
    if(sec2_an3.getBoundingClientRect().y < h){
        sec2_an3.classList.add("sec2_an3")
    }
    if(sec2_an3.getBoundingClientRect().y >= h){
        sec2_an3.classList.remove("sec2_an3")
    }
});
window.addEventListener("scroll",(ev)=>{
    if(sec2_an4.getBoundingClientRect().y < h){
        sec2_an4.classList.add("sec2_an4")
    }
    if(sec2_an4.getBoundingClientRect().y >= h){
        sec2_an4.classList.remove("sec2_an4")
    }
});
window.addEventListener("scroll",(ev)=>{
    if(sec2_an5.getBoundingClientRect().y < h){
        sec2_an5.classList.add("sec2_an5")
    }
    if(sec2_an5.getBoundingClientRect().y >= h){
        sec2_an5.classList.remove("sec2_an5")
    }
});
window.addEventListener("scroll",(ev)=>{
    if(sec2_an6.getBoundingClientRect().y < h){
        sec2_an6.classList.add("sec2_an6")
    }
    if(sec2_an6.getBoundingClientRect().y >= h){
        sec2_an6.classList.remove("sec2_an6")
    }
});
window.addEventListener("scroll",(ev)=>{
    if(sec2_an7.getBoundingClientRect().y < h){
        sec2_an7.classList.add("sec2_an7")
    }
    if(sec2_an7.getBoundingClientRect().y >= h){
        sec2_an7.classList.remove("sec2_an7")
    }
});
window.addEventListener("scroll",(ev)=>{
    if(sec2_an8.getBoundingClientRect().y < h){
        sec2_an8.classList.add("sec2_an8")
    }
    if(sec2_an8.getBoundingClientRect().y >= h){
        sec2_an8.classList.remove("sec2_an8")
    }
});
window.addEventListener("scroll",(ev)=>{
    if(sec2_an9.getBoundingClientRect().y < h){
        sec2_an9.classList.add("sec2_an9")
    }
    if(sec2_an9.getBoundingClientRect().y >= h){
        sec2_an9.classList.remove("sec2_an9")
    }
});
window.addEventListener("scroll",(ev)=>{
    if(sec2_an10.getBoundingClientRect().y < h){
        sec2_an10.classList.add("sec2_an10")
    }
    if(sec2_an10.getBoundingClientRect().y >= h){
        sec2_an10.classList.remove("sec2_an10")
    }
});
window.addEventListener("scroll",(ev)=>{
    if(sec2_an11.getBoundingClientRect().y < h){
        sec2_an11.classList.add("sec2_an11")
    }
    if(sec2_an11.getBoundingClientRect().y >= h){
        sec2_an11.classList.remove("sec2_an11")
    }
});
window.addEventListener("scroll",(ev)=>{
    if(sec2_an12.getBoundingClientRect().y < h){
        sec2_an12.classList.add("sec2_an12")
    }
    if(sec2_an12.getBoundingClientRect().y >= h){
        sec2_an12.classList.remove("sec2_an12")
    }
});
window.addEventListener("scroll",(ev)=>{
    if(sec2_an13.getBoundingClientRect().y < h){
        sec2_an13.classList.add("sec2_an13")
    }
    if(sec2_an13.getBoundingClientRect().y >= h){
        sec2_an13.classList.remove("sec2_an13")
    }
});
window.addEventListener("scroll",(ev)=>{
    if(sec2_an14.getBoundingClientRect().y < h){
        sec2_an14.classList.add("sec2_an14")
    }
    if(sec2_an14.getBoundingClientRect().y >= h){
        sec2_an14.classList.remove("sec2_an14")
    }
});
window.addEventListener("scroll",(ev)=>{
    if(sec2_an15.getBoundingClientRect().y < h){
        sec2_an15.classList.add("sec2_an15")
    }
    if(sec2_an15.getBoundingClientRect().y >= h){
        sec2_an15.classList.remove("sec2_an15")
    }
});
window.addEventListener("scroll",(ev)=>{
    if(sec2_an16.getBoundingClientRect().y < h){
        sec2_an16.classList.add("sec2_an16")
    }
    if(sec2_an16.getBoundingClientRect().y >= h){
        sec2_an16.classList.remove("sec2_an16")
    }
});

// const [...elem]  = document.querySelectorAll(".sec8_context_2>div>p");
//   sleepTime(elem[0],2000, 15, 350);
//   sleepTime(elem[1],2000, 15, 90);
//   sleepTime(elem[2],2000, 15, 150);
//   sleepTime(elem[3],2000, 15, 1200 );

// elem.innerHTML = "0"

// function sleepTime(elem, timeinterval, step, finalcount){
//     let key = 0;
//     let T = finalcount / step
//     setInterval(() => {
//         elem.innerHTML = key
//         key = key + step
//         if (key >= finalcount) {
//             key = finalcount
//             clearInterval(time)
//         }
//         }, timeinterval / T);
    
// };
// setTimeout(()=>{
//     sleepTime(elem, 2000, 10, 250);
// },2000)
