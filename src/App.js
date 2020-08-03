import React from 'react';
import './app.css'
import axios from 'axios';
import Collections from './Components/Collections'
import Card from './Components/Card'
import CardDisplay from './Components/CardDisplay';
import CardFront from './Components/cardFront'
import CardBack from './Components/cardBack'
import { Row } from 'react-bootstrap';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collections: {},
            currentCollection: null,
            key: '',
            loading: true,
            

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
                    
                    loading: !true,
                    currentCard: data[0].cards[0]
                });
                console.log(this.state.collections)
            });

    }

    componentDidMount() {
        this.getAllCollections();
    };
    selectCurrentStack=(id)=>{
        console.log("hello")
        this.setState({
            currentCollection: this.state.collections[id]
        })
    }
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
    GenerateCardStacks=()=>{
        let elements =[]
        for(let i = 0; i< this.state.collections.length;i++){
            elements.push(<div>
            <button onClick={() => this.selectCurrentStack(i)}><Collections collection={this.state.collections[i]} key={this.state.collections[i]}/></button>
        </div>)
        }
        return elements;
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
                
                <div style={{flexDirection: "row"}}className="collections">
                    {this.GenerateCardStacks()}
                    
                 

                </div>
                <div className="cards my-row">
                    {this.state.currentCollection !==null?
            
                    < CardDisplay cards = {this.state.currentCollection.cards} />
                    :null}

                </div>
                <div>
                    {/* <Card cardFront = {this.state.currentCard.word } cardBack ={this.state.currentCard.definition}/> */}
                </div>
               
          
            </div>
        )
    }
}

export default App;

