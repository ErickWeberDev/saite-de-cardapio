document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', () => {
      const checkbox = item.querySelector('input[type="checkbox"]');
      if (checkbox) {
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event('change')); // Dispara o evento 'change' manualmente
      }
    });
  });

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const totalElement = document.querySelector('.Valor p');
  let total = 0;

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', function (event) {
      event.stopPropagation();
    });

    checkbox.addEventListener('change', function () {
      const priceElement = this.parentElement.querySelector('.preco');
      const price = parseFloat(priceElement.textContent.replace('R$', '').replace(',', '.'));

      if (this.checked) {
        total += price;
      } else {
        total -= price;
      }

      totalElement.textContent = `R$${total.toFixed(2).replace('.', ',')}`;
    });
  });
});