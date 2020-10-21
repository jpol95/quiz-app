/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

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
    <h2>US Geography Quiz</h2>
    <img class = "image" src ="#" alt="Opening picture">
    <button id="start">New Quiz</button>
  </div>`;
  return startPage;
};

function handleStartQuiz() {
//add event listener to parent element and reference child that will be clicked
// reaction function should alter store.quizStarted to true
// render page
  $('main').on('click', '#start', function() {
    store.quizStarted = true;
    render();
  })

}

function render() {
  //if else statement to check if the quiz has started
  if(store.quizStarted === false) {
    console.log('Quiz has not started');
    $('main').html(startPageTemplate());
  } else if (store.quizStarted === true) {
    console.log('Quiz has started');
    $('main').html(questionPageTemplate());
    
  }
}

function startUp() {
  render();
  handleStartQuiz();
}

$(startUp);