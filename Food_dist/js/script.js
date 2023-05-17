let tabcontents = document.querySelectorAll('.tabcontent')
let typeBtns = document.querySelectorAll('[data-type]')
let current = document.querySelector('#current')
let modal = document.querySelector('.modal')
let btn_white = document.querySelector('.btn_white')
let modal__close = document.querySelector('.modal__close')
let btn_dark = document.querySelector('.btn_dark')

typeBtns.forEach(btn => {
    btn.onclick = () => {
        typeBtns.forEach(el => el.classList.remove('tabheader__item_active'))

        btn.classList.add('tabheader__item_active')

        let num = +btn.getAttribute('data-type')
        slides(num)
    }
})

slides(0)

function slides(n) {
    tabcontents.forEach(item => item.classList.add('hide') )

    tabcontents[n].classList.remove('hide')
    tabcontents[n].classList.add('show', 'fade')
}

let prev = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let sliders = document.querySelectorAll('.offer__slide') 

let slideIndex = 0
showSlides(slideIndex)

function showSlides(n) {

    if(n >= sliders.length  ) {
        slideIndex = 0
    }
    if(n < 0) {
        slideIndex = sliders.length - 1
    }

    sliders.forEach(el => el.classList.add('hide'))

    sliders[slideIndex].classList.remove('hide')
    sliders[slideIndex].classList.add('show')
    current.innerText = `0${slideIndex + 1}`
}

prev.onclick = () => {
    slideIndex--
    showSlides(slideIndex)
}
next.onclick = () => {
    slideIndex++
    showSlides(slideIndex)
}



btn_white.onclick = () => {
    modal.style.display = 'block'
}
modal__close.onclick = () => {
    modal.style.display = 'none'
}


btn_dark.onclick = () => {
    modal.style.display = 'block'
}



// открытие модального окна в конце страницы
let moda = document.getElementById("myModal");

let span = document.getElementsByClassName("close")[0];

let isModalShown = false;

window.onscroll = function() {
  if (!isModalShown && (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight) {
    modal.style.display = "block";
    isModalShown = true;
  }
};

span.onclick = function() {
  modal.style.display = "none";
};