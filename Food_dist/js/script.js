let tabcontents = document.querySelectorAll('.tabcontent')
let typeBtns = document.querySelectorAll('[data-type]')
let current = document.querySelector('#current')
let modal = document.querySelector('.modal')
let btn_white = document.querySelector('.btn_white')
let modal__close = document.querySelector('.modal__close')
let btn_dark = document.querySelector('.btn_dark')
let  genderBtns = document.querySelectorAll('#gender .calculating__choose-item')
let inputs = document.querySelectorAll('.calculating__choose-medium input')
let actBtns = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')
let result_view = document.querySelector("#result") 

let userData = {
    gender: "woman"
}

inputs.forEach(inp => {
    inp.onkeyup = () => {
        userData[inp.id] = inp.value
    }
})

actBtns.forEach(btn =>{
    btn.onclick = () => {
        actBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add("calculating__choose-item_active") 
        let coefficient = +btn.getAttribute("data-act")

        if (userData.gender === "woman") {
            let result = 655.1 + (9.563 * userData.weight) + (1.85 * userData.height) - (4.676 * userData.age)
            
            result_view.innerHTML = Math.floor(result * coefficient)
        }else{
            let result = 66.5 + (13.75 * userData.weight) + (5.03 * userData.height) - (6.775 * userData.age)
            
            result_view.innerHTML = Math.floor(result * coefficient)
        }
    } 
})

genderBtns.forEach(btn =>{
    btn.onclick = () => {
        genderBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add("calculating__choose-item_active") 
        let key = btn.getAttribute("data-g")

        userData.gender = key
    } 
})


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


// Установим дату окончания акции
var endDate = new Date("May 30, 2023 23:59:59").getTime();


var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = endDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.querySelector(".title").innerHTML = "Акция закончилась!";
  }
}, 1000);


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


