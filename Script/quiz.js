   
      let QuesData = JSON.parse(localStorage.getItem("data"))||[]

    //   console.log("quesarr" ,QuesData)


     let Question = document.getElementById("ques")
     const optionOne = document.getElementById("optionOne")
      const optiontwo = document.getElementById("optiontwo")
      const optionthree = document.getElementById("optionthree")
      const optionFour = document.getElementById("optionFour")
      const Next = document.getElementById("next")
      const Skip = document.getElementById("skip")

       let answer = document.querySelectorAll(".checkresult")
    
       

    let quizScore = 0

     let questionNo =0

    //  ---------------- Display data  ----------- // 

     const Displayquestions = () =>{
         let first = QuesData[questionNo]
         Question.innerHTML=`  ${first.ques}`
         optionOne.innerHTML=first.optionA
         optiontwo.innerHTML=first.optionB
         optionthree.innerHTML=first.optionC
         optionFour.innerHTML=first.optionD
         
     }
      Displayquestions()
     
       const CheckkingAnswer = () =>{
         let ans ;

          answer.forEach((cur) =>{
              if(cur.checked){
                ans=cur.id
              }
          })
         return ans         
       }

       const Unchecked = () =>{
           answer.forEach((cur) => cur.checked=false )
       }

      //  ------------------ Next question and  incesrese score ------------------ //

      Next.addEventListener("click", () =>{
           const checkedans = CheckkingAnswer()
           console.log(checkedans)

           if(checkedans === QuesData[questionNo].answer ){
            quizScore++
           }
           questionNo++
            Unchecked()

             if(questionNo<QuesData.length){
                 Displayquestions()
             }
             else{
                localStorage.setItem("score", JSON.stringify(quizScore))
                 alert("your record has been submitted")
                 window.location.href="../pages/Report.html"
             }

      })

      // ----------------- Skip question ------------ //

       Skip.addEventListener("click", () =>{
         if(questionNo<QuesData.length){
             questionNo++
             Displayquestions()
         }
       })

