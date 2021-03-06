#Lesson 5 In-Class Exercises

##Class 5 README
Because this readme was long and you needed to follow along, take some time to finish up your forms app or ask any questions if you need to. Push this to your fork. The solution to the walkthrough is in this class 05 folder as [formsAppWalkthrough](https://github.com/olinjs/olinjs/blob/master/lessons/05-client-jquery-ajax/formsAppWalkthrough). 

Pick the ones which are interesting and challenging to you, and feel free to work with the people around you. **If you feel done or comfortable with these, move on to the [homework](https://github.com/olinjs/olinjs/blob/master/lessons/05-client-jquery-ajax/HOMEWORK.md), since it's fairly lengthy.**

##Folder Structure
Last class we discussed folder structure, so as a refresher, draw out the folder structure for a typical app on the board in small groups, indicating what belongs in each folder. 

##jQuery and AJAX
- Practice jQuery exercises. Fork before editing!
	- Selectors and CSS: http://codepen.io/ndhanushkodi/pen/EPmgLQ
	- Testing selections for a property: http://codepen.io/ndhanushkodi/pen/WQVONb
	- Write one on your own to make a button that gets disabled once you click it, and display some message at the bottom of the page, like 'button disabled'.

Remember that jQuery allows you to make AJAX requests, which may return some data (if you do a GET request for instance), and now you can dynamically update the page reflecting this new data if desired using jQuery. A great way to practice is to go back to old apps like isItChristmas or your cat app and keep the same functionality, except WITHOUT page refreshes to see updates in the data!

- Return to your version of isItChristmas.com and add the jQuery library to it. (Libraries are often included from a CDN. For example, Google hosts a CDN for jQuery, which you could include with 
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
```
Or the other option would be to download the jQuery library itself, which would be in a single JavaScript file, and include it in the directory where you wish to access it through 
```html
<script src="jquery-1.12.0.min.js"></script>). 
```

- After adding jQuery, in your isItChristmas app, add a button that users can click to find out whether it is christmas or not without refreshing (print to chrome developer console). Have the page itself update to reflect the answer.

- Return to your cat app homework and add the jQuery library to it. 

- Rather than having several pages for each of the types of requests, have just one display page for the list of cats, with 4 buttons: Display, Add, GetBy <insert favorite color here> (with some textbox to enter the color), and Delete. 

- Each of these buttons will be linked to one AJAX request that returns some data update from your API routes. 

- Do as many or as few of these buttons as you want for practice, or just move on to the homework. 

	- When the Add button is clicked, a cat is added, display the one cat on the page without a page refresh (GET /cats/new)
	- When the Display button is clicked, show the sorted list of cats by age, without page refresh (GET /cats) 
	- When the Delete button is clicked, a cat is deleted, display the newly updated list of cats (after the deletion) on the page without a page refresh (GET /cats/delete/old). You can also try to change this to a DELETE request!
	- When the GetBy <insert favorite color here> button is clicked, display the list of cats that have that color without a page refresh (GET /cats/bycolor/:color)


When you're done, fill out this [feedback form](https://docs.google.com/forms/d/1sItfsMqIa5N5eGBpkfCJIMnVK2XsYbo52xOyHLQEPYI/viewform?usp=send_form) and get started with the homework!




