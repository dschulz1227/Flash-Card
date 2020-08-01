import React from 'react';
import './app.css'
import axios from 'axios';
import FlashcardDisplay from './Components/CardDisplay';
import Collections from './Components/Collections'
import CardStack from './Components/CardStack';
import Card from './Components/Card'



class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardStacks: [],
            // currentCardStackIndex: 0,
            loading: true

        }
    }

    //THIS IS THE GET REQUEST CALLED WHILE APP IS RENDERING
    componentDidMount() {
        let flashcardAPIendpoint = 'http://localhost:5000/api/collections'
        axios
            .get(flashcardAPIendpoint)
            .then((response) => {
                const Stacks = response.data;
                console.log(Stacks);
                this.setState({
                    cardStacks: Stacks,
                    // currentCardStackIndex: 0,
                    loading: !true
                });
            });
    };

    // THIS FUNCTION TAKES API DATA AND STORES IT INTO ARRAYS GetList=(data)=>{
    // let thing = [];     for(let i = 0 ; i <data[0].cards.length; i++){
    // thing.push(<Flashcard flashcard={data[0].cards[i].definition} key={i}/>)
    //    thing.push(<Flashcard flashcard={data[0].cards[i].word} key={i}/>)
    // thing.push(<Flashcard flashcard={data[1].cards[i].definition} key={i}/>)
    //    thing.push(<Flashcard flashcard={data[1].cards[i].word} key={i}/>)     }
    //   this.GetList = this.GetList.bind(this)     console.log(thing)     return
    // thing; } THIS IS THE POST REQUEST FUNCTION
    postData = () => {
        axios.post('http://localhost:5000/api/collections', {
            Word: '',
            Definition: ''
        })
    }

    render() {

        if (this.state.loading === true) {
            return (null)

        } else {
            
            return (
                <body>
                    <div>
                        <header>
                            <h1 className="jumbotron">
                                flashcards
                             </h1>  
                                <div className="my-row">
                                    <button className="headButton">Previous Card
                                    </button>
                                    <button className="headButton">Add Card
                                    </button>
                                    <button className="headButton">Next Card
                                    </button>

                                    
                                <div>
                                </div>


                                </div>

                                
                            

                        </header>
                    </div>
                    <div className="card">
                    <Collections Stacks={this.state.cardStacks} />
                    
                

                    {/* <Flashcard displayText={this.state.cardStacks[0].title}/>
                    <Flashcard cardStack={this.state.cardStacks[this.state.currentCardStackIndex]}/> */}
                
                    </div>

                </body>
            )
        }
    }
}

export default App;

/* <Flashcard displayText={this.state.data[0].cards[0].word} />    <----THIS GIVES WORD OF FIRST CARD IN REACT STACK*/


        /* <button onClick={() => this.GetList(this.state.data)}>Click Me</button> */
                        /* {this.GetList(this.state.data)}                         */

                        // eslint-disable-next-line no-lone-blocks
                        /* <div className="titleContainer">
                            <p>
                                <Flashcard displayText={this.state.data[0].title}/>
                            </p>
                            <p className="card">
                                <Flashcard displayText={this.state.data[1].title}/>
                            </p>
                            </div>
                            <div>
                            <div className="card" >
                                <FlashFlip displayText={this.state.data[0].cards[0]}/>
                            </div>
                            </div> */



                            // Active ={this.state.currentCardStackIndex} onClick ={this.props.onClick}   ADDDITIONAL PROPS FOR COLLECTIONS CALL