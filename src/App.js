import React from 'react';
import './app.css'

function App() {
  return (
    
      <div className="row">
        <h1  className = "col-sm 2 col-md-6 col-lg-12">
        Flashcards
        </h1>
      </div>
    
  );
}



const SAMPLE_FLASHCARDS = [
  {
    id:1,
    question: 'What is 2 + 2?',
    answer:'4',
    options:[
      '5',
      '4',
      '3'
    ]
  },
  {
    id:2,
    question: 'What is 4 + 4?',
    answer:'8',
    options:[
      '8',
      '9',
      '10'
    ]
  }
]


export default App;
