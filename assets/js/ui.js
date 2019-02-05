let body = document.querySelector('body');
let sets = document.getElementById('settings');
let ops = document.querySelector('section.options');
const colors = document.querySelectorAll('p.colors');
const fonts = document.querySelectorAll('p.type');
sets.addEventListener('click', e => {
  ops.classList.toggle('active');
  sets.classList.toggle('active');
});
var uiSwitcher = (item,change,mod) => {
  item.forEach(option => {
    option.addEventListener("click", e => {
      e.preventDefault();
      var value = option.id;
      body.setAttribute(mod, value);
      sets.classList.remove('active');
      ops.classList.remove('active');
      localStorage.removeItem(change);
      localStorage.setItem(change, value);
    }, false);
    if (localStorage.getItem(change)) {
      var newTheme = localStorage.getItem(change);
      body.setAttribute(mod, newTheme);
    }
  })
}
uiSwitcher(colors,'theme','class');
uiSwitcher(fonts,'type','id');