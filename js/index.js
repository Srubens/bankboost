let swiper = new Swiper(".slide-deposition", {
    slidesPerView: 3,
    spaceBetween: 32,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      320:{
        slidesPerView:1.3,
        spaceBetween: 17,
      },
      768:{
        slidesPerView:2.1,
        spaceBetween: 20,
      },
      1100:{
        slidesPerView:3,
        spaceBetween: 32,
      },
    }
  });

AOS.init({
    duration:1000,
});

let btnDropdown = document.querySelector('.js-btn-dropdown')
let dropdown = document.querySelector('.dropdown')
let header = document.getElementById('js-header')
let btnMobile = document.querySelector('.js-btn-mobile')
let jsOverlayMenu = document.querySelector('.js-overlay')

function openDropdown(e){
  e.preventDefault()
  dropdown.classList.toggle('active')
}

btnDropdown.addEventListener('click',openDropdown)
dropdown.addEventListener('mouseleave',openDropdown)


function fixedMenu(){
  let scrollPage = window.scrollY
  if( scrollPage > 80 ){
    header.classList.add('fixed-menu')
  }else{
    header.classList.remove('fixed-menu')
  }
}
document.addEventListener('scroll',fixedMenu)

function openMenuMobile(){
  document.documentElement.classList.toggle('menu-opened')
  console.log(document)
}

btnMobile.addEventListener('click', openMenuMobile)

jsOverlayMenu.addEventListener('click',openMenuMobile)