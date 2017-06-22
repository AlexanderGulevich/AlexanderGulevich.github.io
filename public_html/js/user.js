"use strict";
(function () {
     var username=document.getElementById('username');
     var usernameButton=username.children[2];
     var usernameInput=username.children[1];
     

//     addEventListener("click", myFunction);

     usernameButton.onclick=function(){
         
       if(!((usernameInput.value).trim() === "имя")){
//          
             document.cookie="username="+usernameInput.value;
             

  
            
           
       }else if(((usernameInput.value).trim() === "имя")){
            console.log("name is found");
            alert(usernameInput.value);
       } else{
           console.log("неподдерживаемое значение");
     
       }
               
               
               
     }
   
     usernameInput.onfocus=function(){
         usernameInput.value='';
     }
//     usernameInput.onblur=function(){
//         usernameInput.value='имя';
//       
//     }
    
    
    
    
    
    
    
})()