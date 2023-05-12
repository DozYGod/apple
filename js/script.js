let blue = document.querySelector('.blue')
let purple = document.querySelector('.purple')
let black = document.querySelector('.black')
let white = document.querySelector('.white')
let red = document.querySelector('.red')
let img5 = document.querySelector('.img5')

blue.onclick = () => {
    img5.style.backgroundImage = "url('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-blue?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027942322')"
}
purple.onclick = () => {
    img5.style.backgroundImage = "url('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-purple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027938735')"
}
black.onclick = () => {
    img5.style.backgroundImage = "url('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-midnight?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027925267')"
}
white.onclick = () => {
    img5.style.backgroundImage = "url('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-starlight?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027935971')"
}
red.onclick = () => {
    img5.style.backgroundImage = "url('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-product-red?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027939728')"
}



let currentIndex = 0;
let slides = document.querySelectorAll(".slider__item");

function showSlide(n) {
  // Скрываем все слайды
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Показываем нужный слайд
  slides[n].style.display = "block";
  currentIndex = n;
}

// Показываем первый слайд при загрузке страницы
showSlide(0);

// Обработчик событий клавиатуры
document.addEventListener("keydown", function (event) {
  // Проверяем нажатые клавиши
  switch (event.keyCode) {
    case 37: // стрелка влево
      if (currentIndex > 0) {
        showSlide(currentIndex - 1);
      }
      break;

    case 39: // стрелка вправо
      if (currentIndex < slides.length - 1) {
        showSlide(currentIndex + 1);
      }
      break;

    default:
      break;
  }
});