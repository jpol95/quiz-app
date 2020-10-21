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

//

