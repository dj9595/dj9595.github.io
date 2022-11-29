/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    constnavMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')
function toggleSkills(){
    letitemClass = this.parentNode.className

    for( i = 0 ; i<skillsContent.length ; i++){
        skillsContent[i].className= 'skills__contentskills__close'
    }
    if(itemClass === 'skills__contentskills__close'){
        this.parentNode.className= 'skills__contentskills__open'
    }
}
skillsHeader.forEach((eL)=>{
    eL.addEventListener('click', toggleSkills)
})
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
       tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
        consttarget = document.querySelector(tab.dataset.target)
        
        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab=>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})
/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalclick){
    modalViews[modalclick].classList.add('active-modal')
}

modalBtns.forEach((modalBtns, i) =>{
    modalBtns.addEventListener('click', () =>{
        modal(i)
    })
})      

modalCloses.forEach((modalclose) =>{
    modalclose.addEventListener('click',() =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})
/*==================== PORTFOLIO SWIPER  ====================*/
let  swiperPortfolio = newSwiper('.portfolio__container', {
    cssMode:true,
    loop:true,

    navigation: {
      nextEl:".swiper-button-next",
      prevEl:".swiper-button-prev",
    },
    pagination: {
      el:".swiper-pagination",
      clickable:true,
    },
   
});

/*==================== TESTIMONIAL ====================*/
let  swiperTestmonial = newSwiper('.testimonial__container', {
    loop:true,
    grabCursor:true,
    spaceBetween:48,

    pagination: {
      el:".swiper-pagination",
      clickable:true,
      dynamicBullets:true,
    },
    breakpoints:{
        568:{
            slidesPerView:2,
        }
    }
   
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    constscrollY = window.pageYOffset

    sections.forEach(current=>{
        constsectionHeight = current.offsetHeight
        constsectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY>sectionTop&&scrollY<= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    constnav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY>= 80) nav.classList.add('scroll-header'); elsenav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== SHOW SCROLL UP ====================*/
function scrollUp(){
    constscrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY>= 560) scrollUp.classList.add('show-scroll'); elsescrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/

function scrollHeader(){
    constnav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY>= 200) nav.classList.add('scroll-header'); elsenav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop(){
    constscrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY>= 560) scrollTop.classList.add('show-scroll'); elsescrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/
constthemeButton = document.getElementById('theme-button')
constdarkTheme = 'dark-theme'
consticonTheme = 'uil-sun'

// Previously selected topic (if user selected)
constselectedTheme = localStorage.getItem('selected-theme')
constselectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
constgetCurrentTheme = () =>document.body.classList.contains(darkTheme) ? 'dark' :'light'
constgetCurrentIcon = () =>themeButton.classList.contains(iconTheme) ? 'uil-moon' :'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' :'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ?'add' :'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

