/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    { id: cuid(),
      question: 'What is the capitol of Mississippi?',
      answers: [
        'Jackson',
        'Laurel',
        'Biloxi',
        'Hattiesburg',
      ],
      correctAnswer: 'Jackson' ,background: './photos/mississippi.jpg',
    },

    { id: cuid(),
      question: 'What state is nicknamed the Pelican State?',
      
      answers: [
        'Arkansas',
        'Mississippi',
        'Louisiana',
        'Oklahoma'
      ],
      correctAnswer: 'Louisiana',background: './photos/pelican.jpg',
    },

    { id: cuid(),
      question: 'Which ocean is off of the California coast?',
      answers: [
        'Arctic',
        'Indian',
        'Pacific',
        'Atlantic',
      ],
      correctAnswer: 'Atlantic',background: './photos/california-coast.jpg'
    },

    { id: cuid(),
      question: 'Which mountain range stretches from west Virginia to Georgia',
      answers: [
        'Jackson',
        'Smoky mountains',
        'Blue Ridge Mountains',
        'Hattiesburg',
      ],
      correctAnswer: 'Blue Ridge Mountains' , background: './photos/blue-ridge-mountain.jpg'
    },

    { id: cuid(),
      question: 'What is the largest state in America?',
      answers: [
        'Alaska',
        'Texas',
        'California',
        'Montana',
      ],
      correctAnswer: 'Alaska' ,background: './photos/alaska.jpg'
    },
  ],
  

  quizStarted: false,
  questionNumber: 0,
  score: 0,
  wrong: 0,
  correct: './photos/star.jpg',
  incorrect: './thumbdown.jpg',
}

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function startPage(){
  let startPage = 
  `<div class ="container">
  <h2 class= "title">US Geography Quiz</h2>
  <button id="start">New Quiz</button>
  </div>`
  return startPage;
}
//Cycles through questions
function questionPage(){
  let question = store.questions[store.question];
  console.log(question);

  let questionPage = 
  `<div class = "container">
  <h2>${question.question}</h2>
  <form>
      <label> ${question.answers[0]}</label>
      <input type="radio" name="answer" value = ${question.answers[0]}
      <label> ${question.answers[1]}</label>
      <input type="radio" name="answer" value = ${question.answers[1]}
      label> ${question.answers[2]}</label>
      <input type="radio" name="answer" value = ${question.answers[2]}
      label> ${question.answers[3]}</label>
      <input type="radio" name="answer" value = ${question.answers[3]}
      <button type="submit">Submit</button>
  </form>    
  </div>`
  return questionPage;
}
// starts the quiz
function handleStartQuiz(){
  $('main').on('click', '#start', function(){
    store.quizStarted = true;
    render();
  })
}
//submits and increments the quiz
function handleAnswerSubmit(){
  $('main').on('submit', 'form', function(evt){
    evt.preventDefault();
      store.questionNumber++;
  })
}
//if answer is correct, onto next question. If answer is wrong, reveal right answer and then onto the next question
function render(){
  if(store.quizStarted === false){
    $('main').html(startPage());
  } else if (store.quizStarted){
    $('main').html(questionPage());
  }
}
// create function to move onto the next question

// a function to contain our functions
function main(){
  render();
  handleStartQuiz();
  handleAnswersSubmit();
  questionPage();
}

$(main);