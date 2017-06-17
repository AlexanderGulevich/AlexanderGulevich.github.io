"use strict";
function setBoard(){


    var titleOfContent=document.getElementById('titleOfContent');
    setCaption();  
    
    insertBoardAfterTeg(titleOfContent);
    
    var  boardForXO=document.getElementById("boardForXO");
    
    
    boardForXO.onclick=function (event){
       
          var target = event.target; // где был клик?
          
                   
          if(target.clicked==undefined){

                if (target.className != 'cell') return; 

                target.clicked=true;// создал свойство хранитель состояния

                target.append("x");
        }
          
          
      }
        
    function setCaption(){
        titleOfContent.append('Игра Крестики-нолики ');
    }

    function insertBoardAfterTeg(elem) {
        
            var html=                    '<div id="boardForXO">'+

                                             '<div class="line"> '+
                                               '  <div class="cell"> </div>'+
                                               '  <div class="cell"> </div>'+
                                                ' <div class="cell"> </div>'+
                                            ' </div>'+
                                            ' <div class="line">'+

                                                ' <div class="cell"> </div>'+
                                               '  <div class="cell"> </div>'+
                                                ' <div class="cell"> </div>'+
                                           '  </div>'+
                                            ' <div class="line">'+

                                                ' <div class="cell"> </div>'+
                                                ' <div class="cell"> </div>'+
                                                 '<div class="cell"> </div>'+
                                            ' </div>'+
                                         ' </div>';
                
                
               elem.insertAdjacentHTML( "afterEnd",html );
        
      
}

}