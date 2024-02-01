var btn = document.querySelector("#main .page button");
var pagee = document.querySelector("#main .page2");
var page3 = document.querySelector("#main .page3");
var click_character = document.querySelectorAll(".character")
var Img_tagofChar = document.querySelector(".character img")


btn.addEventListener("click", () => {
  pagee.style.transform = "translateY(-100%)";
});

click_character.forEach(elem => {
  elem.addEventListener("click",(dets)=>{
    page3.style.transform = "translateY(-200%)"

    
    
   
    
  })
})


