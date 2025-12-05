
document.addEventListener("DOMContentLoaded", () => {
    const words = document.querySelectorAll('.nav-link'); // Select all navigation links
    words.forEach(word => {
        const originalText = word.textContent; // Store original text
        const originalColor = window.getComputedStyle(word).color; // Store original color
        word.addEventListener('mouseenter', () => {
           // word.textContent = '"' + originalText + '"'; // // Add quotation marks
            word.style.color = 'rgb(186, 26, 66)'; // Change to highlight color
        });
        word.addEventListener('mouseleave', () => {
            word.textContent = originalText; // Revert to original text
            word.style.color = originalColor; // Revert to original color
        });
    });
});

// Menu Toggle Functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});