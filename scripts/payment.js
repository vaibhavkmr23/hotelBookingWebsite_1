let payEnabled = `<div>
        <a class="btn btn-success" onclick="paymentFunc()" href="payment.html">Pay Now</a>
        </div>`;
let payDisabled = `<div>
        <a class="btn btn-success disabled" href="payment.html">Pay Now</a>
        </div>`;


let payDiv = document.getElementById("pay");


if (localStorage.getItem("username") == "admin") {
    headerElement.innerHTML = logoutHeader;
    payDiv.innerHTML = payEnabled;
} 
else {
    headerElement.innerHTML = loginHeader;
    payDiv.innerHTML = payDisabled;
}

function checkUser() {
    if (localStorage.getItem("username") == "admin") {
        localStorage.removeItem("username");
        headerElement.innerHTML = loginHeader;
        payDiv.innerHTML = payDisabled;
    }
}
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") {
        localStorage.setItem("username", username);
        headerElement.innerHTML = logoutHeader;
        alert("Successfully loggedin");
        payDiv.innerHTML = payEnabled;
    } 
    else {
        alert("Username or password is wrong");
    }
}

function paymentFunc(){
    alert("Hi your booking is successfull !!");
}