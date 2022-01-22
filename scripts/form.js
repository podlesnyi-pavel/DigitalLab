export const form = () => {
  const modal = document.querySelector('.modal');
  const forms = document.querySelectorAll('.form');
  const inputs = document.querySelectorAll('.form__input');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      modal.style.display = 'none';
  
      inputs.forEach(input => {
        input.value = '';
      });
    })
  });
};
