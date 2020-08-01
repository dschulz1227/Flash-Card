import React, {Component} from 'react'
import '../app.css'
import Card from '../Components/Card'


// class Flashcard extends Component {     return (     <div className =
// "card-container">         <div className ="card front"> <GetData/> </div>
// </div>     )     render()         return{   }     } } export default
// Flashcard I WANT TO GET CARD DATA, PUT TITLE ON FIRST CARD OF EACH STACK
// (REACT AND C#) I WANT TO PUT QUESTION AND OPTIONS ON FRONT OF CARD DISPLAY
// ANSWERS ON BACK OF CARD WHEN CLICKED


class FlashcardDisplay extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cardInfo: this.props.cardstack
            
        };
        // console.log(this.props.cardstack)
    }

    render() {
        return (
          <div  >
        <Card cardInfo = {this.state.cardInfo}/>
           </div>
        )
    }
}

export default FlashcardDisplay

// this.state.cardInfo.cards[this.state.currentCard]