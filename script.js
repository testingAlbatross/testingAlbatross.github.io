async function displayForm() {
    const res = await fetch('http://localhost:3000/access', {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await res.json();
    console.log(data);
    if (data.exists)
    {  
        document.getElementById('login').innerHTML = '<h1>Username exists</h1>';
    }
    else
    {
        document.getElementById('login').innerHTML = '<h1>Login with github</h1>';
    }
}

window.addEventListener('load', displayForm);
