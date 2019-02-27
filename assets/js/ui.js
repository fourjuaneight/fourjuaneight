const body = document.querySelector('body');
const ui = document.getElementById('ui-options');
const sets = document.getElementById('settings');
const ops = document.querySelector('section.options');
const colors = document.querySelectorAll('p.colors');
const fonts = document.querySelectorAll('p.type');
const leftHand = document.getElementById('left-handed');
let count = 0;

window.onload = () => {
  if (localStorage.getItem('cache') === 'visited') {
    leftHand.classList.add('none');
  }
};

sets.addEventListener(
  'click',
  () => {
    count += 1;
    ops.classList.toggle('active');
    sets.classList.toggle('active');
    leftHand.classList.toggle('active');
    if (count > 3) {
      localStorage.setItem('cache', 'visited');
    }
    if (localStorage.getItem('cache') === 'visited') {
      leftHand.classList.add('none');
    }
  },
  false
);

if (!localStorage.getItem('side')) {
  leftHand.addEventListener('click', () => {
    leftHand.classList.add('none');
    leftHand.classList.remove('active');
    localStorage.setItem('side', 'left');
    ops.classList.remove('active');
    sets.classList.remove('active');
    ui.classList.add('left');
  });
}

if (localStorage.getItem('side') === 'left') {
  const side = localStorage.getItem('side');
  ui.setAttribute('class', side);
  leftHand.classList.add('none');
}

const uiSwitcher = (item, change, mod) => {
  item.forEach(option => {
    option.addEventListener(
      'click',
      () => {
        const value = option.id;
        body.setAttribute(mod, value);
        leftHand.classList.remove('active');
        localStorage.removeItem(change);
        localStorage.setItem(change, value);
        ops.classList.remove('active');
        sets.classList.remove('active');
      },
      false
    );
    if (localStorage.getItem(change)) {
      const newTheme = localStorage.getItem(change);
      body.setAttribute(mod, newTheme);
    }
  });
};

uiSwitcher(colors, 'theme', 'class');
uiSwitcher(fonts, 'type', 'id');
