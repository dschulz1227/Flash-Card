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

    getAllCollections() {
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

    }

    componentDidMount() {
        this.getAllCollections();
    };

    // THIS IS THE POST REQUEST FUNCTION
    // SubmitNewCard() {
    //     let word = document
    //         .getElementById("word")
    //         .value;
    //     let definition = document
    //         .getElementById("definition")
    //         .value;

    //     // alert('word ' + word);
    //     // alert('definition', definition);

    //     axios
    //         .post('http://localhost:5000/api/collections/' + this.state.collections[this.state.currentCollection]._id + '/cards', {
    //         "word": word,
    //         "definition": definition
    //     })

    //     this.getAllCollections()
    // }

    //need change stack function

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
                    {this
                        .state
                        .collections
                        .map((c, i) => {
                            return (
                                <div>
                                    <Collections collection={c} Key={i}/>
                                </div>
                            )
                        })
}
                </div>
                <div className="cards">
                    < CardDisplay cards = {
                        this.state.currentCollection.cards
                    } />

                </div>
               
                {/* <div>
                    <form >
                        <label>
                            Word -
                            <input id="word" type="text"/>
                        </label>
                        <label>
                            Definition -
                            <input id="definition" type="text"/>
                        </label>
                        <input type="submit" value="Submit" onClick={() => this.SubmitNewCard()}/>
                    </form>
                </div> */}
            </div>
        )
    }
}

export default App;

