import React, {Component} from 'react'
import CardStack from './CardStack'

export class Collections extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cardStacks: [this.props]
            // key:'index'

        }
        console.log([this.props])

        console.log(props.cardStacks)
        console.log(this.props.cardStacks)
        console.log([this.props.cardStacks])
        console.log([props.cardStacks])
        console.log(this.cardStacks)
        console.log([this.cardStacks])
    }

    render() {
        return ( 
            <div>
               {this
                    .state 
                    .cardStacks
                    .map((cardStack, i) => 
                    <CardStack
                        cardStack={cardStack[i]}
                        key={i}
                        
                        
                        // onClick={() => this.props.onClick(index)}
                        // isActive={this.props.currentCardStackindex === index}/>)}
                        />)}       
            </div>
        )
    }
}

export default Collections
