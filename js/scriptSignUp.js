document.getElementById('signupForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        event.preventDefault();
        errorMessage.textContent = 'As senhas não coincidem. Por favor, tente novamente.';
    } else {
        errorMessage.textContent = '';
    }
});

document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});

document.getElementById('toggleConfirmPassword').addEventListener('click', function() {
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPasswordInput.setAttribute('type', type);

    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});

