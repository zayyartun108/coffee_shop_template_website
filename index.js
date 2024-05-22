let search=document.querySelector('.search-box');
document.querySelector('#search-icon').onclick=()=>{
    search.classList.toggle('active');
    nav.classList.remove('active');
}



let header=document.querySelector('header');

window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow',window.scrollY >0);

})



let icon=document.querySelector('#menu-icon');
let nav=document.querySelector('.navbar');
icon.onclick=()=>{
    nav.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll=()=>{
    search.classList.remove('active');
    nav.classList.remove('active');
}