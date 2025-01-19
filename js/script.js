// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission for booking
    document.getElementById('bookingForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Check if all fields are filled
        const ownerName = document.getElementById('ownerName').value;
        const email = document.getElementById('email').value;
        const dogName = document.getElementById('dogName').value;
        const breed = document.getElementById('breed').value;
        const age = document.getElementById('age').value;

        if (ownerName && email && dogName && breed && age) {
            // Show confirmation message
            document.getElementById('confirmationMessage').style.display = 'block';
            // Hide the form
            document.getElementById('bookingForm').style.display = 'none';
        }
    });

    // Handle form submission for contact
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Check if all fields are filled
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            // Show contact confirmation message
            document.getElementById('contactConfirmation').style.display = 'block';
            // Hide the contact form
            document.getElementById('contactForm').style.display = 'none';
        }
    });
});
