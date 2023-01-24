import { navbar } from "./components/navbar.js"; 
import {footer} from "./components/footer.js";
let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar();


let footer_div=document.getElementById("footer")
footer_div.innerHTML=footer()


let top = document.getElementById("navbar").offsetTop;
function stickynavbar() {
  if (window.scrollY > top) {    
    document.getElementById("navbar").classList.add('sticky');
  } else {
    document.getElementById("navbar").classList.remove('sticky');
  }
}
window.addEventListener('scroll', stickynavbar)


let men=document.querySelector("#MEN")
men.addEventListener("click",myfun)

 function myfun(){

 localStorage.setItem("key","Male");
 
}

let women=document.querySelector("#WOMEN")
women.addEventListener("click",my)

 function my(){

 localStorage.setItem("key","Female");
 
}

let search=document.querySelector("#search_button")
search.addEventListener("click",data)

function data(){
  let searchData=document.querySelector("#input_box").value;
  localStorage.setItem("searchKey",searchData);
  console.log("Hii")
  window.location.href="searchProduct.html";  
}



           /*................................slider.................*/
function responsiveSlider() {
  const slider = document.querySelector('.maincontainer');
  let sliderWidth = slider.offsetWidth / 3;
  const sliderList = document.querySelector('ul');
  let items = sliderList.querySelectorAll('li').length -2 ;
  let count = 1;
  
  window.addEventListener('resize', function() {
    sliderWidth = slider.offsetWidth;
  });
  
  function prevSlide() {
    if(count > 1) {
      count = count - 2;
      sliderList.style.left = '-' + count * sliderWidth + 'px';
      count++;
    }else if(count == 1) {
      count = items - 1;
      sliderList.style.left = '-' + count * sliderWidth + 'px';
      count++;
    }
    
  }
  function nextSlide() {
    if(count < items) {
      sliderList.style.left = '-' + count * sliderWidth + 'px';
      count++;
      
    }else if(count == items) {
      sliderList.style.left = '0px';
      count = 1;
      
    }
  }
  prev.addEventListener('click', prevSlide);
  next.addEventListener('click', nextSlide);
  setInterval(function() {
    nextSlide();
  }, 4000);
}

window.onload = function() {
  responsiveSlider();
  }

