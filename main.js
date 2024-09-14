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
