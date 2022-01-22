import { form } from './form.js';
import { menuMobile } from './menuMobile.js';

// certificate slider
const slider = document.querySelector('.slider');
const sliderVisibleContent = slider.querySelector('.slider__visible-content');
const sliderLine = sliderVisibleContent.querySelector('.slider__line');
const images = sliderLine.querySelectorAll('.slider__img');
const leftButtons = slider.querySelectorAll('.slider__btn--left');
const rightButtons = slider.querySelectorAll('.slider__btn--right');

let index = 0;
let width;

leftButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    index--;
  
    if (index < 0) {
      index = images.length - 1;
    }
  
    rollSlider();
  });
});

rightButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    index++;
  
    if (index === images.length) {
      index = 0;
    }
  
    rollSlider();
  });
});

// reviews slider
const sliderReviews = document.querySelector('.slider--reviews');
const sliderVisibleContentReviews = sliderReviews
  .querySelector('.slider__visible-content--reviews');
const sliderLineReviews = sliderVisibleContentReviews
  .querySelector('.slider__line--reviews');

let widthReviewsSlider;
let offset = 0;

sliderReviews
  .querySelector('.slider__btn--left--reviews')
  .addEventListener('click', () => {
    offset -= widthReviewsSlider;

    if (offset < 0) {
      offset = widthReviewsSlider;
    }

    sliderLineReviews.style.transform = `translate(-${offset}px)`;
});

sliderReviews
  .querySelector('.slider__btn--right--reviews')
  .addEventListener('click', () => {
    offset += widthReviewsSlider;

    if (offset === widthReviewsSlider * 2) {
      offset = 0;
    }

    sliderLineReviews.style.transform = `translate(-${offset}px)`;
});

// common
function init() {
  width = sliderVisibleContent.offsetWidth;
  sliderLine.style.width = width * images.length + 'px';

  images.forEach(image => {
    image.style.width = width + 'px';
    image.style.height = 'auto';
  });

  widthReviewsSlider = sliderVisibleContentReviews.offsetWidth;

  rollSlider();
}

function rollSlider() {
  sliderLine.style.transform = `translate(-${+index * width}px)`;
}

window.addEventListener('resize', init);

init();
form();
menuMobile();