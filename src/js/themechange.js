
let localStorageTheme = localStorage.getItem('theme');
const switcher = document.querySelector('#theme');
document.documentElement.getAttribute('data-theme');

switcher.addEventListener('click', () => {
    switcher.checked ? setDarkTheme() : setLightTheme();
});

function setThemeColor(){
    localStorageTheme === 'dark' ? setDarkTheme() : setLightTheme();
};


function setDarkTheme() {
    switcher.checked = true;
    localStorage.setItem('theme', 'dark');
   document.documentElement.setAttribute('data-theme','dark');
};

function setLightTheme() {
    switcher.checked = false;
    localStorage.setItem('theme', 'light');
document.documentElement.setAttribute('data-theme','light');
}

setThemeColor();