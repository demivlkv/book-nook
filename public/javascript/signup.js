// user signup form
console.log('goodbye');
async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.getElementById('username-signup').value.trim();
    const password = document.getElementById('password-signup').value.trim();
    console.log(username, password);
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
            console.log('success');
            // document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document.getElementById('signup').addEventListener('click', signupFormHandler);