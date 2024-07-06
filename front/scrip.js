async function getUser(){
    const data={email'email@email.com', password: '123'}
    const response= await fetch('http://localhost:300/api/login'{
    method: "POST",
    Headers: {"Content-Type":"application/js"},
    body: JSON.stringify(data)
    });