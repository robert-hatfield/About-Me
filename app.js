'use strict';

// set values for questions and the correct answers
var question = ['Question 1: Do you think Rob has had more than six hours of sleep in the past two days? \(Y\/N\)',
  'Question 2: Do you think Rob rides a motorcycle? \(Y\/N\)',
  'Question 3: Do you agree that thou count to three, no more, no less? \(Y\/N\)',
  'Question 4: Do you think Rob also likes Red Dwarf and Doctor Who? \(Y\/N\)',
  'Question 5: Is Rob the sort of person to take himself seriously? \(Y\/N\)'];

var correctAnswers = ['N','N','Y','Y','trick question'];

// Check if user is ready.
var answer1 = confirm('You\'re about to to make some guesses about Rob Hatfield. Are you ready?');

// Log user response for readiness. No quiz if user clicks 'Cancel'.
if (answer1 === true) {
  console.log('User has confirmed readiness.');
  alert('There are 5 Yes or No questions, so please answer accordingly.');

  var sleepGuess = prompt(question[0]);
  // Because he sure hasn't.
  console.log('User guessed: ' + sleepGuess);

  var motorcycleGuess = prompt(question[1]);
  // I was *this* close!
  console.log('User guessed: ' + motorcycleGuess);

  var montyPythonGuess = prompt(question[2]);
  // Five is right out.
  console.log('User guessed: ' + montyPythonGuess);

  var anglophileGuess = prompt(question[3]);
  // Warning: possible Anglophile detected.
  console.log('User guessed: ' + anglophileGuess);

  var seriousGuess = prompt(question[4]);
  // Not sure if serious.
  console.log('User guessed: ' + seriousGuess);

// guessCheck contains user response, then if defined, then if correct
  var guessCheck = [[sleepGuess, false, false, '1st', 'he hasn\'t. Maybe last night was better.'],
    [motorcycleGuess, false, false, '2nd', 'he doesn\'t. He came close, but just before getting his motorcycle endorsement, had to replace his car.'],
    [montyPythonGuess, false, false, '3rd', 'three shall be the number thou shalt count, and the number of the counting shall be three. Four shalt thou not count, neither count thou two, excepting that thou then proceed to three. Five is right out.'],
    [anglophileGuess, false, false, '4th', 'Rob could be showing several early warning symptoms of becoming an Anglophile. Ask his doctor if cancelling BBC America is right for him.'],
    [seriousGuess, false, false, '5th', 'this is a trick question. Sometimes he might just really need to lighten up, or he could be going a little bit loopy.']];
// set the correct answers to these questions

// Checking all responses in an iterative loop is a lot cleaner
  for (var i = 0; i < 5 ; i++) {
    var nowChecking = i + 1;
    console.log(guessCheck[i]);
    document.write('<p>The ' + guessCheck[i][3] + ' question was:<br />'
    + question[i] + '</p>');
    // check if answer was defined
    if (guessCheck[i][0]) {
      console.log('Question ' + nowChecking + ' is answered.' );
      document.write('<p>Your ' + guessCheck[i][3] + ' guess was:<br />'
      + guessCheck[i][0] + '</p>');
      guessCheck[i][1] = true;
      // then check if correct
      console.log('First character of guess is ' + guessCheck[i][0][0]);
      if (guessCheck[i][0][0].toUpperCase() == correctAnswers[i]) {
        console.log('And is correct.');
        document.write('<p>Nicely done!<br />'
        + 'In fact, ' + guessCheck[i][4] + '</p>');
        guessCheck[i][2] = true;
        console.log(guessCheck[i]);
      } else {
        console.log('But is incorrect.');
        document.write('<p>Sorry, that\'s wrong.<br />'
        + 'Actually, ' + guessCheck[i][4] + '</p>');
        guessCheck[i][2] = false;
        console.log(guessCheck[i]);
      }
    } else {
      console.log('Question ' + nowChecking + ' was not answered.');
      document.write('<p>But you didn\'t bother to answer it!</p>');
      guessCheck[i][1] = false;
    }
  }

} else {
  // No quiz for you!
  console.log('User is NOT prepared.');
  document.write('<p>You know what? Just come back when you\'re ready to take a shot at the quiz, okay?</p>');
}
