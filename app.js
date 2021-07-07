// variables

// create the pop-up window
// const login = document.querySelector('#login')
// const signin = document.querySelector('#signin')

const username = document.querySelector('input[name="username"]')
const password = document.querySelector('input[name="password"]')
const form = document.querySelector('form')

// event handlers

// input validation requirements
form.addEventListener('submit', listener:(Event: Event) => {
    event.preventDefault();
    if (isEmpty (username.value)) {
        showError (username, 'Please enter your name');
    } else {
        login (username.value);
    }
});