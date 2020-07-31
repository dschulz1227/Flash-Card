import React, { Component } from 'react'
import FlashcardDisplay from './CardDisplay'

class CardStack extends Component {

constructor(props) {
    super(props)

    this.state = {
        cardstack: this.props.cardStack
    
    }
    // console.log(this.props.cardStacks)
}


    render() {
    


        return (
            <div className="card">
               <FlashcardDisplay cardstack = {this.props.cardStack}/>
            </div>
        )
    }
}

export default CardStack
