const btn3=document.querySelector("#open-popup-btn");

const showBox=document.querySelector(".pop_up2");
const hide= document.querySelector("#hide");

btn3.addEventListener("click",function(){
  showBox.classList.toggle("showBox");
})
hide.addEventListener("click",function(){
  showBox.classList.remove("showBox");
})