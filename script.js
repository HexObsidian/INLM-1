let goodusername = "test";
let goodpassword = "1234";
let login = document.createElement("h1");
let divlogin = document.getElementById("login");
let button1 = document.getElementById("button1");
let loggedin = false;
divlogin.appendChild(login);



if (localStorage.getItem("username") === goodusername && localStorage.getItem("userpassword") === goodpassword)
{
    login.innerText = "Welcome back " + goodusername + ".";
    button1.innerText = "Log out";
    loggedin = true;
}

if (localStorage.getItem("username") !== goodusername || localStorage.getItem("userpassword") !== goodpassword)
{
    login.innerText = "";
    button1.innerText = "Log in";
    loggedin = false;
}


function DualPurposeLogin(){
    if (loggedin == false)
    {
        let username = document.getElementById('inputname').value;
        let userpassword = document.getElementById('inputpass').value;

        localStorage.setItem("username", username)
        localStorage.setItem("userpassword", userpassword)

        if (localStorage.getItem("username") == goodusername && localStorage.getItem("userpassword") == goodpassword)
        {
            login.innerText = "Welcome back " + localStorage.getItem("username") + ".";
            button1.innerText = "Log out";
            loggedin = true;
        }

        else if (localStorage.getItem("username") !== goodusername || localStorage.getItem("userpassword") !== goodpassword)
        {
            login.innerText = "Sorry, your login was wrong. Please double check your username and password."
            localStorage.removeItem("username");
            localStorage.removeItem("userpassword");
            loggedin = false;
        }
    }
    else if (loggedin == true)
    {
        localStorage.removeItem("username");
        localStorage.removeItem("userpassword");
        login.innerText = "";
        button1.innerText = "Log in";
        loggedin = false;

    }
}