const body = document.querySelector(`body`);
const sets = document.getElementById(`settings`);
const ops = document.querySelector(`section.options`);
const colors = document.querySelectorAll(`p.colors`);
const fonts = document.querySelectorAll(`p.type`);

sets.addEventListener(`click`, () => {
  ops.classList.toggle(`active`);
  sets.classList.toggle(`active`);
});

const uiSwitcher = (item, change, mod) => {
  item.forEach(option => {
    option.addEventListener(
      `click`,
      () => {
        const value = option.id;
        body.setAttribute(mod, value);
        sets.classList.remove(`active`);
        ops.classList.remove(`active`);
        localStorage.removeItem(change);
        localStorage.setItem(change, value);
      },
      false
    );
    if (localStorage.getItem(change)) {
      const newTheme = localStorage.getItem(change);
      body.setAttribute(mod, newTheme);
    }
  });
};

uiSwitcher(colors, `theme`, `class`);
uiSwitcher(fonts, `type`, `id`);
