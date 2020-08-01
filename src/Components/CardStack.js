import React, { Component } from 'react'
import FlashcardDisplay from './CardDisplay'
import Collections from '../Components/Collections'

class CardStack extends Component {

constructor(props) {
    super(props)

    this.state = {
        cardstack: this.props.title,
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
