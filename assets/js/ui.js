const body = document.querySelector(`body`);
const themeSwitcher = document.getElementById(`theme-switcher`);

if (localStorage.getItem(`color`)) {
  const newTheme = localStorage.getItem(`color`);
  body.setAttribute(`class`, newTheme);
}

themeSwitcher.onclick = () => {
  const currentTheme = body.className;
  if (currentTheme === `light`) {
    body.removeAttribute(`class`);
    body.classList.add(`dark`);
    localStorage.removeItem(`color`);
    localStorage.setItem(`color`, `dark`);
  } else if (currentTheme === `dark`) {
    body.removeAttribute(`class`);
    body.classList.add(`light`);
    localStorage.removeItem(`color`);
    localStorage.setItem(`color`, `light`);
  }
};
