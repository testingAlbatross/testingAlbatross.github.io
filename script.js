async function displayForm() {
    const res = await fetch('http://localhost:3000/access');
    const data = await res.json();

    if (data.exists)
    {   
        const resp = 
        document.getElementById('login').innerHTML = '<h1>Username exists</h1>';
    }
    else
    {
        document.getElementById('login').innerHTML = '<h1>Login with github</h1>';
    }
}

window.addEventListener('load', displayForm);
