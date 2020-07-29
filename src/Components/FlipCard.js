import React, {Component, setState} from 'react';
import Flashcard from './Flashcard';
import ReactCardFlipped from 'react-card-flip' ;
import Frontcard from './Flashcard';


class FlipCard extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
           isFlipped: false 
        };
        this.handleFlip = this.handleFlip.bind(this);
    }

    handleFlip(e) {
        e.preventDefault();
        this.setState(prevState => ({isFlipped: !prevState.isFlipped}));
    }

    render() {
        return (
           <ReactCardFlipped isFlipped ={this.state.isFlipped} flipDirection="vertical">
               <Frontcard>

               <button onClick={this.handleFlip}>Flip Card </button>
               </Frontcard>






           </ReactCardFlipped>
        )
    }
}
export default FlipCard
