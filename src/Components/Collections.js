import React, {Component} from 'react'
import CardStack from './CardStack'

export class Collections extends Component {

    constructor(props) {
        super(props)

        this.state = {
            stackofCards: [this.props.cardStacks],
            key:'i'

        }
        console.log(this.state.stackofCards)

        // console.log(props.cardStacks)
        // console.log(this.props.cardStacks)
        // console.log([this.props.cardStacks])
        // console.log([props.cardStacks])
        // console.log(this.cardStacks)
        // console.log([this.cardStacks])
    }

    render() {
        return ( 
            <div>
               {this
                    .state 
                    
                    .stackofCards
                    
                    .map((cardStack, i) => 
                    
                    <CardStack
                        cardStack={cardStack}
                        key={[i]}/>)}       
            </div>
        )
    }
}

export default Collections
