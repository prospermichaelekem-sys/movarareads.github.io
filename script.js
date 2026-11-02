document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const buttons = document.querySelectorAll('.filters button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(item => item.classList.remove('active'));
      button.classList.add('active');

      document.querySelectorAll('.grid article').forEach(card => {
        const category = button.dataset.filter;
        card.classList.toggle(
          'hide',
          category !== 'all' && card.dataset.cat !== category
        );
      });
    });
  });
});
