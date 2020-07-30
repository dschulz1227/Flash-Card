import React from 'react';
import './app.css'
import axios from 'axios';
import Flashcard from './Components/Flashcard';
import CardFront from './Components/CardFront'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true
        }
    }
    componentDidMount() {
        axios
            .get('http://localhost:5000/api/collections')
            .then((response) => {
                const data = response.data;
                console.log(data);
                this.setState({data: response.data, loading: false});

            });
    };

    render() {
        if (this.state.loading === true) {
            return (
                <div></div>
            )

        } else {

            return (
                <body>
                    <div>

                        <h1 className="jumbotron">
                            Flashcards
                        </h1>

                        */THESE ARE THE MAIN DECK, THEY NEED GENEREATE LIST LOGIC/*

                        <div className="titleContainer">
                            <p className="card">
                                <Flashcard displayText={this.state.data[0]}/>
                            </p>
                            <p className="card">
                                <Flashcard displayText={this.state.data[1]}/>
                            </p>
                        </div>

                        <div className="container-fluid">
                            <div>
                                <Flashcard className="card" displayText={this.state.data[0].cards[0]}/>

                            </div>
                        </div>
                    </div>
                </body>
            )
        }
    }
}

export default App;

/* <Flashcard displayText={this.state.data[0].cards[0].word} />    <----THIS GIVES WORD OF FIRST CARD IN REACT STACK*/