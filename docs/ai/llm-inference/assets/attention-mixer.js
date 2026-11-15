document.querySelectorAll('[data-attention-mixer]').forEach((root) => {
  const buttons = root.querySelectorAll('[data-mix]');
  const meters = root.querySelectorAll('meter');
  const outputs = root.querySelectorAll('output');
  const weights = [[10, 60, 30], [10, 20, 70]];
  const values = [2, 10, 4];
  root.querySelector('.controls').hidden = false;
  buttons.forEach((button, index) => button.addEventListener('click', () => {
    const selected = weights[index];
    buttons.forEach((item, i) => item.setAttribute('aria-pressed', String(i === index)));
    selected.forEach((weight, i) => {
      meters[i].value = weight;
      meters[i].textContent = `${weight}%`;
      outputs[i].textContent = `${weight}%`;
    });
    const result = selected.reduce((sum, weight, i) => sum + weight / 100 * values[i], 0);
    root.querySelector('[data-result]').textContent = `${selected.map((weight, i) => `${weight}% of ${values[i]}`).join(' + ')} = ${result.toFixed(1)}`;
  }));
});
