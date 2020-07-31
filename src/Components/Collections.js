import React, {Component} from 'react'
import CardStack from './CardStack'

export class Collections extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cardStacks: this.props.Stacks,
            key:'index'

        }
        console.log(this.Stacks)
    }

    render() {
        return ( 
            <div>
               {this
                    .state 
                    .cardStacks
                    .map((cardStack, index) => 
                    
                    <CardStack
                        cardStack={cardStack}
                        key={index}
                        onClick={() => this.props.onClick(index)}
                        isActive={this.props.currentCardStackindex === index}/>)}
                        
            </div>
        )
    }
}

export default Collections
