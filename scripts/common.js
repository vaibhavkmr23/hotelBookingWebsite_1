
if(localStorage.isLogin === "false" || localStorage.isLogin == null) {
  var headerTemplate = `<div id="header-container">
                    <a href="index.html"><img src="assests/images/logo.png" alt="logo" id="logo"/></a>
                    <div id="login">
                    <a class="btn btn-light btn-sm" id="login-btn" data-bs-toggle="modal" 
                    data-bs-target="#exampleModal-1">LOGIN</a>
                    </div>
                    </div>`;
}
else {
  headerTemplate = `<div id="header-container">
                <a href="index.html"><img src="assests/images/logo.png" alt="logo" id="logo"/></a>
                <div id="login">
                <a class="btn btn-light btn-sm" id="login-btn" 
                data-bs-target="#exampleModal-1" >LOGOUT</a>
                </div>
                </div>`;
}
let footerTemplate = `<div id="footer-container">
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
                </div>`;
document.getElementsByTagName("header")[0].innerHTML = headerTemplate;
document.getElementsByTagName("footer")[0].innerHTML = footerTemplate;
let refToMain = document.getElementById("main");
refToMain.innerHTML = refToMain.innerHTML + `
        <div class="modal fade" id="exampleModal-1" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">

        <div class="modal-dialog">

        <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Please Login</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="loginModalClose"></button>
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
  <!-- Contact Us Modal -->
  <form action="index.html" method="get">
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
                </form>`
document.querySelector("#submit-btn-modal-1").addEventListener("click", function(){
login();
})
  
document.querySelector("#login-btn").addEventListener("click", function(){
  if(localStorage.isLogin === "true"){
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.isLogin = false;
    document.querySelector("#login-btn").textContent="LOGIN";
    document.getElementById("login-btn").setAttribute("data-bs-toggle","modal");
    pay();
  }
})
  
function login(){
  if(localStorage.isLogin === "false" || localStorage.isLogin == null){
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;
    if(username === "admin" && password === "admin"){
      document.querySelector("#login-btn").innerText="LOGOUT";
      localStorage.isLogin = true;
      localStorage.username = username;
      localStorage.password = password;
      alert("successfully LoggedIn");
      document.querySelector("#loginModalClose").click();
      document.querySelector("#login-btn").dataset.toggle = "modal";
      document.getElementById("login-btn").removeAttribute("data-bs-toggle");
      pay();
    }
    else {
      alert('Username/Password is incorrect. Please try again!')
    }
  }
}