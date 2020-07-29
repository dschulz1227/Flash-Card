import React, {Component} from 'react'
import '../app.css'
import {render} from '@testing-library/react';

// class Flashcard extends Component {     return (     <div className =
// "card-container">         <div className ="card front">
// <GetData/>         </div>     </div>     )     render()         return{
//   }     } } export default Flashcard I WANT TO GET CARD DATA, PUT TITLE ON
// FIRST CARD OF EACH STACK (REACT AND C#) I WANT TO PUT QUESTION AND OPTIONS ON
// FRONT OF CARD DISPLAY ANSWERS ON BACK OF CARD WHEN CLICKED

class Flashcard extends Component {

    constructor(props) {
        super(props)

        this.state = {}
    }

    render(){
        return(
    <div>
        {/* <p className="card cardContainer"> {this.props.displayText} </p>   */}
        <p className="card cardContainer"> {this.props.displayText} </p>
    </div>
        );
      };
}


export default Flashcard;
