document.getElementById('togglePasswordButton').addEventListener('click', function() {
    const passwordInput = document.getElementById('passwordlogin');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});
