let passwordInput = document.querySelector('#password');
let passwordIcon = document.querySelector('#passwordIcon');
let passwordChange = document.querySelector('#passwordChange');
let passwordIconChange = document.querySelector('#passwordIconChange');
let passwordChangeFirst = document.querySelector('#passwordChangeFirst');
let passwordIconChangeFirst = document.querySelector('#passwordIconChangeFirst');

const showPassword = (arg) => {
    console.log(arg)
    if (passwordInput) {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordIcon.className = 'fa-solid fa-lock-open';
        } else {
            passwordInput.type = 'password';
            passwordIcon.className = 'fa-solid fa-lock';
        }
    }

    if (passwordChange && arg === 2) {
        if (passwordChange.type === 'password') {
            passwordChange.type = 'text';
            passwordIconChange.className = 'fa-solid fa-lock-open';
        } else {
            passwordChange.type = 'password';
            passwordIconChange.className = 'fa-solid fa-lock';
        }
    }
    if (passwordChangeFirst && arg === 1) {
        if (passwordChangeFirst.type === 'password') {
            passwordChangeFirst.type = 'text';
            passwordIconChangeFirst.className = 'fa-solid fa-lock-open';
        } else {
            passwordChangeFirst.type = 'password';
            passwordIconChangeFirst.className = 'fa-solid fa-lock';
        }
    }
}

const checkRegister = () => {
    const proceed = true;
    const signUp = document.querySelector('.signUp');
    const successModal = document.querySelector('.showToggle');

    if (proceed) {
        signUp.style.display = 'none';
        successModal.style.display = 'block';
    }
}