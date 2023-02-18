
document.getElementById("form").addEventListener("submit", LoginSubmit)

let userdata = JSON.parse(localStorage.getItem("userdetail"))
//   console.log(userdata)

  function LoginSubmit(e){
     e.preventDefault()
   
      let obj ={
         email:form.email.value,
         password:form.password.value
      }
       if( obj.email =="" && obj.password=="" ){
          alert("Please  fill the detail")
       }
        else if(obj.email === userdata.Email && obj.password=== userdata.Password ){
            alert("login sucessfull")
            window.location.href="../pages/quiz.html"
        }
        else if(obj.email !==userdata.Email && obj.password !== userdata.Password ) {
            alert("Invalid Credentails")
        }
        else{
            alert("Invalid Credentails")
        }

     
  }