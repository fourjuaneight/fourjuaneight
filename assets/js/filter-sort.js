// Check one at a time
const checkboxes = document.getElementsByName('category');
for (let i = 0; i < checkboxes.length; i += 1) {
  if (checkboxes[i].type === 'checkbox') {
    checkboxes[i].checked = false;
  }
}
// Filter by tag
const close = document.querySelector('button.tag.close');
const cat = id => {
  const liClass = `li#record-item.${id.id}`;
  const hidden = document.querySelectorAll('li#record-item');
  const active = document.querySelectorAll(liClass);
  Array.prototype.forEach.call(checkboxes, el => {
    el.checked = false;
  });
  id.checked = true;
  hidden.forEach(hi => hi.classList.add('none'));
  active.forEach(ac => ac.classList.remove('none'));
  close.classList.add('active');
  close.setAttribute('aria-hidden', 'false');
};

const articles = document.querySelector('input#articles');
const comics = document.querySelector('input#comics');
const podcasts = document.querySelector('input#podcasts');
const tweets = document.querySelector('input#tweets');
const videos = document.querySelector('input#videos');

if (articles) {
  articles.addEventListener('click', () => {
    cat(articles);
  });
}
if (comics) {
  comics.addEventListener('click', () => {
    cat(comics);
  });
}
if (podcasts) {
  podcasts.addEventListener('click', () => {
    cat(podcasts);
  });
}
if (tweets) {
  tweets.addEventListener('click', () => {
    cat(tweets);
  });
}
if (videos) {
  videos.addEventListener('click', () => {
    cat(videos);
  });
}

if (close) {
  close.addEventListener('click', () => {
    const records = document.querySelectorAll('li#record-item');
    close.classList.remove('active');
    close.setAttribute('aria-hidden', 'true');
    records.forEach(item => {
      item.classList.remove('none');
    });
    checkboxes.forEach(box => {
      box.checked = false;
    });
  });
}

// Sort alphabetically by title
const sort = (par, atr) => {
  const ul = document.getElementById(par);
  const lis = ul.querySelectorAll('li');
  ul.classList.toggle('up');
  [].slice
    .call(lis)
    .sort((a, b) => {
      const textA = a.getAttribute(atr).toLowerCase();
      const textB = b.getAttribute(atr).toLowerCase();
      if (ul.classList.contains('up')) {
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      }
      return textA > textB ? -1 : textA < textB ? 1 : 0;
    })
    .forEach(el => {
      el.parentNode.appendChild(el);
    });
};

const title = document.querySelector('p.sort-item.title');
const creator = document.querySelector('p.sort-item.creator');
const category = document.querySelector('p.sort-item.category');

if (title) {
  title.addEventListener('click', () => {
    sort('records', 'data-title');
  });
}
if (creator) {
  creator.addEventListener('click', () => {
    sort('records', 'data-creator');
  });
}
if (category) {
  category.addEventListener('click', () => {
    sort('records', 'class');
  });
}
