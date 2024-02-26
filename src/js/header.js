const menu = document.getElementById('burger-menu');

const onOpen = () => {
  menu.classList.add('is-open');
};

const onClose = () => {
  menu.classList.remove('is-open');
};

// Theme switcher in header

const themeSwitch = document.getElementById('themeSwitch');

// When loading the page, we check the saved topic
window.addEventListener('DOMContentLoaded', function () {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'dark-theme') {
      themeSwitch.checked = true;
    }
  }
});

// When the switch state changes
themeSwitch.addEventListener('change', function () {
  if (this.checked) {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
  }
});
