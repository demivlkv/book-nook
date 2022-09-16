// user signup form
async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.getElementById('username-signup').value.trim();
    const password = document.getElementById('password-signup').value.trim();

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        // check response status
        if (response.ok) {
            console.log('success');
            document.location.replace('/dashboard/');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#signup').addEventListener('submit', signupFormHandler);