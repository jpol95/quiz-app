var value;
function questionPageTemplate() {
  let currentQuestion = store.questions[store.questionNumber];
  let questionPage = ` <div class = "container">
   <h2>${currentQuestion.question}</h2>
   <form>
      <input type="radio" name = 'answer' value = '${currentQuestion.answers[0]}'>
      <label for="a">${currentQuestion.answers[0]}</label><br>
      <input type="radio" name = 'answer' value = '${currentQuestion.answers[1]}'>
      <label for="b">${currentQuestion.answers[1]}</label><br>
      <input type="radio" name = 'answer' value = '${currentQuestion.answers[2]}'>
      <label for="c">${currentQuestion.answers[2]}</label><br>
      <input type="radio" name = 'answer' value = '${currentQuestion.answers[3]}'>
      <label for="d">${currentQuestion.answers[3]}</label><br>
      <button type="submit"> Submit</button>
   </form>
  </div>`;
  
  return questionPage;
}
function whichResponsePage(bool) {
  //should check bool and tell render which response page to display
  //function is called in handleQuestionSubmit
}

function scoreUpOrDown(bool) {
  if(bool) {
    store.score++;
    console.log(store.score);
  } else {
    store.score--;
    console.log(store.score);
  }
}

function handleQuestionSubmit() {
  $('main').on('submit', 'form', function(event) {
    event.preventDefault();
    const answer = $('input[name = "answer"]:checked').val();
    let rightOrWrong = checkRightOrWrong(answer);
    scoreUpOrDown(rightOrWrong);
    store.questionNumber++;
    whichResponsePage(rightOrWrong);
    render();
    
  })
}

function correctAnswerTemplate() {
  let correctAnswerPage = ` <div class= "container">
  <h2>Correct!</h2>
  <ul>
      <li>Score : ${store.score}</li>
  </ul>
  <button id= "next">Next</button>
</div>`;

  return correctAnswerPage;
}

function wrongAnswerTemplate() {
  let wrongAnswersPage = `<div class= "container">
  <h2>Wrong!</h2>
  <h3>The Right Answer was:</h3>
  <ul>
      <li>Score : ${store.score}</li>
  </ul>
  <button id= "next">Next</button>
</div>`
return wrongAnswersPage;
}

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
  $('main').on('click', '#start', function(event) {
    event.preventDefault();
    event.stopPropagation();
    store.quizStarted = true;
    render();
  })

}

function render() {
  //if else statement to check if the quiz has started
  if(store.quizStarted === false) {
    console.log('Quiz is ready to start');
    $('main').html(startPageTemplate());
  } else if (store.quizStarted === true) {
    console.log('Quiz has started');
    $('main').html(questionPageTemplate()); 
  }
}

function startUp() {
  render();
  handleStartQuiz();
  handleQuestionSubmit();

}

$(startUp);

function checkWhichSlide(value) {
  let startPage = startPageTemplate();
  let questionPage = questionPageTemplate();

  if (value == startPage) {
    return startPage;
  } else if(value == questionPage) {
    return questionPage;
  }

}

function render(value) {
  const slideString = checkWhichSlide(value);
  $('main').html(slideString);
}