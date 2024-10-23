document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('loginMessage');

    // Simulated backend authentication
    authenticateUser(username, password)
        .then(response => {
            if (response.success) {
                loginMessage.textContent = 'Login successful! Redirecting...';
                loginMessage.style.color = 'green';
                // Simulate redirecting (e.g., to dashboard)
                setTimeout(() => {
                    window.location.href = 'dashboard.html'; // Change this to your target page
                }, 2000);
            } else {
                loginMessage.textContent = response.message;
                loginMessage.style.color = 'red';
            }
        })
        .catch(error => {
            loginMessage.textContent = 'An error occurred. Please try again later.';
            loginMessage.style.color = 'red';
        });
});

// Simulated function to mimic backend authentication
function authenticateUser(username, password) {
    return new Promise((resolve) => {
        // Simulate a delay for the "backend" call
        setTimeout(() => {
            const validCredentials = {
                username: 'admin',
                password: 'password123'
            };

            if (username === validCredentials.username && password === validCredentials.password) {
                resolve({ success: true });
            } else {
                resolve({ success: false, message: 'Invalid username or password. Please try again.' });
            }
        }, 1000);
    });
}
