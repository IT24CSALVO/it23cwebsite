document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting the default way
    const username = document.getElementById('username').value.trim(); // Trim whitespace
    const password = document.getElementById('password').value.trim(); // Trim whitespace

    // TO DO: Implement authentication logic here
    // For demonstration purposes, we'll assume a successful login
    if (username === 'admin' && password === 'password') {
        // Redirect to homepage
        window.location.href = 'Homepage.html';
    } else {
        alert('Invalid username or password');
    }
});
