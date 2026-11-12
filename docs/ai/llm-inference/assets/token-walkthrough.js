document.querySelectorAll('[data-token-walkthrough]').forEach((root) => {
  const sequence = root.querySelector('[data-sequence]');
  const status = root.querySelector('[data-status]');
  const question = root.querySelector('[data-question]');
  const next = root.querySelector('[data-next]');
  const tokens = [' sat', ' down', '.'];
  let step = 0;
  function render() {
    sequence.replaceChildren();
    ['The', ' cat', ...tokens.slice(0, step)].forEach((text, index) => {
      const token = document.createElement('span');
      token.className = index < 2 ? 'token' : 'token generated';
      token.textContent = text;
      sequence.append(token);
    });
    status.textContent = [
      'Ready · Prompt: [The][ cat]. No output tokens selected yet.',
      'Prefill complete · Processed [The][ cat]; cached their state; selected [ sat].',
      'Decode 1 complete · Processed [ sat]; reused prompt state; selected [ down].',
      'Decode 2 complete · Processed [ down]; reused earlier state; selected [.].'
    ][step];
    question.textContent = [
      'Run prefill to select the first output token.',
      'The cache contains state for [The][ cat]. Next, process the selected [ sat] token.',
      'The cache now includes [ sat]. Next, process the selected [ down] token.',
      'Stopped at three output tokens. The final [.] was selected but does not need another model pass because generation ends here.'
    ][step];
    next.textContent = ['Run prefill', 'Run decode 1', 'Run decode 2', 'Complete'][step];
    next.disabled = step === tokens.length;
  }
  root.querySelector('.controls').hidden = false;
  next.addEventListener('click', () => { if (step < tokens.length) { step++; render(); } });
  root.querySelector('[data-reset]').addEventListener('click', () => { step = 0; render(); });
  render();
});
