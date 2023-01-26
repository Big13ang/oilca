let toggleMenu = menu => {
    console.log(menu);
    menu.classList.toggle("open");
    console.log(menu);
}
let toggleAccordion = acordion_item => {
    acordion_item.classList.toggle("open");
}
let date = new Date();
let copy_right_time_element = document.querySelector("#copy-right-time");
copy_right_time_element.innerHTML = date.getFullYear();

// Init
document.addEventListener('DOMContentLoaded', () => {
    // Toggle Menu
    let menu = document.querySelector(".main-header");

    let close_menu_btn = document.querySelector(".close-menu");
    let open_menu_btn = document.querySelector(".open-menu");

    close_menu_btn.addEventListener('click', () => toggleMenu(menu));
    open_menu_btn.addEventListener('click', () => toggleMenu(menu));

    // Accordion
    let questions = document.querySelectorAll(".accordian__item-question");
    console.log(questions)
    questions.forEach(element => {
        element.addEventListener('click', e => toggleAccordion(element.parentElement))
    });
    /* Lock Screen Orientation */
    screen.orientation.lock("portrait");

}, false);