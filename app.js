// import functions and grab DOM elements
const button = document.getElementById ('quiz');
const results = document.getElementById('results');
import { countsAsAYes } from './utils.js';

// initialize state

// set event listeners 
button.addEventListener('click', () => {
    let correctAnswers = 0;
    const firstName = prompt('Cheerio! What is your preferred first name?');
    const lastName = prompt('What is your last name?');
    const identity =prompt ('Do you prefer Witch or Wizard?')
 
    const wantsToContinue = confirm(`Very good young ${identity}! ${firstName} ${lastName}, would you like to test your skills?`);
    if (!wantsToContinue) return;

    const duckie1 = prompt('Did Rubber Ducks help with children/s fear of water?');
    if (countsAsAYes(duckie1)) correctAnswers++;

    const duckie2 = prompt('Hofman/s Duck Project was created in 2017.');
    if (!countsAsAYes(duckie2)) correctAnswers++;

    const duckie3 =prompt ('Duck Races have been held in the U.S., Australia, and the U.K.')
    if (countAsAYes(duckie3)) correctAnswers++;

    alert(`This is the end of the quiz. Thank you, ${firstName} ${lastName}. Hold your hippogriffs, your results will appear shortly.`);
    results.textContent = `Here you go, young ${identity} you scored ${correctAnswers} out of 3 correct. Consider trying out for quidditch after this.`;
});