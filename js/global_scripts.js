
// On every site.
function loadNavbar() {
    fetch('nav/nav.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
};

// Loads navbar on every page and saves users light/dark theme.
window.onload = () => {
    console.log("hello")
    loadNavbar();
    applySavedTheme();
};

// Apply saved theme from localStorage
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light-theme';
    document.body.classList.add(savedTheme);
};

// Theme toggle functionality
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', () => {
    const bodyElement = document.body;
    if (bodyElement.classList.contains('light-theme')) {
        bodyElement.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    } else if (bodyElement.classList.contains('dark-theme')) {
        bodyElement.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', 'light-theme');
    }
});
