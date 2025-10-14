//mobile sidebar
const menubtns = document.querySelector(".menu-btns");
const hamburger = document.querySelector(".hamburger");
const closemenu = document.querySelector(".close-menu");
const sidebar = document.querySelector(".sidebar");
const header = document.querySelector(".main-header");
const copyrightmsg = document.querySelector(".copyright-msg .date");

copyrightmsg.innerHTML = new Date().getFullYear();

hamburger.addEventListener("click", function(){
  sidebar.classList.add("active");
  hamburger.style.display="none";
  closemenu.style.display="block";
})

closemenu.addEventListener("click", function(){
  sidebar.classList.remove("active");
  hamburger.style.display="block";
  closemenu.style.display="none";
})

// back to top button
const toTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', function(){
  if(window.pageYOffset > 100){
    toTop.classList.add('active');
  } else{
    toTop.classList.remove('active');
  }
})

window.addEventListener('scroll', function(){
  if(window.pageYOffset > 300){
    header.classList.add("bg");
  } else{
    header.classList.remove("bg");
  }
})