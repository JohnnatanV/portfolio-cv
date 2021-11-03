/*========================= MENU SHOW / HIDE ============================*/
const navMenu = document.querySelector("#nav-menu"),
  navToggle = document.querySelector("#nav-toggle"),
  navClose = document.querySelector("#nav-close");

/*=========== MENU SHOW =============*/
//Validate if constant exist
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*=========== MENU HIDE =============*/
//Validate if constant exist
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=========== REMOVE MENU MOBILE =============*/

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName(".skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  } else if (itemClass === "skills__content skills__open") {
    this.parentNode.className = "skills__content skills__close";
  }
}

skillsHeader.forEach((e) => {
  e.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/

/*==================== SERVICES MODAL ====================*/

/*==================== PORTFOLIO SWIPER  ====================*/

/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*==================== DARK LIGHT THEME ====================*/
