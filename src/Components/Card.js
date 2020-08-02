import React, { Component } from 'react'
import FlashCardDisplay from '../Components/CardDisplay'

 class Card extends Component {

    constructor(props) {
        super(props)
    
        this.state = {

            card: this.props.card

            // isFlipped: false
            
             
        }
    }
    


    render() {
        return (
            <div>
                {this.state.card.word}
            </div>
        )
    }
}

export default Card
