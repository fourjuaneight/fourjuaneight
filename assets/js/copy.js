const highlight = document.querySelectorAll('div.highlight');
highlight.forEach(el => {
  let button = document.createElement('button');
  button.innerHTML = 'COPY';
  button.classList.add('copy');
  button.setAttribute('aria-label', 'Copy to clipboard');
  el.prepend(button);
});
const label = document.querySelectorAll('button.copy');
label.forEach(copy => {
  copy.addEventListener('click', () => {
    const selection = window.getSelection();
    const range = document.createRange();
    const pre = copy.nextSibling;
    const code = pre.querySelector('code');
    const original = copy.innerHTML;
    range.selectNodeContents(code);
    selection.removeAllRanges();
    selection.addRange(range);
    try {
      document.execCommand('copy');
      selection.removeAllRanges();
      copy.innerHTML = 'Copied!';
      setTimeout(() => {
        copy.innerHTML = original;
      }, 1200);
    } catch(e) {
      copy.innerHTML = "Can't copy, hit Ctrl+C!";
      setTimeout(() => {
        copy.innerHTML = original;
      }, 1200);
    }
  });
});