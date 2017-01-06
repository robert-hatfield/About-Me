'use strict';

/* TO DO:
  Insert a link into index.html if user is ready for the quiz
*/

// Check if user is ready.
var readyCheck = confirm('You\'re about to to make some guesses about Robert. Are you ready?');

// Log user response for readiness. No quiz if user clicks 'Cancel'.
if (readyCheck === true) {
  console.log('User has confirmed readiness.');
  // Track number of questions answered correctly within allowed attempts.
  var userScore = 0;
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
    question: 'Question 5: Am I the sort of person to take myself seriously? \(Y\/N\)',
    correctAnswer: 'trick',
    userResponse: '',
    nullCheck: false,
    correctCheck: false,
    feedback: 'Gotcha! This is a trick question, one which doesn\'t really have a yes or no answer. While I am guilty at times of taking things more seriously than necessary, I\'m also quite capable of choosing to make a complete fool of myself.'
  };
  // store all Y/N questions in an array
  var quizBoolean = [q1, q2, q3, q4, q5];
  // ask vistor for their name
  var visitorName = (prompt('What is your name, please?'));
  if (visitorName) {
    var greeting = 'Great! Thanks, ' + visitorName + '.\n';
    console.log('User provided name of "' + visitorName + '".');
  } else {
    var greeting = 'Okay, you can remain anonymous if you like.\n';
    visitorName = 'Anonymous';
    console.log('No name provided, set to "' + visitorName + '".');
  }
// Ask 5 Yes/No questions and check responses
  alert(greeting + 'The following five questions should be answered (Y)es or (N)o.');
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
        alert('That\'s right!\n\n' + quizBoolean[i].feedback);
        document.write('That\'s right!<br />' + quizBoolean[i].feedback + '</p>');
      } else {
        console.log('But is incorrect.');
        alert('I\'m afraid that\'s wrong.\n\n' + quizBoolean[i].feedback);
        document.write('But unfortunately, that\'s wrong.<br />' + quizBoolean[i].feedback + '</p>');
      }
    } else {
      console.log('Question ' + (i + 1) + ' was not answered.');
      alert('You didn\'t bother to answer this one!\n\n' + quizBoolean[i].feedback);
      document.write('You didn\'t bother to answer this one!<br />' + quizBoolean[i].feedback + '</p>');
    }
  }
// Random number guessing game
  alert('Okay, ' + visitorName + '. Now I\'d like you to guess a number between 1 and 10.\n\nYou\'ll get FOUR chances to guess.');
  var targetNumber = Math.floor(Math.random() * 10) + 1;
  console.log('Computer picked: ' + targetNumber);
  var targetGuesses = [];
// Check user guesses against number chosen up to 4 times
  for (i = 0; i < 4; i++) {
    // ask user for a number
    targetGuesses[i] = parseInt(prompt('Guess ' + (i + 1) + ' of 4:\nWhat number did I pick? (Between 1 and 10.)'));
    console.log(targetGuesses[i]);
    // confirm that user provided a response
    if (targetGuesses[i]) {
      /* check if user provided a valid number and is correct
      if it is correct, give user varied feedback and end number game*/
      if (targetGuesses[i] === targetNumber) {
        switch(i) {
        case 0:
          alert('Wow, first guess! I\'m impressed.');
          break;
        case 1:
          alert('Nicely done, ' + visitorName + '! ' + targetGuesses[i] + ' is correct.');
          break;
        default:
          alert('You got it! ' + targetGuesses[i] + ' is correct.');
        }
        break;
      } else {
        // if guess was incorrect or not a number
        console.log('Wrong, try again.');
        console.log(targetGuesses);
        // if incorrect guess was a number, provide feedback
        if (i < 3) {
          var retryYN = ' Try again.';
        } else {
          var retryYN = ' Unfortunately, that was your last try.\n\nThe number I chose was ' + targetNumber + '.';
        }
        if (targetGuesses[i] > targetNumber) {
          alert(targetGuesses[i] + ' is too high.' + retryYN);
        } else {
          alert(targetGuesses[i] + ' is too low.' + retryYN);
        }
      }
    } else {
      // if user provided no response
      console.log('No response.');
      // tell user they get another chance
      if (i < 3) {
        alert('No guess at all? Try again.');
      } else {
        // no guess
        alert('Well, that was your last chance and didn\'t even try. Ah well.\nThe number I chose was ' + targetNumber + '.');
      }
    }
  }

  // 2-Dimensional array contains cities and states I have lived in
  var citiesLived = [['Tacoma', ', WA'], ['Auburn', ', WA'], ['Seattle', ', WA'], ['Buckley', ', WA'], ['Beaverton', ', OR']];
  var cityGuesses = [];
  for (i = 0; i < 1; i++) {
    cityGuesses[i] = prompt('Try to guess a Pacific NW city I\'ved lived in. \nHint: one of them may not be in the state of Washington.');
    console.log(cityGuesses[i].toUpperCase());
    console.log(citiesLived[0][0].toUpperCase());
    if (cityGuesses[i].toUpperCase() === citiesLived[0][0].toUpperCase() || cityGuesses[i].toUpperCase() === citiesLived[1][0].toUpperCase() || cityGuesses[i].toUpperCase() === citiesLived[2][0].toUpperCase || cityGuesses[i].toUpperCase() === citiesLived[3][0].toUpperCase() || cityGuesses[i].toUpperCase() === citiesLived[4][0].toUpperCase()) {
      console.log('User guessed ' + cityGuesses[i] + ' correctly.');
      for (var j = 0; j < (j - 1) ; j++) {
        alert('That\'s right - I.');
        break;
      }
    }
  }
} else {
  // No quiz for you!
  console.log('User is NOT prepared.');
  document.write('<p>You know what? Just come back when you\'re ready to take a shot at the quiz, okay?</p>');
}
