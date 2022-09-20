// user signup form
async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.getElementById('username-signup').value.trim();
    const password = document.getElementById('password-signup').value.trim();

    if (username && password) {
        
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        // check response status
        if (response.ok) {
            window.location.assign('/dashboard');
        } else {
            $('#modal').modal('show');
            $('.modal-body').html(response.statusText);
        }
    }
};

document.getElementById('signup').addEventListener('click', signupFormHandler);