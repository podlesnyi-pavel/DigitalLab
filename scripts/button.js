export const button = () => {
  const buttons = document.querySelectorAll('.button');
  const modal = document.querySelector('.modal');

  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      if (!e.target.classList.contains('button--not')) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    });
  });
};
