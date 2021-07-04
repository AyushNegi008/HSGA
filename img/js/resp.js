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

function search_animal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('animals');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

pocoxa.addEventListener('click',()=>{
    paraa.classList.toggle('v-a-resp');
    thumbnila.classList.toggle('v-a-resp');
    sectiona.classList.toggle('h-a-resp');

})

