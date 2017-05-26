"use strict";
(function () {

    var dynamicContent=document.getElementById('dynamicContent');
    var titleOfContent=(dynamicContent.getElementsByClassName('titleOfContent'))[0];
    insertBoardAfterTeg(titleOfContent);
    var  boardForXO=document.getElementById("boardForXO");
    setCaption();  
    boardForXO.onclick=function (event){
       
          var target = event.target; // где был клик?
          
                   
          if(target.clicked==undefined){

                if (target.className != 'cell') return; 

                target.clicked=true;

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
   

}());