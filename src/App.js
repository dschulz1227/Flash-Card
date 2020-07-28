import React from 'react';
import './app.css'
import GetData from './Components/GetData.js'
import Flashcard from './Components/Flashcard';
import FunctionClick from './Components/FunctionClick';

function App() {

    return (
        <div>

            {< FunctionClick />}
            {< Flashcard />}
            {<Flashcard/>}
        </div>
    );
}

export default App;
