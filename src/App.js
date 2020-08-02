import React from 'react';
import './app.css'
import axios from 'axios';
import FlashcardDisplay from './Components/CardDisplay';
import Collections from './Components/Collections'
import Card from './Components/Card'
import CardDisplay from './Components/CardDisplay';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collections: {},
            currentCollection: {},
            key: '',
            loading: true

        }
    }

    //THIS IS THE GET REQUEST CALLED WHILE APP IS RENDERING
    componentDidMount() {
        let flashcardAPIendpoint = 'http://localhost:5000/api/collections'
        axios
            .get(flashcardAPIendpoint)
            .then((response) => {
                const data = response.data;
                console.log(data);
                this.setState({
                    collections: data,
                    currentCollection: data[0],
                    loading: !true,
                    currentCard: data[0].cards[0]
                });
                console.log(this.state.collections)
            });

    };


    

    // THIS IS THE POST REQUEST FUNCTION
    postData = () => {
        axios.post('http://localhost:5000/api/collections', {
            Word: '',
            Definition: ''
        })
    }


    updateCurrent(onClick) {
        this.setState({currentCollection: this.state.currentCollection})
        
    }

    render() {
        if (this.state.loading) {
            return (null)
        }
        return (
            <div>
                <div>
                    <header>
                        <h1 className="jumbotron">
                            flashcards
                        </h1>
                        
                    </header>
                </div>
                <div className="collections">
                    {
                        this.state.collections.map((c, i) => {
                            return (
                                <div>
                                    <Collections buttonClick={this.updateCurrent.bind(this)} collection={c} Key={i}/>
                                </div>
                            )
                        }
                        )
                    }
                </div>
                <div className="cards">
                    {
                        <CardDisplay cards={this.state.currentCollection.cards} />
                    }
                </div>
            </div>
        )
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

// Active ={this.state.currentCardStackIndex} onClick ={this.props.onClick}
// ADDDITIONAL PROPS FOR COLLECTIONS CALL