document.getElementById('start-quiz').addEventListener('click', function() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.style.display = 'block';
    quizContainer.innerHTML = '<p>Quiz is starting! (Add your quiz questions here)</p>';
});

// Placeholder for future 3D model viewer integration
// You can integrate Three.js or another library here to load 3D models.

// Select the mobile menu toggle button and the navigation list
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('nav ul');

// Add a click event listener to the mobile menu toggle button
mobileMenu.addEventListener('click', () => {
    // Toggle the 'active' class on the navigation list
    navList.classList.toggle('active');
});