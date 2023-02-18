
document.getElementById("form").addEventListener("submit", LoginSubmit)

let userdata = JSON.parse(localStorage.getItem("userdetail"))
  console.log(userdata)
// console.log(userdata.Email)

  function LoginSubmit(e){
     e.preventDefault()
   
      let obj ={
         email:form.email.value,
         password:form.password.value
      }
       if( obj.email =="" && obj.password=="" ){
          alert("Please  fill the detail");
       }
      //    check if user is match the  user data then redirect to the quiz page 
        else if(obj.email === userdata.Email && obj.password === userdata.Password ){
            alert("login sucessfull");

            window.location.href="../pages/quiz.html"
        }
         // if user is match not detail  
        else{
            alert("Invalid Credentails")
        }

     
  }