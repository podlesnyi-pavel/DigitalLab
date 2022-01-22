export const modalCloseButton = () => {
  const modal = document.querySelector('.modal');
  const close = modal.querySelector('.modal__close');

  close.addEventListener('click', () => {
    modal.style.display = 'none';
  });
};
