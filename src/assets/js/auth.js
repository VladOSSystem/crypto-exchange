let passwordInput = document.querySelector('#password');
let passwordIcon = document.querySelector('#passwordIcon');
let passwordChange = document.querySelector('#passwordChange');
let passwordIconChange = document.querySelector('#passwordIconChange');
let passwordChangeFirst = document.querySelector('#passwordChangeFirst');
let passwordIconChangeFirst = document.querySelector('#passwordIconChangeFirst');
let passwordChangeLast = document.querySelector('#passwordChangeLast');
let passwordIconChangeLast = document.querySelector('#passwordIconChangeLast')
let passwordSet = document.querySelector('#setPassword');
let passwordIconSet = document.querySelector('#passwordIconSet');
let passwordSetRepeat = document.querySelector('#setPasswordRepeat');
let passwordIconSetRepeat = document.querySelector('#passwordIconSetRepeat');

const showPassword = (arg) => {
    if (passwordInput) {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordIcon.className = 'fa-solid fa-lock-open';
        } else {
            passwordInput.type = 'password';
            passwordIcon.className = 'fa-solid fa-lock';
        }
    }

    if (passwordChange && arg === 2 || passwordSetRepeat && arg === 2) {
        if (passwordChange) {
            if (passwordChange.type === 'password') {
                passwordChange.type = 'text';
                passwordIconChange.className = 'fa-solid fa-lock-open';
            } else {
                passwordChange.type = 'password';
                passwordIconChange.className = 'fa-solid fa-lock';
            }
        }

        if (passwordSetRepeat) {
            if (passwordSetRepeat.type === 'password') {
                passwordSetRepeat.type = 'text';
                passwordIconSetRepeat.className = 'fa-solid fa-lock-open';
            } else {
                passwordSetRepeat.type = 'password';
                passwordIconSetRepeat.className = 'fa-solid fa-lock';
            }
        }
    }
    if ((passwordChangeFirst && arg === 1) || passwordSet && arg === 1) {
        if (passwordChangeFirst) {
            if (passwordChangeFirst?.type === 'password') {
                passwordChangeFirst.type = 'text';
                passwordIconChangeFirst.className = 'fa-solid fa-lock-open';
            } else {
                passwordChangeFirst.type = 'password';
                passwordIconChangeFirst.className = 'fa-solid fa-lock';
            }
        }

        if (passwordSet) {
            if (passwordSet.type === 'password') {
                passwordSet.type = 'text';
                passwordIconSet.className = 'fa-solid fa-lock-open';
            } else {
                passwordSet.type = 'password';
                passwordIconSet.className = 'fa-solid fa-lock';
            }
        }
    }

    if (passwordChangeLast && arg === 3) {
        if (passwordChangeLast.type === 'password') {
            passwordChangeLast.type = 'text';
            passwordIconChangeLast.className = 'fa-solid fa-lock-open';
        } else {
            passwordChangeLast.type = 'password';
            passwordIconChangeLast.className = 'fa-solid fa-lock';
        }
    }
    
}

