import React from 'react';
import './app.css'
import GetData from './Components/GetData.js'
import Flashcard from './Components/Flashcard';
import FunctionClick from './Components/FunctionClick';

function App() {

    return (
      <body>
        <h1 className="row">Flashcards</h1>
        <div className ="row">

            {/* {< FunctionClick />} */}
            <div className="col">{< Flashcard/>} </div>
            <div className="col">{<Flashcard/>}  </div>
        </div>
      </body>
    );
}

export default App;
