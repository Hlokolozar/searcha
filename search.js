
/**
 * @author : Lehlohonolo Motsoeneng
 * @description: Create a search functionality when a textbox is clicked
 * @version: 1.0
 */

 // Global variable to capture the element class to be filtered on search
let elClass;
$(document).ready(function() {

  // All events on document ready

});

function elementToFilter(htmlClass) {
  // console.log(htmlClass);
   elClass = htmlClass;
}

$("input").click(function(event) {
  // get id of the clicked textbox
  clickedTextBox(event.target.id);
});

function clickedTextBox(txtBoxId){

  /**
   * @input : String 
   * @description: Bind the clicked textbox id to the keyup function to start filtering
   * @output : String
   */

  $("#"+txtBoxId).keyup( function() {
    
    let inputText = $(this).val().toLowerCase();
    filterContent(inputText);
  });
}



function filterContent (inputText) {

    /**
     * @input : String
     * @description: Filter content according to the provided value
     * @output : filtering value captured on textbox
     */
        
    $('.'+elClass).filter(function() {
       
      const a = 'a';
      let htag = checkForHtag (elClass);
      
      //if($(this))
      $(this).toggle($(this).find(htag).find('a').text().toLowerCase().indexOf(inputText) > -1)

    });

    function checkForHtag(divClass) { 

      // hasHtag = $('.'+divClass).find("h1").length;
      // let hTag;
      // check if has h tag and return h tag
      if (hasHtag > 0) {
        if ($('.news-sec-h').is('h1,h2,h3,h4,h5')) {
          hTag = $(this).get(0).tagName;
        }
        
        return hTag;
      }
    }
        
}





