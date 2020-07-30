import React from 'react'
import Flashcard from './Flashcard'
// import App, {data} from '../App.js'

function FlashcardList({data}) {
    

    return (
        <div>
            {data[0].map(flashcard => {
                console.log(Flashcard)
                return <Flashcard flashcard={flashcard} key={flashcard.id}/>
                
            })}
        </div>
        

    )
}

 export default FlashcardList
