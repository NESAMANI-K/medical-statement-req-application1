// JavaScript function to validate form input
document.getElementById('medicalStatementForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    // Extracting input values
    const fullName = document.getElementById('fullName').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const requestDetails = document.getElementById('requestDetails').value.trim();
    const physicianName = document.getElementById('physicianName').value.trim();
    const clinicName = document.getElementById('clinicName').value.trim();

    // Validate that all fields are filled
    if (!fullName || !dob || !address || !phone || !requestDetails || !physicianName || !clinicName) {
        alert('All fields must be filled out.');
        return;
    }

    // Validate phone number to ensure it has exactly 10 digits
    if (!/^\d{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    // Validate Date of Birth format (YYYY-MM-DD)
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dob)) {
        alert('Please enter a valid date in YYYY-MM-DD format.');
        return;
    }

    // If all validations pass
    alert('Form submitted successfully!');
    this.reset(); // Reset the form after successful submission
});
