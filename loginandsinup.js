
// let sing = document.getElementById("sing");
// let login = document.getElementById("login");
// let sing_up = document.getElementById("singup");

// login.onclick = function () {
//     sing_up.innerHTML = `
//         <form id="login_in">
//             <div class="email">
//                 <span style="border: 1px solid yellow; background-color: yellow; padding: 10px;">Email</span>
//                 <input type="email" placeholder="Enter email" style="height: 35px; width: 250px; border-color: yellow;" id="userEmail">
//             </div><br>

//             <div class="pswd">
//                 <span style="border: 1px solid yellow; background-color: yellow; padding: 10px;">Password</span>
//                 <input type="password" placeholder="........" style="height: 35px; width: 230px; border-color: yellow;" id="userPswd">
//             </div><br>
//             <a class="facebook" href="https://www.facebook.com/">Connect with Facebook</a><br>
//             <button type="submit" style="height: 39px; width: 320px; background-color: yellow; display: flex; align-items: center; justify-content: center; color: white;">Log in</button>
//         </form>
//         <br>
        
//     `;

//     const loginBtn = document.getElementById("login_in");
//     loginBtn.addEventListener("submit", (e) => {
//         e.preventDefault();
//         let emailStorage = localStorage.getItem("email");
//         let pswdStorage = localStorage.getItem("pswd");
//         let inputUserEmail = document.getElementById("userEmail").value.trim();
//         let inputUserPswd = document.getElementById("userPswd").value.trim();

//         if (emailStorage === inputUserEmail && pswdStorage === inputUserPswd) {
//             alert("Login done successfully!");
//             setTimeout(() => {
//                 window.location.href = "./Home.html";
//             }, 1000);
//         } else {
//             alert("Oops, invalid credentials!");
//         }
//     });
// };

// sing.onclick = function () {
//     sing_up.innerHTML = `
//         <div id="singup">
//             <form id="signup_form">
//                 <div class="name">
//                     <span style="border: 1px solid yellow; background-color: yellow; padding: 10px;">Name</span>
//                     <input type="text" placeholder="Enter Name" style="height: 35px; width: 250px; border-color: yellow;" id="userName">
//                 </div><br>

//                 <div class="email">
//                     <span style="border: 1px solid yellow; background-color: yellow; padding: 10px;">Email</span>
//                     <input type="email" placeholder="Enter email" style="height: 35px; width: 250px; border-color: yellow;" id="userEmail">
//                 </div><br>

//                 <div class="pswd">
//                     <span style="border: 1px solid yellow; background-color: yellow; padding: 10px;">Password</span>
//                     <input type="password" placeholder="........" style="height: 35px; width: 230px; border-color: yellow;" id="userPswd">
//                 </div><br>
                
//                 <button id="lastsingup" style="height: 35px; width: 320px; background-color: yellow; display: flex; align-items: center; justify-content: center; color: white;">Sign up</button>
//             </form>
//             <br>
            
            
//         </div>
//     `;

//     const submitBtn = document.getElementById("lastsingup");
//     submitBtn.addEventListener("click", (e) => {
//         e.preventDefault();
//         const nameValue = document.getElementById("userName").value.trim();
//         const emailValue = document.getElementById("userEmail").value.trim();
//         const pswdValue = document.getElementById("userPswd").value.trim();

//         if (nameValue && emailValue && pswdValue) {
//             localStorage.setItem("name", nameValue);
//             localStorage.setItem("email", emailValue);
//             localStorage.setItem("pswd", pswdValue);
//             alert("Signup done successfully!");
//             login.onclick(); // Render the login form after successful signup
//         } else {
//             alert("Please fill all fields!");
//         }
//     });
// };



document.addEventListener('DOMContentLoaded', function() {
    let sing = document.getElementById("sing");
    let login = document.getElementById("login");
    let sing_up = document.getElementById("singup");
    
    // Set initial active tab
    sing.classList.add('active');
    login.classList.remove('active');
    
    // Handle signup tab click
    sing.onclick = function () {
        // Update active tab styling
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
                login.onclick(); // Render the login form after successful signup
            } else {
                alert("Please fill all fields!");
            }
        });
    };

    // Handle login tab click
    login.onclick = function () {
        // Update active tab styling
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
    
    // Initialize the signup form handlers
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
                login.onclick(); // Switch to login tab after successful signup
            } else {
                alert("Please fill all fields!");
            }
        });
    }
});