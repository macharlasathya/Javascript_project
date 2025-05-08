
let sing = document.getElementById("sing");
let login = document.getElementById("login");
let sing_up = document.getElementById("singup");

login.onclick = function () {
    sing_up.innerHTML = `
        <form id="login_in">
            <div class="email">
                <span style="border: 1px solid yellow; background-color: yellow; padding: 10px;">Email</span>
                <input type="email" placeholder="Enter email" style="height: 35px; width: 250px; border-color: yellow;" id="userEmail">
            </div><br>

            <div class="pswd">
                <span style="border: 1px solid yellow; background-color: yellow; padding: 10px;">Password</span>
                <input type="password" placeholder="........" style="height: 35px; width: 230px; border-color: yellow;" id="userPswd">
            </div><br>
            <a class="facebook" href="https://www.facebook.com/">Connect with Facebook</a><br>
            <button type="submit" style="height: 39px; width: 320px; background-color: yellow; display: flex; align-items: center; justify-content: center; color: white;">Log in</button>
        </form>
        <br>
        
    `;

    const loginBtn = document.getElementById("login_in");
    loginBtn.addEventListener("submit", (e) => {
        e.preventDefault();
        let emailStorage = localStorage.getItem("email");
        let pswdStorage = localStorage.getItem("pswd");
        let inputUserEmail = document.getElementById("userEmail").value.trim();
        let inputUserPswd = document.getElementById("userPswd").value.trim();

        if (emailStorage === inputUserEmail && pswdStorage === inputUserPswd) {
            alert("Login done successfully!");
            setTimeout(() => {
                window.location.href = "./Home.html";
            }, 1000);
        } else {
            alert("Oops, invalid credentials!");
        }
    });
};

sing.onclick = function () {
    sing_up.innerHTML = `
        <div id="singup">
            <form id="signup_form">
                <div class="name">
                    <span style="border: 1px solid yellow; background-color: yellow; padding: 10px;">Name</span>
                    <input type="text" placeholder="Enter Name" style="height: 35px; width: 250px; border-color: yellow;" id="userName">
                </div><br>

                <div class="email">
                    <span style="border: 1px solid yellow; background-color: yellow; padding: 10px;">Email</span>
                    <input type="email" placeholder="Enter email" style="height: 35px; width: 250px; border-color: yellow;" id="userEmail">
                </div><br>

                <div class="pswd">
                    <span style="border: 1px solid yellow; background-color: yellow; padding: 10px;">Password</span>
                    <input type="password" placeholder="........" style="height: 35px; width: 230px; border-color: yellow;" id="userPswd">
                </div><br>
                
                <button id="lastsingup" style="height: 35px; width: 320px; background-color: yellow; display: flex; align-items: center; justify-content: center; color: white;">Sign up</button>
            </form>
            <br>
            
            
        </div>
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

