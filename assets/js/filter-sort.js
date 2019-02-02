// Filter by tag
let checkboxes = document.getElementsByName('category');
for (var i=0; i<checkboxes.length; i++) {
  if (checkboxes[i].type == 'checkbox') {
    checkboxes[i].checked = false;
  }
}
var cat = (id) => {
  let category = document.getElementsByName('category');
  const liClass = 'li#record-item.' + id.id;
  const hidden = document.querySelectorAll('li#record-item');
  const active = document.querySelectorAll(liClass);
  Array.prototype.forEach.call(category,el => {
    el.checked = false;
  });
  id.checked = true;
  hidden.forEach(hi => hi.classList.add('none'));
  active.forEach(ac => ac.classList.remove('none'));
}
// Sort alphabetically by title
var sort = (par, atr) => {
  let ul = document.getElementById(par);
  const lis = ul.querySelectorAll("li");
  ul.classList.toggle('up');
  [].slice
    .call(lis)
    .sort((a,b) => {
      const textA = a.getAttribute(atr).toLowerCase();
      const textB = b.getAttribute(atr).toLowerCase();
      if (ul.classList.contains('up')) {
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      } else {
        return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
      }
    })
    .forEach(el => {
      el.parentNode.appendChild(el);
    });
}