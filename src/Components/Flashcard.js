import React, {Component} from 'react'
import CardFront from '../Components/CardFront'
import '../app.css'

// class Flashcard extends Component {     return (     <div className =
// "card-container">         <div className ="card front"> <GetData/> </div>
// </div>     )     render()         return{   }     } } export default
// Flashcard I WANT TO GET CARD DATA, PUT TITLE ON FIRST CARD OF EACH STACK
// (REACT AND C#) I WANT TO PUT QUESTION AND OPTIONS ON FRONT OF CARD DISPLAY
// ANSWERS ON BACK OF CARD WHEN CLICKED

function Flashcard (props){

   

   
        return (
            <div>
                {props.flashcard}
                {/* <CardFront displayThing={props.flashcard.word}/> <p className="card titleContainer"> {this.props.displayText.definition} </p> */}
            </div>
        );
    
}

export default Flashcard;
