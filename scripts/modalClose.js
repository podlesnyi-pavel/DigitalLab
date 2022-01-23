export const modalClose = (name) => {
  const modal = document.querySelector('.modal');
  const close = modal.querySelector('.modal__close');

  close.addEventListener('click', () => {
    modal.style.display = 'none';

    if (name) {
      name.innerText = '';
    }

    scrollOff();
  });

  modal.addEventListener('click', (e) => {
    if (e.target.className === 'modal') {
      modal.style.display = 'none';

      if (name) {
        name.innerText = '';
      }

      scrollOff();
    }
  });
};

function scrollOff() {
  document.body.style.overflow = 'auto';
}