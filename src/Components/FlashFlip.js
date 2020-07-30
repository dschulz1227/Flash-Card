import React, {Component} from 'react';
import CardFront from '../Components/CardFront';
import CardBack from '../Components/CardBack';
import '../app.css';
import ReactCardFlip from 'react-card-flip';


// class Flashcard extends Component {     return (     <div className =
// "card-container">         <div className ="card front"> <GetData/>
// </div>     </div>     )     render()         return{   }     } } export
// default Flashcard I WANT TO GET CARD DATA, PUT TITLE ON FIRST CARD OF EACH
// STACK (REACT AND C#) I WANT TO PUT QUESTION AND OPTIONS ON FRONT OF CARD
// DISPLAY ANSWERS ON BACK OF CARD WHEN CLICKED

class FlashFlip extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped}))
    }

    render(){
      return(
  <div>

    <button onClick={this.handleClick}>Click Button</button>

      {!this.state.cardFlipped?
          <CardFront displayThing={this.props.displayText.word}/> //pass props
      :
          <CardBack displayThing={this.props.displayText.definition} />
      }
      

      
  </div>
      );
  };
}

      


export default FlashFlip;


