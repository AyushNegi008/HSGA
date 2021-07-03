burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')



burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');

})

pocox = document.querySelector('.pocox')
section = document.querySelector('.section')
thumbnil = document.querySelector('.thumbnil')
para= document.querySelector('.para')



pocox.addEventListener('click',()=>{
    para.classList.toggle('v-resp');
    thumbnil.classList.toggle('v-resp');
    section.classList.toggle('h-resp');

})

pocoxa = document.querySelector('.pocoxa')
sectiona = document.querySelector('.sectiona')
thumbnila = document.querySelector('.thumbnila')
paraa= document.querySelector('.paraa')



pocoxa.addEventListener('click',()=>{
    paraa.classList.toggle('v-a-resp');
    thumbnila.classList.toggle('v-a-resp');
    sectiona.classList.toggle('h-a-resp');

})

