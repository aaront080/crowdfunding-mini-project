// Login 
const loginHandler = async (event) => {
    event.prevenDefault();
    const email = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#login-password').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert(`You're successfully logged in`)
            document.location.replace('/');
        } else {
            alert(`Login failed - check your email and password`);
        }
    }
}

// Sign up (create a new account)

const signUpHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#signup-name').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            header: { 'Content-Type': 'application/json' }
        });
    
        if (response.ok) {
            alert(`You're successfully signed up!`);
            document.logaction.replace('/');
        } else {
            alert(`Signup failed - check your email and password and try again`)
        }
    }
};

// Map the functions to the event

document.querySelector('.login-button').addEventlistner('click', loginHandler);

document.querySelector('.signup-button').addEventListener('click',signUpHandler);