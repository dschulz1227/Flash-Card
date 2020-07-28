import React, { Component } from 'react'
import GetData from './GetData';
import '../app.css'
import { render } from '@testing-library/react';

// class Flashcard extends Component {



//     return (
//     <div className = "card-container">
//         <div className ="card front">
//             <GetData/>
        
            
//         </div>
//     </div>
//     )
//     render()
//         return{

//         }
        
//     }
// }

// export default Flashcard



//I WANT TO GET CARD DATA, PUT TITLE ON FIRST CARD OF EACH STACK (REACT AND C#)
//I WANT TO PUT QUESTION AND OPTIONS ON FRONT OF CARD
//DISPLAY ANSWERS ON BACK OF CARD WHEN CLICKED


export class Flashcard extends Component {
    render() {
        return (
            <div className = "card cardContainer " >
                <GetData/>
                
            </div>
        )
    }
}

export default Flashcard

