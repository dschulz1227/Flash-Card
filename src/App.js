import React from 'react';
import './app.css'
import GetData from './Components/GetData.js'
import Flashcard from './Components/Flashcard';
import FunctionClick from './Components/FunctionClick';

function App() {

    return (
      <body>
        <h1>Flashcards</h1>
        <div>

            {< FunctionClick />}
            {< Flashcard/>}
            {<Flashcard/>}
        </div>
      </body>
    );
}

export default App;
