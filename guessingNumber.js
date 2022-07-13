'use strict';

////console.log(document.querySelector('.message'));  //This will take the code and shown to console
//eg: <p class="message">Start guessing...</p>


console.log(document.querySelector('.message').textContent);

// ////text.content takes only content from the code and shown to the console
// //eg.: Start guessing...


// document.querySelector('.message').textContent='Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent='?';
document.querySelector('.score').textContent=20;

 
document.querySelector('.guess').value='';
console.log(document.querySelector('.guess').value);
// //Here we use value method because we wanted enter the number/input from the user.
// //That's why we use "value" method, we don't want textContent here.


// /*"Events"
 
// An "Event" is something that happens on the page.
// eg: 'EventListener' , 'mouse click' , 'mouse moving' , 'key press' etc...

// Now we will use EventListener for button 
// :-'EventListener': we can wait for a certain event to happen,
// and then react to it.
// */

const system_number=Math.trunc (Math.random()*20)+1; 



let scores=20;


document.querySelector('.check').addEventListener('click', function(){
const guess=Number(document.querySelector('.guess').value);

// //console.log(guess, typeof guess);  //user input


//When there is no input OR Invalid input
if(!guess){
    document.querySelector('.message').textContent="OOPS!! No Number / OR  Invalid input";
    scores--;
    document.querySelector('.score').textContent=scores;




    //When guess is High
}else if(guess>system_number){
    document.querySelector('.message').textContent="Guess is High";
    if(scores>0){
        scores=scores-1;
        document.querySelector('.score').textContent=scores;
    }else{
        document.querySelector('.message').textContent="You Lost the Game!!!";
    }



    
    //When guess is low
}else if(guess<system_number){
    document.querySelector('.message').textContent="Guess is low";
    if(scores>0){
        scores--;
        document.querySelector('.score').textContent=scores;
    }else{
        document.querySelector('.message').textContent="You Lost the Game!!!";
    }




    //when player Wins
}else{

    document.querySelector('.message').textContent="Congrats You guessed correct"
    document.querySelector('.highscore').textContent=scores;

    //It will hide the system_number untill player wins.
    document.querySelector('.number').textContent=system_number;

    //It will show some css affect on the page.
    document.querySelector('body').style.backgroundColor='#A0D995';
    document.querySelector('.number').style.width='6rem';

}
});
