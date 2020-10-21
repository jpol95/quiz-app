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

function questionPage(){
let currentQuestion = store.questions[store.questionNumber]
let display = `<form class="question"> <h2> ${currentQuestion.question}<br>` 
for (let i = 0; i < 4; i++){
display += `<input type="radio" name="answer" value="${currentQuestion.answers[i]}">
<label for="n${i}">${currentQuestion.answers[i]}</label><br>`
}
display += `<button type="submit"> Submit</button></form>`
submitAnswer()
render(display)
}
//   renderPage(string)
  
// }

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

 function render(string){
 $('.container').html(string)
 }

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function submitAnswer(){
  $('main').on('submit', '.question', function(e){
    e.preventDefault()
    let currentQuestion = store.questions[store.questionNumber]
    if ($("input[name='answer']:checked").val() === currentQuestion.correctAnswer) console.log("CORRECT!")
    else console.log("WRONG!")
})}

$(questionPage())