document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".magnify-container");
    const image = document.querySelector(".magnify-image");
    const glass = document.querySelector(".magnify-glass");

    // Show magnifying glass on mouse enter
    container.addEventListener("mouseenter", () => {
        glass.style.display = "block";
    });

    // Hide magnifying glass on mouse leave
    container.addEventListener("mouseleave", () => {
        glass.style.display = "none";
    });

    // Move magnifying glass with mouse
    container.addEventListener("mousemove", (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left; // Mouse X position relative to the container
        const y = e.clientY - rect.top; // Mouse Y position relative to the container

        // Ensure the magnifying glass stays within the image boundaries
        const glassWidth = glass.offsetWidth;
        const glassHeight = glass.offsetHeight;

        let glassX = x - glassWidth / 2;
        let glassY = y - glassHeight / 2;

        if (glassX < 0) glassX = 0;
        if (glassY < 0) glassY = 0;
        if (glassX > rect.width - glassWidth) glassX = rect.width - glassWidth;
        if (glassY > rect.height - glassHeight) glassY = rect.height - glassHeight;

        // Position the magnifying glass
        glass.style.left = `${glassX}px`;
        glass.style.top = `${glassY}px`;

        // Calculate the background position for the zoom effect
        const bgX = (x / rect.width) * 100;
        const bgY = (y / rect.height) * 100;

        // Apply the zoomed background to the magnifying glass
        glass.style.backgroundImage = `url('${image.src}')`;
        glass.style.backgroundPosition = `${bgX}% ${bgY}%`;
    });
});