const users =[
    {
        username: 123,
        password: "Password1"
    },
    {
        username: 456,
        password: "Password2"
    },
    {
        username: 789,
        password: "Password3"
    }
]

function login(){

    console.log("Clicked");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    // console.log(username.value);
    // console.log(password.value);
    let loggedIn = false;
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if(user.username == username.value && user.password == password.value){
            loggedIn = true;
            console.log("Login Successful");
            location.href="./helloUser.html";
        }
    }
    if(!loggedIn){
        alert("Invalid Credential");
    }

}