'use strict';

// create objects to contain question and response data
var q1 = {
  question: 'Question 1: Do you think I had more than six hours of sleep in the past two days while building this quiz? \(Y\/N\)',
  correctAnswer: 'N',
  userResponse: '',
  nullCheck: false,
  correctCheck: false,
  feedback: 'I didn\'t. But isn\'t that what weekends are for?'
};
var q2 = {
  question: 'Question 2: Do you think that I ride a motorcycle? \(Y\/N\)',
  correctAnswer: 'N',
  userResponse: '',
  nullCheck: false,
  correctCheck: false,
  feedback: 'unfortunately I don\'t. I came close, but just before going to a class to get my motorcycle endorsement, had to totally replace my car.'
};
var q3 = {
  question: 'Question 3: Do you agree that shalt thou count to three, no more, no less? \(Y\/N\)',
  correctAnswer: 'Y',
  userResponse: '',
  nullCheck: false,
  correctCheck: false,
  feedback: 'three shall be the number thou shalt count, and the number of the counting shall be three. Four shalt thou not count, neither count thou two, excepting that thou then proceed to three. Five is right out.'
};
var q4 = {
  question: 'Question 4: Do you think Rob likes programmes such as Doctor Who, The IT Crowd, and Red Dwarf? \(Y\/N\)',
  correctAnswer: 'Y',
  userResponse: '',
  nullCheck: false,
  correctCheck: false,
  feedback: '! In fact, I could be showing several early warning symptoms of becoming an Anglophile. Ask my doctor if cancelling BBC America is right for me.'
};
var q5 = {
  question: 'Question 5: Is Rob the sort of person to take himself seriously? \(Y\/N\)',
  correctAnswer: 'trick',
  userResponse: '',
  nullCheck: false,
  correctCheck: false,
  feedback: 'this is a trick question, which doesn\'t really have a yes or no answer. While I am guilty at times of taking things more seriously than strictly needed, I\'m also quite capable of choosing to make a complete fool of myself.'
};

// store all Y/N questions in an array
var quizBoolean = [q1, q2, q3, q4, q5];

// Check if user is ready.
var readyCheck = confirm('You\'re about to to make some guesses about Robert. Are you ready?');

// Log user response for readiness. No quiz if user clicks 'Cancel'.
if (readyCheck === true) {
  console.log('User has confirmed readiness.');
  alert('There are 5 Yes or No questions, so please answer accordingly.');

// previous guess code example
/*
  var sleepGuess = prompt(question[0]);
  // Because he sure hasn't.
  console.log('User guessed: ' + sleepGuess);
*/

// Checking all responses in an iterative loop is a lot cleaner
  for (var i = 0; i < 5 ; i++) {
    quizBoolean[i].userResponse = prompt(quizBoolean[i].question);
    console.log(quizBoolean[i].userResponse);
    // check if answer was defined
    if (quizBoolean[i].userResponse) {
      console.log('Question ' + (i + 1) + ' was answered.' );
      quizBoolean[i].nullCheck = true;
      // then check if correct
      console.log('First character of guess is ' + quizBoolean[i].userResponse[0]);
      if (quizBoolean[i].userResponse[0].toUpperCase() == quizBoolean[i].correctAnswer) {
        console.log('And is correct.');
        document.write('<p>Nicely done!<br />');
      } else {
        console.log('But is incorrect.');
        document.write('<p>Sorry, that\'s wrong.<br />');
      }
    } else {
      console.log('Question ' + (i + 1) + ' was not answered.');
      document.write('<p>But you didn\'t bother to answer it!</p>');
    }
  }

} else {
  // No quiz for you!
  console.log('User is NOT prepared.');
  document.write('<p>You know what? Just come back when you\'re ready to take a shot at the quiz, okay?</p>');
}
