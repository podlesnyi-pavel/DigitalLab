const slider = document.querySelector('.slider');
const sliderVisibleContent = slider.querySelector('.slider__visible-content');
const sliderLine = sliderVisibleContent.querySelector('.slider__line');
const images = sliderLine.querySelectorAll('.slider__img');

let index = 0;
let width;

function init() {
  console.log('resize');
  width = sliderVisibleContent.offsetWidth;
  sliderLine.style.width = width * images.length + 'px';

  images.forEach(image => {
    image.style.width = width + 'px';
    image.style.height = 'auto';
  });

  rollSlider();
}

function rollSlider() {
  sliderLine.style.transform = `translate(-${+index * width}px)`;
}

window.addEventListener('resize', init);
init();

slider.querySelector('.slider__btn--left').addEventListener('click', () => {
  index--;

  if (index < 0) {
    index = images.length - 1;
  }

  rollSlider();
});

slider.querySelector('.slider__btn--right').addEventListener('click', () => {
  index++;

  if (index === images.length) {
    index = 0;
  }

  rollSlider();
});
