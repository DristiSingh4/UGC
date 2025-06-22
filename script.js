const slideImage = document.querySelectorAll(".slides-image");
const slidesContainer = document.querySelector(".slides-container");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const navigationDots = document.querySelector(".navigation-dots");

let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;

function init() {
  /*   
    slideImage[0] = 0
    slideImage[1] = 100%
    slideImage[2] = 200%
    */

  slideImage.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });

  slideImage[0].classList.add("active");

  createNavigationDots();
}

init();

function createNavigationDots() {
  for (let i = 0; i < numberOfImages; i++) {
    const dot = document.createElement("div");
    dot.classList.add("single-dot");
    navigationDots.appendChild(dot);
  }
  navigationDots.children[0].classList.add("active");
}

nextBtn.addEventListener("click", () => 
{
    if(currentSlide>= numberOfImages-1)
    {
        goToSlide(0);
        return;
    };
currentSlide++;
goToSlide(currentSlide);
});

prevBtn.addEventListener("click", () => 
{
  if (currentSlide <= 0) 
  {
    goToSlide(numberOfImages - 1);
    return;
  }

  currentSlide--;
  goToSlide(currentSlide);
});

function goToSlide(slideNumber) 
{
  slidesContainer.style.transform ="translateX(-" + slideWidth * slideNumber + "px)";
  currentSlide = slideNumber;
  setActiveClass();
}

function setActiveClass() 
{
  let currentActive = document.querySelector(".slides-image.active");
  currentActive.classList.remove("active");
  slideImage[currentSlide].classList.add("active");

  let currentDot = document.querySelector(".single-dot.active");
  currentDot.classList.remove("active");
  navigationDots.children[currentSlide].classList.add("active");
}

const dots = document.querySelectorAll('.navigation-dots .single-dot');
const slideContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slides-container .slides-image');

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    document.querySelector('.single-dot.active').classList.remove('active');
    dot.classList.add('active');
    const slideWidth = slides[0].offsetWidth; 
    slideContainer.style.transform = `translateX(-${index * slideWidth}px)`;
  });
});







var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
 
  coverflowEffect: {
    rotate: 5,
    stretch: 140,
    depth: 100,
    modifier: 6,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

function toggleBox(boxId) {
  const allBoxes = document.querySelectorAll(".expandable-box");
  allBoxes.forEach((box) => {
      if (box.id === boxId) {
          box.style.display = box.style.display === "block" ? "none" : "block";
      } else {
          box.style.display = "none"; 
      }
  });
}

/*document.addEventListener("click", (event) => {
  const allBoxes = document.querySelectorAll(".expandable-box");
  const menuItems = document.querySelectorAll(".menu-item");
  const isMenuItem = [...menuItems].some((item) => item.contains(event.target));
  const isBox = [...allBoxes].some((box) => box.contains(event.target));
  if (!isMenuItem && !isBox) {
      allBoxes.forEach((box) => (box.style.display = "none"));
  }
});*/


