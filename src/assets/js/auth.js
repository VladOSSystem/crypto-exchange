let passwordInput = document.querySelector('#password');
let passwordIcon = document.querySelector('#passwordIcon');

const showPassword = () => {

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordIcon.className = 'fa-solid fa-lock-open';
    } else {
        passwordInput.type = 'password';
        passwordIcon.className = 'fa-solid fa-lock';

    }
}

const checkRegister = () => {
    console.log('here')
    const proceed = true;
    const signUp = document.querySelector('.signUp');
    const successModal = document.querySelector('.showToggle');

    if (proceed) {
        signUp.style.display = 'none';
        successModal.style.display = 'block';
    }
}