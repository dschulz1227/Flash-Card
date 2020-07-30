import React, {Component} from 'react'
import CardFront from '../Components/CardFront'
import CardBack from '../Components/CardBack'
import '../app.css'


// class Flashcard extends Component {     return (     <div className =
// "card-container">         <div className ="card front">
// <GetData/>         </div>     </div>     )     render()         return{
//   }     } } export default Flashcard I WANT TO GET CARD DATA, PUT TITLE ON
// FIRST CARD OF EACH STACK (REACT AND C#) I WANT TO PUT QUESTION AND OPTIONS ON
// FRONT OF CARD DISPLAY ANSWERS ON BACK OF CARD WHEN CLICKED

class Flashcard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cardFlipped : false
        }
    }

    render(){
        return(
    <div>
        {!this.state.cardFlipped?
            <CardFront displayThing={this.props.displayText.title}/> //pass props
        :
            <CardBack/>
        }
        

        
        {/* <p className="card titleContainer"> {this.props.displayText.definition} </p> */}
    </div>
        );
    };
}


export default Flashcard;
