# searcha
jQuery searching Library 

### Instructions:

Load jQuery before as this Library depends on jQuery
Provide the class of the items you want to filter, or search against.
Make Sure the Textbox used to search has an id attribute that is not empty.

You might need to make sure the Document is ready.
Currently the search works, provided that the class searched has an hTag ('H2') and an Anchor element ('a').

E.g


      $(document).ready(()=> {   
        elementToFilter('news-item');
      });
   
 
