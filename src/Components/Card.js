// import React, {Component} from 'react'
// import CardDisplay from '../Components/CardDisplay'
// import FlashFlip from '../Components/FlashFlip'
// import ReactCardFlip from 'react-card-flip';

// class Card extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             cardFront: this.props.word,
//             carBack: this.props.definition,
//             isFlipped: false

//         };
//         this.handleClick = this
//             .handleClick
//             .bind(this)
//     }
//     handleClick() {
//         this.setState(prevState => ({
//             isFlipped: !prevState.isFlipped
//         }))
//     }
        
//     render() {
//         return (
//             <div>

//                 <button onClick={this.handleClick}>Click Button</button>

//                 {!this.state.cardFlipped
//                     ? <Card cardFront={this.state.word}/> //pass props
//                     : <Card cardBack={this.state.definition}/>
//                 }

//             </div>
//         );
//     };
// }

//     export default Card
