let headerTemplate = `<header>
                <div id="header-container">
                </div>
                </header>`;
// document.getElementsByTagName("header")[0].innerHTML = headerTemplate;

let footerTemplate = `<footer>
                <div id="footer-container">
                <span class="footer-span" id="footerspan1">
                <div id="contact-div"><a class="btn btn-info btn-sm text-white" data-bs-toggle="modal"
                data-bs-target="#exampleModal-2" target="_self" id="contact-btn">Contact Us</a></div>
                    </span>

                <div id="copyright">
                <span class="footer-span" id="footerspan3">&copy; ROOM SEARCH PVT. LTD.
                </span>
                </div>
                <div id="socialmedia-logo">
                <span class="footer-span" id="footerspan2">
                <a href="https://www.facebook.com" target="_blank"><img src="assests/images/facebook.png"
                    class="footer-img"></a>
                <a href="https://www.instagram.com" target="_blank"><img src="assests/images/instagram.png"
                    class="footer-img"></a>
                <a href="https://twitter.com" target="_blank"><img src="assests/images/twitter.png"
                    class="footer-img"></a>
                </span>
                </div>
                </div>
                </footer>`;
// document.getElementsByTagName("footer")[0].innerHTML = footerTemplate;


var modalTemplate1 = `<form action="" method="get">
                <div class="modal fade" id="exampleModal-1" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">

                <div class="modal-dialog">

                <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Please Login</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" id="modal-body-1">

                <label for="username">Username:</label>
                <input type="text" name="username" id="username" placeholder="Enter Username" required><br>
                <label for="password">Password:</label>
                <input type="password" name="password" id="password" placeholder="Enter Password" autocomplete="off"
                    required><br>

                </div>
                <div class="modal-footer">
                <div class="submit-button">
                    <input type="submit" id="submit-btn-modal-1" class="btn btn-primary" onclick="login()" value="Login">
                </div>
                </div>
                </div>

                </div>
                </div>
                </form>`;


var modalTemplate2 = `<form action="" method="get">
                <div class="modal fade" id="exampleModal-2" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">

                <div class="modal-dialog">

                <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Get in touch</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" id="modal-2">
                <div>
                    <span id="p1">Thank you for reaching out!!!</span><br>
                    <span id="p2">Please enter you email and we get back to you.</span><br><br>
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" name="email" placeholder="Enter your email" required
                        autocomplete="off" /><br />
                </div>
                </div>
                <div class="modal-footer">
                <div class="submit-button">
                    <input type="submit" id="submitbtn" class="btn btn-primary" value="submit">
                </div>
                </div>
                </div>

                </div>
                </div>
                </form>`;

var bodyDiv = document.getElementsByTagName("body")[0];
bodyDiv.innerHTML = headerTemplate + bodyDiv.innerHTML + footerTemplate;
bodyDiv.innerHTML = bodyDiv.innerHTML + modalTemplate1 + modalTemplate2 ;

let loginHeader = `<a href="index.html"><img src="assests/images/logo.png" alt="logo" id="logo"/></a>
        <div id="login">
        <a class="btn btn-light btn-sm" id="login-btn" data-bs-toggle="modal" 
        data-bs-target="#exampleModal-1" onclick="checkUser()">LOGIN</a>
        </div>`;

let logoutHeader = `<a href="index.html"><img src="assests/images/logo.png" alt="logo" id="logo"/></a>
        <div id="login">
        <a class="btn btn-light btn-sm" id="login-btn"
        onclick="checkUser()">LOGOUT</a>
        </div>`;

let headerElement = document.getElementsByTagName("header")[0];
if (localStorage.getItem("username") == "admin") {
    headerElement.innerHTML = logoutHeader;
} 
else {
    headerElement.innerHTML = loginHeader;
}

function checkUser() {
    if (localStorage.getItem("username") == "admin") {
        localStorage.removeItem("username");
        headerElement.innerHTML = loginHeader;
    }
}
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") {
        localStorage.setItem("username", username);
        headerElement.innerHTML = logoutHeader;
        alert("Successfully loggedin");
    } 
    else {
        alert("Username or password is wrong");
    }
}


