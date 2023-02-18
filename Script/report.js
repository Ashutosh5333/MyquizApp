
   
      let QuesData = JSON.parse(localStorage.getItem("data"))||[]

      //  console.log(QuesData)

        let quizscore = JSON.parse(localStorage.getItem("score")) 
   

      let userName = JSON.parse(localStorage.getItem("user")) || "";




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


         
	var path =
      '<svg viewbox="0 0 36 36" class="circular-chart ' +
       color +
      '"> \
<path class="circle-bg" \
d="M18 2.0845 \
a 15.9155 15.9155 0 0 1 0 31.831 \
a 15.9155 15.9155 0 0 1 0 -31.831" \
/> \
<path class="circle" \
stroke-dasharray="' +
       fillColor +
      ', 100" \
d="M18 2.0845 \
a 15.9155 15.9155 0 0 1 0 31.831 \
a 15.9155 15.9155 0 0 1 0 -31.831" \
/> \
<text x="19" y="21" id="percentage">' +
      fillColor +
      '%</text> \
</svg>';
document.getElementById("report").innerHTML = path;

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

