'use strict';

// Check if user is ready.
var answer1 = confirm('You\'re about to to make some guesses about Rob Hatfield. Are you ready?');

// Log user response for readiness. No quiz if user clicks 'Cancel'.
if (answer1 === true) {
  console.log('User has confirmed readiness.');

  var sleepGuess = prompt('Question 1: Do you think Rob has had more than six hours of sleep in the past two days?');
  // Because he sure hasn't.
  console.log('User guessed: ' + sleepGuess);
  var motorcycleGuess = prompt('Question 2: Do you think Rob rides a motorcycle?');
  // I was *this* close!
  console.log('User guessed: ' + motorcycleGuess);
  var montyPythonGuess = prompt('Question 3: Do you agree that three shall be the number thou shalt count, and the number of the counting shall be three?');
  // Five is right out.
  console.log('User guessed: ' + montyPythonGuess);
  var anglophileGuess = prompt('Question 4: Do you think Rob also likes Red Dwarf and Doctor Who?');
  // Warning: possible Anglophile detected.
  console.log('User guessed: ' + anglophileGuess);
  var seriousGuess = prompt('Question 5: Is Rob the sort of person to take himself seriously?');
  // Not sure if serious.
  console.log('User guessed: ' + seriousGuess);

} else {
  // No quiz for you!
  console.log('User is NOT prepared.');
}
