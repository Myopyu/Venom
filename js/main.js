// Задание переменной
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".nav-menu");
const menuCloseButton = document.querySelector(".menu-close");

// открытие адаптивного меню при нажатиии на менюшку
menuButton.addEventListener("click",()=>{
    menu.classList.add("is-active");
    menuCloseButton.classList.add("is-active");
});

//Закрытие адаптивного меню за ЗАКРЫТЬ
menuCloseButton.addEventListener("click",()=>{
    menu.classList.remove("is-active");
    menuCloseButton.classList.remove("is-active");
});
