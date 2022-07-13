'use strict';

////console.log(document.querySelector('.message'));  //This will take the code and shown to console
//eg: <p class="message">Start guessing...</p>


console.log(document.querySelector('.message').textContent);

////text.content takes only content from the code and shown to the console
//eg.: Start guessing...


document.querySelector('.message').textContent='Correct Number';
//console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=20

 
document.querySelector('.guess').value=14;
console.log(document.querySelector('.guess').value);
//Here we use value method because we wanted enter the number/input from the user.
//That's why we use "value" method, we don't want textContent here.


/*"Events"
 
An "Event" is something that happens on the page.
eg: 'EventListener' , 'mouse click' , 'mouse moving' , 'key press' etc...

Now we will use EventListener for button 
:-'EventListener': we can wait for a certain event to happen,
and then react to it.
*/
document.querySelector('.check').addEventListener('click', function(){
    console.log(document.querySelector('.guess').value);
    
})