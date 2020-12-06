const refs = {
  body: document.querySelector('body'),
  themeSwitch: document.querySelector('#theme-switch-toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

populateTheme();

refs.themeSwitch.addEventListener('change', saveLocalStorage);

function saveLocalStorage(event) {
  if (event.target.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
  }
  const classList = refs.body.classList;
  localStorage.setItem('theme', classList);
}

function populateTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    refs.body.classList.add(savedTheme);
    if (savedTheme === Theme.DARK) {
      refs.themeSwitch.checked = true;
    }
  }
}
