let sing=document.getElementById("sing")
let login=document.getElementById("login")
let sing_up = document.getElementById("singup")

login.onclick=function()
{

{
    sing_up.innerHTML=`
   
   <div id="singup">
            <form>
                   <div class="email">
                    <span style="border: 1px solid yellow; background-color: yellow; padding: 10px;">Email</span>
                    <input type="email" placeholder="Enter email" style="height: 35px; width: 250px;border-color: yellow;">
                    </div><br>

                <div class="pswd">
                    <span style="border: 1px solid yellow; background-color: yellow; padding: 10px;">password</span>
                    <input type="password" placeholder="........" style="height: 35px; width: 230px;border-color: yellow;">
                </div>
            </form><br>
                <a class="facebook"  href="https://www.facebook.com/">Connect with Facebook</a><br>
                <a class="Twitter"  href="https://www.facebook.com/">Connect with Facebook</a><br><br><br>
            
                
                <p id="button" style="height: 39px; width: 320px; background-color: yellow; display: flex; align-items: center; justify-content: center; color: white;">log in</p>

            </div>

    
    `
}
}
sing.onclick=function()
{
   sing_up.innerHTML=` <div id="singup">
            <form>
                <div class="name">
                <span style="border: 1px solid yellow; background-color: yellow; padding: 10px;">Name</span>
                <input type="text" placeholder="Enter Name" style="height: 35px; width: 250px;border-color: yellow;">
                </div><br>


                <div class="email">
                    <span style="border: 1px solid yellow; background-color: yellow; padding: 10px;">Email</span>
                    <input type="email" placeholder="Enter email" style="height: 35px; width: 250px;border-color: yellow;">
                    </div><br>

                <div class="pswd">
                    <span style="border: 1px solid yellow; background-color: yellow; padding: 10px;">password</span>
                    <input type="password" placeholder="........" style="height: 35px; width: 230px;border-color: yellow;">
                </div>
            </form><br>
                <a class="facebook"  href="https://www.facebook.com/">Connect with Facebook</a><br>
                <a class="Twitter"  href="https://www.facebook.com/">Connect with Facebook</a>
            
                
                <p style="height: 37px; width: 320px; background-color: yellow; display: flex; align-items: center; justify-content: center; color: white;">Sign up</p>

            </div>`
}



let submitBtn=document.getElementById("lastsingup");
let name1=document.getElementById("userName");
let email=document.getElementById("userEmail");
let pswd=document.getElementById("userPswd");
submitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
      const nameValue=name1.value
      const emailValue=email.value
      const pswdValue=pswd.value
      console.log(nameValue);
      localStorage.setItem("name",nameValue)
      localStorage.setItem("email",emailValue)
      localStorage.setItem("pswd",pswdValue)
      alert("signup done successfully!!!!!!!")
      console.log(nameValue)
      
      sing_up.innerHTML=`
   
      <div id="singup">
               <form>
                      <div class="email">
                       <span style="border: 1px solid yellow; background-color: yellow; padding: 10px;">Email</span>
                       <input type="email" placeholder="Enter email" style="height: 35px; width: 250px;border-color: yellow;">
                       </div><br>
   
                   <div class="pswd">
                       <span style="border: 1px solid yellow; background-color: yellow; padding: 10px;">password</span>
                       <input type="password" placeholder="........" style="height: 35px; width: 230px;border-color: yellow;">
                   </div>
               </form><br>
                   <a class="facebook"  href="https://www.facebook.com/">Connect with Facebook</a><br>
                   <a class="Twitter"  href="https://www.facebook.com/">Connect with Facebook</a><br><br><br>
               
                   
                   <p id="button" style="height: 39px; width: 320px; background-color: yellow; display: flex; align-items: center; justify-content: center; color: white;">log in</p>
   
               </div>`
   

}























})


const loginBtn = document.getElementById("button")
        
loginBtn.addEventListener("click", () => {

    let nameStorage = localStorage.getItem("name");
    let pswdStorage = localStorage.getItem("pswd");
    let inputUserName = document.getElementById("userName").value
    let inputUserPswd = document.getElementById("userPswd").value
    if (nameStorage == inputUserName && pswdStorage == inputUserPswd) {
        alert("login done successfully !!!!!!!!!")
       setTimeout(()=>{
        window.open("task1.html")
       },5000)
    }else{
        alert("oops invalid crdentials")
    }
})
      
