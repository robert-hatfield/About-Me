'use strict';

// Check if user is ready.
var answer1 = confirm('You\'re about to to make some guesses about Rob Hatfield. Are you ready?');

// Log user response for readiness. No quiz if user clicks 'Cancel'.
if (answer1 === true) {
  console.log('User has confirmed readiness.');
  alert('There are 5 Yes or No questions, so please answer accordingly.');

  var sleepGuess = prompt('Question 1: Do you think Rob has had more than six hours of sleep in the past two days? \(Y\/N\)');
  // Because he sure hasn't.
  console.log('User guessed: ' + sleepGuess + ', resolving as ' + sleepGuess[0].toUpperCase());
  if (sleepGuess[0].toUpperCase() === 'Y'){
    console.log('True');
  } else {
    console.log('False');
  }

  var motorcycleGuess = prompt('Question 2: Do you think Rob rides a motorcycle? \(Y\/N\)');
  // I was *this* close!
  console.log('User guessed: ' + motorcycleGuess + ', resolving as ' + motorcycleGuess[0].toUpperCase());
  if (motorcycleGuess[0].toUpperCase() === 'Y'){
    console.log('True');
  } else {
    console.log('False');
  }

  var montyPythonGuess = prompt('Question 3: Do you agree that three shall be the number thou shalt count, and the number of the counting shall be three? \(Y\/N\)');
  // Five is right out.
  console.log('User guessed: ' + montyPythonGuess + ', resolving as ' + montyPythonGuess[0].toUpperCase());
  if (montyPythonGuess[0].toUpperCase() === 'Y'){
    console.log('True');
  } else {
    console.log('False');
  }
  var anglophileGuess = prompt('Question 4: Do you think Rob also likes Red Dwarf and Doctor Who? \(Y\/N\)');
  // Warning: possible Anglophile detected.
  console.log('User guessed: ' + anglophileGuess + ', resolving as ' + anglophileGuess[0].toUpperCase());
  if (anglophileGuess[0].toUpperCase() === 'Y'){
    console.log('True');
  } else {
    console.log('False');
  }

  var seriousGuess = prompt('Question 5: Is Rob the sort of person to take himself seriously? \(Y\/N\)');
  // Not sure if serious.
  console.log('User guessed: ' + seriousGuess + ', resolving as ' + seriousGuess[0].toUpperCase());
  if (seriousGuess[0].toUpperCase() === 'Y'){
    console.log('True');
  } else {
    console.log('False');
  }
} else {
  // No quiz for you!
  console.log('User is NOT prepared.');
}
