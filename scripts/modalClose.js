export const modalClose = () => {
  const modal = document.querySelector('.modal');
  const close = modal.querySelector('.modal__close');

  close.addEventListener('click', () => {
    modal.style.display = 'none';
    srollOff();
  });

  modal.addEventListener('click', (e) => {
    if (e.target.className === 'modal') {
      modal.style.display = 'none';
      srollOff();
    }
  });
};

function srollOff() {
  document.body.style.overflow = 'auto';
}