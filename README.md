GA Events
By Runn Vermel
Version 0.1

This is a (very) simple Wordpress plugin that allows you to track events inside Google Analytics. It requires that you have the Universal version of Google Analytics already installed. It also assumes you have pretty permalinks turned on (i.e. www.yoursite.com/pretty/permalinks/). 

To use:

Required:
Add the class "ga" or "gaGlobal" to any element.

Optional:
You can also add an optional data-ga attribute to any elements to help describe the element/event better.


---------------------------------------------- 
CLASS ga:
----------------------------------------------

Use this class to create a Google Analytics Event that by default sets the Event Category as the window path, and the Event Label as the Element Text. You can always add an data-ga attribute to change the event label. 

Example:
<div class="ga">Example Event Text</div>

Assuming a url path of www.example.com/products/product, the example above will have an Event Category of products/product and an Event Label of "Example Event Text". 

Example with data-ga:
<div class="ga" data-ga="More descriptive text goes in here">Example Event Text</div>

Assuming a url path of www.example.com/products/product, the example above will have an Event Category of products/product and an Event Label of "More descriptive text goes in here".

----------------------------------------------
CLASS gaGlobal
----------------------------------------------

Use this class to create a Google Analytics event that by default sets the Event Category as the Element Text, and the the Event Label as the window path. You can always add an data-ga aittribute to change the event label. This is helpful on global elements that exist on each page, and help you group together the same event, happening on different pages (for example, a contact us button which exists on every page. an event that lists the click on the contact us with the ga class means you would have to go to many different pages to find out how many times the contact button was pressed. by using the gaGlobal class, you flip the category and label, and are able to see a "contact" category, that show you which pages the contact button was clicked. 
  
Example:
<div class="gaGlobal">Example Event Text</div>
  
Assuming a url path of www.example.com/products/product, the example above will have an Event Category of "Example Event Text" and an Event Label of "products/product".  
   
Example with data-ga:
<div class="gaGlobal" data-ga="More descriptive text goes in here">Example Event Text</div>
 
Assuming a url path of www.example.com/products/product, the example above will have an Event Category of "More descriptive text goes in here"  and an event label of "products/product".
