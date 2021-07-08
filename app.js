// variables

// create the pop-up window
// const login = document.querySelector('#login')
// const signin = document.querySelector('#signin')

// username, password, button

const username = document.querySelector('#username');
const password = document.querySelector('#password');
const form = document.querySelector('#btn');

// event handlers

// input validation requirements
form.addEventListener('submit', (e) => {
    e.preventDefault();


});

function validate() {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue === '' || passwordValue === "") {
        alert('Do not leave blank');
        return false;
    } else {
        true;
    }
}

// The password must contain at least one number
// (?=.*[0-9])

// The password must be eight characters or longer
// (?=.{8,})