import React, {Component} from 'react'
import '../app.css'
import Card from '../Components/Card'
import axios from 'axios'

// class Flashcard extends Component {     return (     <div className =
// "card-container">         <div className ="card front"> <GetData/> </div>
// </div>     )     render()         return{   }     } } export default
// Flashcard I WANT TO GET CARD DATA, PUT TITLE ON FIRST CARD OF EACH STACK
// (REACT AND C#) I WANT TO PUT QUESTION AND OPTIONS ON FRONT OF CARD DISPLAY
// ANSWERS ON BACK OF CARD WHEN CLICKED

class CardDisplay extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cards: this.props.cards,
            currentCard: this.props.cards[0]
        };
        console.log(this.props.cards)
    }

    //getPrevious, getNext, add functions live here
    getPrevious = () => {
        this
            .state
            .cards
            .map((card, i) => {
                if (card._id === this.state.currentCard._id && i > 0) {
                    this.setState({
                        currentCard: this.state.cards[i - 1]
                    })
                    return this.state.currentCard;
                }
                return this.state.currentCard;
            })
    }

    getNext = () => {
        let l = this.state.cards.length - 1;
        this
            .state
            .cards
            .map((card, i) => {
                if (card._id === this.state.currentCard._id && i < l) {
                    this.setState({
                        currentCard: this.state.cards[i + 1]
                    })
                    return this.state.currentCard;
                }
                return this.state.currentCard;
            })

    }

    render() {

        return (
            <div>
                <div className="my-row">
                    <button onClick={this.getPrevious} className="headButton">Previous Card</button>
                    {/* <button onClick={this.postData} className="headButton">Add Card</button> */}
                    <button onClick={this.getNext} className="headButton">Next Card</button>

                </div>
                <div className ="collections">
                <div className="card">
                    <div
                        style={{
                        fontWeight: "bolder"
                    }}>
                        {this.state.currentCard.word}
                    </div>
                    <br/>
                    <div>{this.state.currentCard.definition}</div>
                    <Card card={this.state.currentCard}/>
                </div>
                </div>
                

            </div>
        )
    }
}

export default CardDisplay
