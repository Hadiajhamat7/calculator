function toggleTheme() {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    saveThemePreference();
}

function saveThemePreference() {
    const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('calculatorTheme', theme);
}

function loadThemePreference() {
    const savedTheme = localStorage.getItem('calculatorTheme') || 'dark';
    document.body.classList.add(savedTheme);
}