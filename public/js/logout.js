// Logout

const logoutHandler = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if(response.ok) {
        alert("You've logged out");
        document.location.replace('/');
    } else {
        alert('Failed to log out - please try again')
    }
};

document.querySelector('#logout').addEventListener('click',logoutHandler);