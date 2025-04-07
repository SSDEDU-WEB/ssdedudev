// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetPage = event.target.getAttribute('href');
        window.location.href = targetPage; // Redirect smoothly
    });
});

// Dynamic greeting based on time of day
document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.querySelector('header h1');
    const hours = new Date().getHours();
    if (hours < 12) {
        greetingElement.textContent = 'Good Morning, I\'m Andy Torres!';
    } else if (hours < 18) {
        greetingElement.textContent = 'Good Afternoon, I\'m Andy Torres!';
    } else {
        greetingElement.textContent = 'Good Evening, I\'m Andy Torres!';
    }
});

// Profile image hover effect
const profileImage = document.querySelector('.profile-image');
profileImage.addEventListener('mouseover', () => {
    profileImage.style.transform = 'scale(1.1)';
    profileImage.style.transition = 'transform 0.3s ease-in-out';
});
profileImage.addEventListener('mouseout', () => {
    profileImage.style.transform = 'scale(1)';
});
