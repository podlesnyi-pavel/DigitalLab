export const button = () => {
  const buttons = document.querySelectorAll('.button');
  const modal = document.querySelector('.modal');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      modal.style.display = 'flex';
    });
  });
};
