
const button = document.getElementById ('quiz');
const results = document.getElementById('results');
import { yessir } from './utils.js';


button.addEventListener('click', () => {
    let correctAnswers = 0;

    const firstName = prompt('Merlin\'s Beard! We can\'t start the quiz without knowing your preferred name!');
    const lastName = prompt('Very good, now what is your last name?');
    const identity = prompt ('Do you prefer Witch or Wizard?');
    const pronouns = prompt('Do you prefer Mr, Miss, or Mx?');
 
    const wantsToContinue = confirm(`Very good young ${identity}! Now then ${pronouns} ${firstName} ${lastName}, would you like to test your skills?`);
    if (!wantsToContinue) return;

    const duckie1 = prompt('Did Rubber Ducks help with children\'s fear of water?');
    if (yessir(duckie1)) correctAnswers++;

    const duckie2 = prompt('Hofman\'s Duck Project was created in 2017.');
    if (!yessir(duckie2)) correctAnswers++;

    const duckie3 = prompt ('Duck Races have been held in the U.S., Australia, and the U.K.')
    if (yessir(duckie3)) correctAnswers++;

    alert(`This is the end of the quiz. Thank you, ${pronouns} ${firstName} ${lastName}. Hold your hippogriffs, your results will appear shortly.`);

    if (correctAnswers < 3){
        results.textContent = `Here you go, young ${identity} you scored ${correctAnswers} out of 3 correct. Consider trying out for quidditch instead.`;
    } else {results.textContent=`Here you go, young ${identity} you scored ${correctAnswers} out of 3 correct. You might be the brightest of your generation.`;}

});