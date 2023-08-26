const user123 = document.getElementById("user123");
fetch("http://localhost:8080/user").then((result)=>{
    result.json().then((user)=>{
        user123.innerText = "Hi, " + user.name;
    })
})
