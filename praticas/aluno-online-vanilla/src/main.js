document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const emailError = document.getElementById('emailError');
    const senhaError = document.getElementById('senhaError');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let isValid = true;

        if (!emailInput.value.trim()) {
            emailError.textContent = 'O campo de email é obrigatório.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        if (!senhaInput.value.trim()) {
            senhaError.textContent = 'O campo de senha é obrigatório.';
            isValid = false;
        } else {
            senhaError.textContent = '';
        }

        if (isValid) {
            window.location.href = 'index.html';
        }
    });

    emailInput.addEventListener('input', () => {
        if (emailInput.value.trim()) emailError.textContent = '';
    });

    senhaInput.addEventListener('input', () => {
        if (senhaInput.value.trim()) senhaError.textContent = '';
    });
});