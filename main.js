window.scrollTo({
  top: 250,
  behavior: "smooth",
});

// Занимаемся блокировкой прокрутки
document.body.style.overflow = 'hidden'; // Блокируем прокрутку

// Через 5 секунд (5000 мс) разрешаем прокрутку
setTimeout(() => {
    document.body.style.overflow = 'auto'; // Разрешаем прокрутку
}, 5000);

//main-main
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slideInterval = 3000;

function changeSlide() {
  slides[currentIndex].style.opacity = 0;
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].style.opacity = 1;
}

setInterval(changeSlide, slideInterval);
