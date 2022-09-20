// user login form
async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.getElementById('username-login').value.trim();
    const password = document.getElementById('password-login').value.trim();
        
    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // check response status
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            $('#modal').modal('show');
            $('.modal-body').html(response.statusText);
        }
    }
};

document.getElementById('login').addEventListener('click', loginFormHandler);