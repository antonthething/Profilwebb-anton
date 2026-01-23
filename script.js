function toggleDarkMode() {
    document.body.classList.toggle('dark');
}
document.querySelector('#darkBtn').addEventListener('click', toggleDarkMode);