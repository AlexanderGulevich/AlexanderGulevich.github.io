"use strict";
(function () {
 
   var menu=document.getElementById("menu");
//   menu.addEventListener("click",function(event){
//       alert(111);
//   });
      
   var board=false;
    
    menu.onclick=function(event){
       
       var target = event.target; // где был клик?
       console.dir(target);
       
       var targetName=target.id;
       if((targetName==="xoGame")&&(board!==true)){
           
            setBoard();
            board=true;
       } 
       else if((targetName==="seaGame")&&(board!==true)){
           
            SeArea();
            board=true;
       }
       
   }


}());
