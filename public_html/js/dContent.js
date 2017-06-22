"use strict";
(function () {
 
   var menu=document.getElementById("menu");
//   menu.addEventListener("click",function(event){
//       alert(111);
//   });
      
    
    dynamicContent.board=false;
    
    menu.onclick=function(event){
       
       var target = event.target; // где был клик?
       console.dir(target);
       
       var targetName=target.id;
       if((targetName==="xoGame")&&(dynamicContent.board!==true)){
           
            setBoard();
            dynamicContent.board=true;
       } 
       else if((targetName==="seaGame")&&(dynamicContent.board!==true)){
           
            SeArea();
            dynamicContent.board=true;
       }
       
   }


}());
