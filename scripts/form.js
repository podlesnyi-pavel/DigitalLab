export const form = () => {
  const orderForm = document.querySelector('.order__form');
  const inputs = orderForm.querySelectorAll('.order__input');

  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();

    inputs.forEach(input => {
      input.value = '';
    });
  })
};
