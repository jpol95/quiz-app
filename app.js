/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    { question: 'What is the capitol of Mississippi?',
      answers: [
        'Jackson',
        'Laurel',
        'Biloxi',
        'Hattiesburg',
      ],

      correctAnswer: 'Jackson' , gotCorrect: null
    },

    { question: 'What state is nicknamed the Pelican State?',
      answers: [
        'Arkansas',
        'Mississippi',
        'Louisiana',
        'Oklahoma'
      ],
      correctAnswer: 'Louisiana', gotCorrect: null

    },

    { question: 'Which ocean is off of the California coast?',
      answers: [
        'Arctic',
        'Indian',
        'Pacific',
        'Atlantic',
      ],
      correctAnswer: 'Pacific',
      gotCorrect: null

    },

    { question: 'Which mountain range stretches from west Virginia to Georgia',
      answers: [
        'Jackson',
        'Smoky Mountains',
        'Blue Ridge Mountains',
        'Hattiesburg',
      ],

      correctAnswer: 'Blue Ridge Mountains', gotCorrect: null
    },

    { question: 'What is the largest state in America?',
      answers: [
        'Alaska',
        'Texas',
        'California',
        'Montana',
      ],

      correctAnswer: 'Alaska', gotCorrect: null

    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  wrong: 0,
  
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


function startPageTemplate() {
  // define variable to hold wireframe start page html
  // return that variable
  let startPage = `  <div class ="container">
    <h2 id="title">USA Geography Quiz</h2>
    <button id="start">New Quiz</button>
  </div>`;
  return startPage;
}

function questionPageTemplate(){
  let currentQuestion = store.questions[store.questionNumber];
  let currentQNumber = store.questionNumber + 1
  let display = `<div class="container"><form class="question"> <h2>${currentQNumber}. ${currentQuestion.question}</h2><br>` 
  for (let i = 0; i < 4; i++){
    display += `<input type="radio" name="answer" value="${currentQuestion.answers[i]}" required>
      <label for="n${i}">${currentQuestion.answers[i]}</label><br>`
    };
  display += `<br><button class="submit" type="submit"> Submit</button></form></div>`;
  return display;
}

function correctAnswerTemplate(){
  return `<div class= "container">
  <h2>Correct!</h2>
  <h3>${store.questions[store.questionNumber].correctAnswer}<h3>
  <h3>Score:${store.score}</h3>
  <button id= "next">Next</button>
  </div>`;
  
}

function incorrectAnswerTemplate(){
  return `<div class= "container">
  <h2>Incorrect!</h2>
  <h3>Correct answer is: ${store.questions[store.questionNumber].correctAnswer}</h3>
  <h3>Score:${store.score}</h3>
  <button id= "next">Next</button>
  </div>`;
}

function endPageTemplate() {
  return `<div class = "container">  
  <h2 id="question"> Your Results!</h2>
  <h3> Congrats! You scored  <br> ${store.score} / 5! </h3>
  <button id="again"> Try Again? </button>
    </div>`;
}

function handleNextQuestion(){
  $('main').on('click', '#next', function(e){
    e.preventDefault()
    store.questionNumber++
    render()
  })
}

function handleTryAgain() {
  $('main').on('click', '#again', function() {
    store.quizStarted = false;
    store.questionNumber = 0;
    store.score = 0;
    for(let question of store.questions){
      question.gotCorrect = null;
    }
    render()
  });
  }

function handleStartQuiz() {
//add event listener to parent element and reference child that will be clicked
// reaction function should alter store.quizStarted to true
// render page
  $('main').on('click', '#start', function(event) {
    event.preventDefault();
    event.stopPropagation();
    store.quizStarted = true;
    render();
  })
}

function handleQuestionSubmit(){
  $('main').on('submit', '.question', function(e){
    e.preventDefault();
    let currentQuestion = store.questions[store.questionNumber];
    let answer = $("input[name='answer']:checked").val();
    if ( answer === currentQuestion.correctAnswer) {
        currentQuestion.gotCorrect = true;
        store.score++;
    } else {
      currentQuestion.gotCorrect = false;
    };
    render()
  });
  }

function render() {
  //if else statement to check if the quiz has started
  if (store.questionNumber > 4) {
    return  $('main').html(endPageTemplate());
  }
  if(store.quizStarted === false) {
    $('main').html(startPageTemplate());
  } else if (store.quizStarted === true) {
    if(store.questions[store.questionNumber].gotCorrect === null) {
        $('main').html(questionPageTemplate());
      } else if((store.questions[store.questionNumber].gotCorrect === true)) {
        $('main').html(correctAnswerTemplate());
      } else {
        $('main').html(incorrectAnswerTemplate());
      }
    }
  }
  
function startUp() {
  render();
  handleStartQuiz();
  handleQuestionSubmit();
  handleNextQuestion();
  handleTryAgain();

}

$(startUp())
