"use strict";
function SeArea(){

//    var  boardForSea=document.getElementById("boardForSea");
//    var Content=document.getElementById('titleOfContent');


    setCaption();  
    
    insertBoardAfterTeg(titleOfContent);
    
   
    boardForSea.onclick=function (event){
       
          var target = event.target; // где был клик?
          
                   
          if(target.clicked==undefined){

                if (target.className != 'cel') return; 

                target.clicked=true;// создал свойство хранитель состояния

                target.append("Θ"); //подбит
//                target.append("Ο"); //цел
//                target.append("–"); //промах
        }
          
          
      }
        
    function setCaption(){
        titleOfContent.append('Игра Морской бой ');
    }

    function insertBoardAfterTeg(elem) {
        
        var a='<div class="cel"> </div>';
        var b,r,x,y; 

        b=a;
        for (x=1; x<10; x=x+1) {
            b=b+a;
        }
        var c='<div class="lin">'+b+'</div>';
        
        r=c;
        for (y=1; y<10; y=y+1) {
            r=r+c;
        }
        
            var close='<button id="closeButtonForSeaWar">X</button>';
            var html='<div id="boardForSea">'+r+'</div>';

               elem.insertAdjacentHTML( "beforeend",close );
               elem.insertAdjacentHTML( "afterEnd",html );
                  
                  closeButtonForSeaWar.onclick = function(event) {
                      
                      alert("Сделай метод очистки полотна");
                    SeArea.remove();
                    
                  }

     
}

}