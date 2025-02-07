document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.querySelector('.loader-container').style.display = 'none';
    }, 3000);
});
const categoryLinks = document.querySelectorAll('.category-link');

categoryLinks.forEach(link => {
    link.addEventListener('mouseenter', function () {
        // Hide all dropdowns first
        document.querySelectorAll('.category-dropdown').forEach(dropdown => {
            dropdown.style.opacity = '0';
            dropdown.style.visibility = 'hidden';
        });

        // Show the corresponding dropdown
        const category = this.dataset.category;
        const dropdown = document.getElementById(`${category}-dropdown`);
        if (dropdown) {
            dropdown.style.opacity = '1';
            dropdown.style.visibility = 'visible';
        }
    });
});