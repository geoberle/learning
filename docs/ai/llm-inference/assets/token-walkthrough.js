document.querySelectorAll('[data-token-walkthrough]').forEach((root) => {
  const sequence = root.querySelector('[data-sequence]');
  const status = root.querySelector('[data-status]');
  const question = root.querySelector('[data-question]');
  const next = root.querySelector('[data-next]');
  const tokens = [' tea', '.'];
  let step = 0;
  function render() {
    sequence.replaceChildren();
    ['Please', ' bring', ...tokens.slice(0, step)].forEach((text, index) => {
      const token = document.createElement('span');
      token.className = index < 2 ? 'token' : 'token generated';
      token.textContent = text;
      sequence.append(token);
    });
    status.textContent = `Step ${step} · 2 prompt tokens + ${step} generated tokens = ${2 + step} total.`;
    question.textContent = [
      'We will select [ tea]. Before revealing: what will the complete sequence be?',
      'The sequence now includes [ tea]. We will select [.]. Predict the sequence and total token count before revealing.',
      'Complete: [Please][ bring][ tea][.]. Both generated tokens joined the prompt. This demonstration stops at its two-token limit.'
    ][step];
    next.disabled = step === tokens.length;
  }
  root.querySelector('.controls').hidden = false;
  next.addEventListener('click', () => { if (step < tokens.length) { step++; render(); } });
  root.querySelector('[data-reset]').addEventListener('click', () => { step = 0; render(); });
  render();
});
