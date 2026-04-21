// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    // Toggle Sidebar Visibility
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });

    // Example: Dynamic greeting based on time
    const mainHeading = document.querySelector('h1');
    const hour = new Date().getHours();
    
    if (hour < 12) {
        mainHeading.textContent = "Good Morning! Welcome to the Platform";
    } else if (hour < 18) {
        mainHeading.textContent = "Good Afternoon! Welcome to the Platform";
    } else {
        mainHeading.textContent = "Good Evening! Welcome to the Platform";
    }
});