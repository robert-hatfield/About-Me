'use strict';

// create objects to contain question and response data
var q1 = {
  question: 'Question 1: Do you think I got more than six hours of sleep in the past two days while building this quiz? \(Y\/N\)',
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
  feedback: 'Unfortunately I don\'t. I came close, a few years ago, but just before attending a course to get my motorcycle endorsement, had to totally replace my car.'
};
var q3 = {
  question: 'Question 3: Do you agree that shalt thou count to three, no more, no less? \(Y\/N\)',
  correctAnswer: 'Y',
  userResponse: '',
  nullCheck: false,
  correctCheck: false,
  feedback: 'Three shall be the number thou shalt count, and the number of the counting shall be three. Four shalt thou not count, neither count thou two, excepting that thou then proceed to three. Five is right out.'
};
var q4 = {
  question: 'Question 4: Do you think I like programmes such as Doctor Who, The IT Crowd, and Red Dwarf? \(Y\/N\)',
  correctAnswer: 'Y',
  userResponse: '',
  nullCheck: false,
  correctCheck: false,
  feedback: 'In fact, I could be showing several early warning symptoms of becoming an Anglophile. Ask my doctor if cancelling BBC America is right for me.'
};
var q5 = {
  question: 'Question 5: Am I the sort of person to take himself seriously? \(Y\/N\)',
  correctAnswer: 'trick',
  userResponse: '',
  nullCheck: false,
  correctCheck: false,
  feedback: 'Gotcha! This is a trick question, one which doesn\'t really have a yes or no answer. While I am guilty at times of taking things more seriously than necessary, I\'m also quite capable of choosing to make a complete fool of myself.'
};

// store all Y/N questions in an array
var quizBoolean = [q1, q2, q3, q4, q5];

// Check if user is ready.
var readyCheck = confirm('You\'re about to to make some guesses about Robert. Are you ready?');

// Log user response for readiness. No quiz if user clicks 'Cancel'.
if (readyCheck === true) {
  console.log('User has confirmed readiness.');
  var visitorName = (prompt('What is your name, please?'));
  if (visitorName) {
    var greeting = 'Great! Thanks, ' + visitorName + '. \n';
    console.log('User provided name of "' + visitorName + '".');
  } else {
    var greeting = 'Okay, you can remain anonymous if you like.';
    visitorName = 'Anonymous';
    console.log('No name provided, set to "' + visitorName + '".');
  }
  alert(greeting + 'The following five questions should be answered (Y)es or (N)o.');

// Check Yes/No questions in a for loop
  for (var i = 0; i < 5 ; i++) {
    quizBoolean[i].userResponse = prompt(quizBoolean[i].question);
    console.log(quizBoolean[i].userResponse);
    document.write('<p>' + quizBoolean[i].question + '<br />');
    // Check if answer was defined
    if (quizBoolean[i].userResponse) {
      console.log('Question ' + (i + 1) + ' was answered.' );
      document.write('You answered: ' + quizBoolean[i].userResponse + '<br />');
      quizBoolean[i].nullCheck = true;
      // Then check if correct
      console.log('First character of guess is "' + quizBoolean[i].userResponse[0] + '"...');
      if (quizBoolean[i].userResponse[0].toUpperCase() == quizBoolean[i].correctAnswer) {
        console.log('And is correct.');
        document.write('That\'s right!<br />' + quizBoolean[i].feedback + '</p>');
      } else {
        console.log('But is incorrect.');
        document.write('But unfortunately, that\'s wrong.<br />' + quizBoolean[i].feedback + '</p>');
      }
    } else {
      console.log('Question ' + (i + 1) + ' was not answered.');
      document.write('You didn\'t bother to answer this one!<br />' + quizBoolean[i].feedback + '</p>');
    }
  }

  alert('Okay, ' + visitorName + '. Now I\'d like you to guess a number between 1 and 10.\n \n You\'ll get FOUR chances to guess.');
  var targetNumber = Math.floor(Math.random() * 10) + 1;
  console.log('Computer picked: ' + targetNumber);
  var targetGuesses = [];
  for (i = 0; i < 4; i++) {
    targetGuesses[i] = parseInt(prompt('Guess ' + (i + 1) + ' of 4:\nWhat number did I pick? (Between 1 and 10.)'));
    console.log(targetGuesses[i]);
    if (targetGuesses[i]) {
      if (targetGuesses[i] === targetNumber) {
        switch(i) {
        case 0:
          var response = 'Wow, first guess! I\'m impressed.';
          alert(response);
          break;
        case 1:
          var response = 'Nicely done, ' + visitorName + '! ' + targetGuesses[i] + ' is correct.';
          alert(response);
          break;
        default:
          var response = 'You got it! ' + targetGuesses[i] + ' is correct.';
          alert(response);
        }
        break;
      } else {
        console.log('Wrong, try again.');
        console.log(targetGuesses);
        if (targetGuesses[i] > targetNumber) {
          alert(targetGuesses[i] + ' is too high. Try again.');
        } else {
          alert(targetGuesses[i] + ' is too low. Try again.');
        }
      }
    } else {
      console.log('No response.');
      if (i < 3) {
        alert('No guess at all? Try again.');
      } else {
        alert('Well, that was your last chance and didn\'t even try. Ah well. \n The number I chose was ' + targetNumber + '.');
      }
    }
  }

} else {
  // No quiz for you!
  console.log('User is NOT prepared.');
  document.write('<p>You know what? Just come back when you\'re ready to take a shot at the quiz, okay?</p>');
}
