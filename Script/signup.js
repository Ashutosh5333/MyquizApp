
document.getElementById("form").addEventListener("submit", Signupsubmit)

function Signupsubmit(e){
 e.preventDefault()
//   console.log("hello")
 
    let userdata ={
      Name:form.username.value,
      Email:form.useremail.value,
      Password:form.userpassword.value,
      confirm:form.confirm.value
    }

            //  if user is not fill any field  then user is  not able to signup
 
    if( userdata.Name =="" && userdata.Email=="" && userdata.Password=="" && userdata.confirm==""  ){
      alert("Please  fill the detail")
   }
     else if(userdata.Password === userdata.confirm ){
        //  store the user data  
        localStorage.setItem("userdetail", JSON.stringify(userdata));
        alert("user registered sucessfully")
       window.location.href="../pages/login.html"
     }else{
         alert("Password Wrong")
     }
  
     form.reset()
  
}