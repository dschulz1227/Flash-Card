import React, { Component } from 'react'
import FlashcardDisplay from './CardDisplay'

class CardStack extends Component {

constructor(props) {
    super(props)

    this.state = {
        cardstack: this.props.cardStack,
        index:''
    
    }
    // console.log(this.props.cardStacks)
}


    render() {
    


        return (
            <div>
               {/* <FlashcardDisplay cardstack = {this.props.cardStack}/> */}
              {/* <FlashcardDisplay cardStack = {this.props.cardstack} key={this.cardStack.title}/> */}
                        
            </div>
        )
    }
}

export default CardStack
