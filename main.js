let humburger = document.querySelector('.humburger');
let side = document.querySelector('.side');
let closeNav = document.querySelector('.closeNav');
let arrowDonwn1 = document.querySelector('.mobileNav li img');
let arrowDonwn2 = document.querySelector('.mobileNav .arrow2');
let lists1 = document.querySelectorAll('ul .features p');
let lists2 = document.querySelectorAll('ul .company p')
let arrowsDesktop = document.querySelectorAll('.desktopnav li img');
let listsDesktop = document.querySelectorAll('.desktopnav ul li');
let features = document.querySelector('.desktopnav .features');
let navDown1 = document.querySelector('.desktopnav ul li')
let navDown2 = document.querySelector('.desktopnav .companyy')

navDown1 .onclick = ()=>{
    arrowsDesktop[0].classList.toggle('toggleRotate');
    features.classList.toggle('toggleFeatures');
    lists1.forEach(list=>{
        list.classList.toggle('toggleList')
    })
}
navDown2.onclick = ()=>{
    arrowsDesktop[1].classList.toggle('toggleRotate');
    lists2.forEach(listt=>{
        listt.classList.toggle('toggleList2')
    })
}



if(humburger){
humburger.onclick=()=>{
side.style.right = '0'
document.body.style.background = 'linear-gradient(rgba(0,0,0,0.4) , rgba(0,0,0,0.2))'
}
}

if(closeNav){
closeNav.onclick = ()=>{
side.style.right='-230px'
document.body.style.background = 'white'
}
}

arrowDonwn1.onclick = ()=>{
arrowDonwn1.classList.toggle('toggleRotate');
lists1.forEach(list=>{
list.classList.toggle('toggleList')
})
}

arrowDonwn2.onclick = ()=>{
arrowDonwn2.classList.toggle('toggleRotate');
lists2.forEach(listt=>{
listt.classList.toggle('toggleList2');
})
}

