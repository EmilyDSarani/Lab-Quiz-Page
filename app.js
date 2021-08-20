
const button = document.getElementById ('quiz');
const results = document.getElementById('results');
const resetButton = document.getElementById('reset');

import { yessir } from './utils.js';

//Tried to indent if statements but ESlint ran it as an error. 
button.addEventListener('click', () => {
    let correctAnswers = 0;
    //ask user for name 
    const firstName = prompt('Merlin\'s Beard! We can\'t start the quiz without knowing your preferred name!');
    if (!firstName) return;
    //ask user for last name
    const lastName = prompt('Very good, now what is your last name?');
    if (!lastName) return;
    //ask user witch or wizard
    const identity = prompt ('Do you prefer Witch or Wizard?');
    if (!identity) return;
    //ask user title
    const pronouns = prompt('Do you prefer Mr, Miss, or Mx?');
    if (!pronouns) return;
    //ask user to continue
    const wantsToContinue = confirm(`Very good young ${identity}! Now then ${pronouns} ${firstName} ${lastName}, would you like to test your skills?`);
    if (!wantsToContinue) return;
    //first question
    const duckie1 = prompt('Did Rubber Ducks help with children\'s fear of water?');
    if (yessir(duckie1)) correctAnswers++;
    //second question
    const duckie2 = prompt('Hofman\'s Duck Project was created in 2017.');
    if (!yessir(duckie2)) correctAnswers++;
    //third question
    const duckie3 = prompt ('Duck Races have been held in the U.S., Australia, and the U.K.')
    if (yessir(duckie3)) correctAnswers++;
    //end of quiz
    alert(`This is the end of the quiz. Thank you, ${pronouns} ${firstName} ${lastName}. Hold your hippogriffs, your results will appear shortly.`);
    //results
    if (correctAnswers < 3){
        results.textContent = `Here you go, young ${identity} you scored ${correctAnswers} out of 3 correct. You should try out for Quidditch instead.`;
    } else {results.textContent = `Here you go, young ${identity} you scored ${correctAnswers} out of 3 correct. You could be the brightest of your generation.`;}

});

resetButton.addEventListener('click',()=>{
    window.location.reload();
  });