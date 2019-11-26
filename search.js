
/**
 * @author : Lehlohonolo Motsoeneng
 * @github : https://github.com/Hlokolozar/
 * @description: Create a search functionality when a textbox is clicked.
 * @version: 1.0
 */

 // Global variables to capture the element class to be filtered on search
let elClass;
let primaryHtag;

$(document).ready(function() {

  // All events on document ready

});

function elementToFilter(htmlClass) {
 
   elClass = htmlClass;
   primaryHtag = checkForHtag (elClass);

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
     * @output : ''
     */
        
    $('.'+elClass).filter(function() {
      const a = 'a';
      $(this).toggle($(this).find(primaryHtag).find(a).text().toLowerCase().indexOf(inputText) > -1)
    });
        
}

function checkForHtag(divClass) { 
  /**
   * @input : String
   * @description: Check if the given class has any H tag, and return
   *               the first found H tag in parent element 
   * @output : String
  */

  let hasHtag;
  let hTag;
  for (let x=1; x <= htmlCount; x++) {
    hasHtag = $('.'+divClass).find("h"+x).length;
    if (hasHtag > 0) {
      hTag = $('h'+x).get(0).tagName;
      break;
    }
  }

  return hTag;
}






