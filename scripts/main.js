import { form } from './form.js';
import { menuMobile } from './menuMobile.js';
import { modalClose } from './modalClose.js';
import { button } from './button.js';

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
const sliderReviewsArray = sliderReviews.querySelectorAll('.slider__review');

let indexReview = 0;
let widthReviewsSlider;

sliderReviews
  .querySelector('.slider__btn--left--reviews')
  .addEventListener('click', () => {
    if (widthReviewsSlider < 500) {
      indexReview--;

      if (indexReview < 0) {
        indexReview = sliderReviewsArray.length - 1;
      }

      rollSliderReviews(indexReview);
    } else {
      indexReview--;

      if (indexReview < 0) {
        indexReview = Math.ceil(sliderReviewsArray.length / 2) - 1;
      }

      rollSliderReviews(indexReview);
    }
});

sliderReviews
  .querySelector('.slider__btn--right--reviews')
  .addEventListener('click', () => {
    if (widthReviewsSlider < 500) {
      indexReview++;

      if (indexReview === sliderReviewsArray.length) {
        indexReview = 0;
      }
    } else {
      indexReview++;

      if (indexReview === Math.ceil(sliderReviewsArray.length / 2)) {
        indexReview = 0;
      }
    }

    rollSliderReviews(indexReview);
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
  rollSliderReviews();
}

function rollSlider() {
  sliderLine.style.transform = `translate(-${+index * width}px)`;
}

function rollSliderReviews() {
  sliderLineReviews.style.transform = `translate(-${+indexReview * widthReviewsSlider}px)`;
}

window.addEventListener('resize', init);

init();
form();
menuMobile();
modalClose();
button();