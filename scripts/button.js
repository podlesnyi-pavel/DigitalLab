export const button = (modalClose) => {
  const buttons = document.querySelectorAll('.button');
  const modal = document.querySelector('.modal');
  const form = document.querySelector('.form--modal');

  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      if (e.target.value) {
        const name = document.createElement('div');
        name.classList.add('modal__name');
        name.innerText = e.target.value;
        form.prepend(name);

        modalClose(name);
      }

      if (!e.target.classList.contains('button--not')) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    });
  });
};
