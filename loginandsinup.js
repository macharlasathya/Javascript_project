
document.addEventListener('DOMContentLoaded', function() {
    let sing = document.getElementById("sing");
    let login = document.getElementById("login");
    let sing_up = document.getElementById("singup");
    
 
    sing.classList.add('active');
    login.classList.remove('active');
    
  
    sing.onclick = function () {
        
        sing.classList.add('active');
        login.classList.remove('active');
        
        sing_up.innerHTML = `
            <form id="signup-form">
                <div class="input-group">
                    <div class="input-label">Name</div>
                    <input type="text" id="userName" placeholder="Enter your name">
                </div>
                
                <div class="input-group">
                    <div class="input-label">Email</div>
                    <input type="email" id="userEmail" placeholder="Enter your email">
                </div>
                
                <div class="input-group">
                    <div class="input-label">Password</div>
                    <input type="password" id="userPswd" placeholder="Enter your password">
                </div>
                
                <button id="lastsingup" class="primary-btn" type="submit">
                    Sign Up <i class="fas fa-arrow-right"></i>
                </button>
                
                <div class="guest-login">
                    <a href="./index.html" id="guestLogin" class="secondary-btn">
                        Continue as Guest
                    </a>
                </div>
            </form>
        `;

        const submitBtn = document.getElementById("lastsingup");
        submitBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const nameValue = document.getElementById("userName").value.trim();
            const emailValue = document.getElementById("userEmail").value.trim();
            const pswdValue = document.getElementById("userPswd").value.trim();

            if (nameValue && emailValue && pswdValue) {
                localStorage.setItem("name", nameValue);
                localStorage.setItem("email", emailValue);
                localStorage.setItem("pswd", pswdValue);
                alert("Signup done successfully!");
                login.onclick(); 
            } else {
                alert("Please fill all fields!");
            }
        });
    };

    
    login.onclick = function () {
        
        login.classList.add('active');
        sing.classList.remove('active');
        
        sing_up.innerHTML = `
            <form id="login-form">
                <div class="input-group">
                    <div class="input-label">Email</div>
                    <input type="email" id="userEmail" placeholder="Enter your email">
                </div>
                
                <div class="input-group">
                    <div class="input-label">Password</div>
                    <input type="password" id="userPswd" placeholder="Enter your password">
                </div>
                
                <button type="submit" class="primary-btn">
                    Log In <i class="fas fa-arrow-right"></i>
                </button>
                
                <div class="guest-login">
                    <a href="./index.html" id="guestLogin" class="secondary-btn">
                        Continue as Guest
                    </a>
                </div>
                
                <div style="text-align: center; margin-top: 20px;">
                    <a class="facebook" href="https://www.facebook.com/">
                        <i class="fab fa-facebook-f"></i>&nbsp; Connect with Facebook
                    </a>
                </div>
            </form>
        `;

        const loginForm = document.getElementById("login-form");
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            let emailStorage = localStorage.getItem("email");
            let pswdStorage = localStorage.getItem("pswd");
            let inputUserEmail = document.getElementById("userEmail").value.trim();
            let inputUserPswd = document.getElementById("userPswd").value.trim();

            if (emailStorage === inputUserEmail && pswdStorage === inputUserPswd) {
                alert("Login done successfully!");
                setTimeout(() => {
                    window.location.href = "./index.html";
                }, 1000);
            } else {
                alert("Oops, invalid credentials!");
            }
        });
    };
    
   
    const initialSignupBtn = document.getElementById("lastsingup");
    if (initialSignupBtn) {
        initialSignupBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const nameValue = document.getElementById("userName").value.trim();
            const emailValue = document.getElementById("userEmail").value.trim();
            const pswdValue = document.getElementById("userPswd").value.trim();

            if (nameValue && emailValue && pswdValue) {
                localStorage.setItem("name", nameValue);
                localStorage.setItem("email", emailValue);
                localStorage.setItem("pswd", pswdValue);
                alert("Signup done successfully!");
                login.onclick(); 
            } else {
                alert("Please fill all fields!");
            }
        });
    }
});