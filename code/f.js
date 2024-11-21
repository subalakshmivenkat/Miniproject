document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Gather input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    // Here you can send the feedback data to your server or API
    console.log("Feedback submitted:", { name, email, feedback });

    // Show thank you message and reset the form
    document.getElementById('thank-you-message').classList.remove('hidden');
    document.getElementById('feedback-form').reset();
});
