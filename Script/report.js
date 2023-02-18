
//    -----------  question data  ------------------- //

      let QuesData = JSON.parse(localStorage.getItem("data"))||[]
      //  console.log(QuesData)


      //   ---------------- quiz score ------------- //
        let quizscore = JSON.parse(localStorage.getItem("score")) 


      //    ----------- logegd user ------------ //

      let userName = JSON.parse(localStorage.getItem("userdetail")) || "";




//  ---------------- checking condition  ------------------- //
          var fillColor;
          var color;

         if(quizscore < 5){
          fillColor = quizscore*10;
          color = 'red'
         }
         else{
         fillColor = quizscore*10;
         color = "green"
         }


         


 const  data = () =>{
      
 let  h1 = document.createElement("h1")
      h1.innerText=`Your Score ${quizscore} is out of ${QuesData.length} `
  document.getElementById("reportdata").append(h1)

}
      data()
      
      

// ----------------- display result --------------------  //

const display = ()=>{
      let h2 = document.createElement("h2");
      let p = document.createElement("p");
      if(quizscore >= 5){
            h2.innerText = `Hey ${userName.Name} Congrats! You are pass.`
      }
      else{
          h2.innerText = ` Hey ${userName.Name} Oops! You are fail.`
      }
      p.innerText  = `Score : ${quizscore}`
      document.getElementById('resultDetail').append(h2,p);
      
}
display()


// ----------- redirect button function home and play again  ----------------- 
   function playagain(){
      //  console.log("hello")
        window.location.href="../pages/quiz.html"
   }
  
    function playhome(){
         window.location.href="../index.html"
    }

