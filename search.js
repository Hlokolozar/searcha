
/**
 * @author : Lehlohonolo Motsoeneng
 * @description: Create a search functionality when a textbox is clicked
 */
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
      $(this).toggle($(this).find('h2').find('a').text().toLowerCase().indexOf(inputText) > -1)
    });
        
}

function bindTags (terms) {
  console.log(terms);
}




