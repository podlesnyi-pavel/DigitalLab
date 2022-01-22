export const menuMobile = () => {
  const openButton = document.querySelector('.open-close-button--open');
  const closeButton = document.querySelector('.open-close-button--close');
  const menuMobile = document.querySelector('.menu-mobile');

  openButton.addEventListener('click', () => {
    menuMobile.style.transform = 'translateX(0)';
  });

  closeButton.addEventListener('click', () => {
    menuMobile.style.transform = 'translateX(100%)';
  });
};
