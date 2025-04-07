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

// Initialize EmailJS
emailjs.init("your_public_key"); // Replace with your EmailJS public key

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const serviceID = "your_service_id"; // Replace with your EmailJS service ID
    const templateID = "your_template_id"; // Replace with your EmailJS template ID

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, formData)
        .then(response => {
            alert("Message sent successfully!");
            console.log("EmailJS Response:", response);
            // Optionally, clear the form fields
            document.getElementById("contact-form").reset();
        })
        .catch(error => {
            alert("Failed to send message. Please try again.");
            console.error("EmailJS Error:", error);
        });
});
