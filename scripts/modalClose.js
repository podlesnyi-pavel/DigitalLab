export const modalClose = () => {
  const modal = document.querySelector('.modal');
  const close = modal.querySelector('.modal__close');

  close.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target.className === 'modal') {
      modal.style.display = 'none';
    }
  });
};
