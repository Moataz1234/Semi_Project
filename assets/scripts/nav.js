const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const categoryLinks = document.querySelectorAll(".category-link"); // All category links
    const dropdowns = document.querySelectorAll(".category-dropdown"); // All dropdowns

    categoryLinks.forEach(link => {
        const category = link.getAttribute("data-category"); // Get category name
        const dropdown = document.getElementById(`${category}-dropdown`); // Find the corresponding dropdown

        if (dropdown) {
            link.addEventListener("mouseenter", function () {
                // Hide all dropdowns first
                dropdowns.forEach(d => {
                    d.style.opacity = "0";
                    d.style.visibility = "hidden";
                });

                // Show only the relevant dropdown
                dropdown.style.opacity = "1";
                dropdown.style.visibility = "visible";
            });

            dropdown.addEventListener("mouseleave", function () {
                // Hide the dropdown when the mouse leaves
                dropdown.style.opacity = "0";
                dropdown.style.visibility = "hidden";
            });

            link.addEventListener("mouseleave", function () {
                // Hide dropdown only if the user does not enter it
                setTimeout(() => {
                    if (!dropdown.matches(":hover")) {
                        dropdown.style.opacity = "0";
                        dropdown.style.visibility = "hidden";
                    }
                }, 200);
            });
        }
    });

    // Hide all dropdowns when mouse leaves the entire nav
    document.querySelector(".category_header").addEventListener("mouseleave", function () {
        dropdowns.forEach(d => {
            d.style.opacity = "0";
            d.style.visibility = "hidden";
        });
    });
});