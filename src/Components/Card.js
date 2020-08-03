import React, {Component} from 'react'
import CardDisplay from '../Components/CardDisplay'
import FlashFlip from '../Components/FlashFlip'

class Card extends Component {

    constructor(props) {
        super(props)

        this.state = {

            card: this.props.card,

            // isFlipped: false

        }
    }

    render() {
        return (
            <div>
                {/* <CardDisplay/> */}
            </div>
        )
    }
}

export default Card
