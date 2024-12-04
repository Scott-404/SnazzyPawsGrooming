document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

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
