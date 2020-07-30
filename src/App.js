import React from 'react';
import './app.css'
import axios from 'axios';
import Flashcard from './Components/Flashcard';
import CardFront from './Components/CardFront'
import FlashFlip from './Components/FlashFlip'
// import FlashcardList from './Components/FlashcardList'

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

    GetList=(data)=>{
        let thing = [];
        for(let i = 0 ; i <data[0].cards.length; i++){
            thing.push(<Flashcard flashcard={data[0].cards[i].definition} key={i}/>)
            thing.push(<Flashcard flashcard={data[0].cards[i].word} key={i}/>)
        }
        
        return thing;
    }

    render() {
        if (this.state.loading === true) {
            return (
                <div></div>
            )

        } else {

            return (
                <body>
                    <div>
                        {/* <FlashcardList/> */}

                        <h1 className="jumbotron">
                            Flashcards
                        </h1>
                        {this.GetList(this.state.data)}
                        */THESE ARE THE MAIN DECK, THEY NEED GENEREATE LIST LOGIC/*

                        <div className="titleContainer">
                            <p className="card">
                                <Flashcard displayText={this.state.data[0]}/>
                            </p>
                            <p className="card">
                                <Flashcard displayText={this.state.data[1]}/>
                            </p>
                        </div>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <div>
                            <div className="card" >
                                <FlashFlip displayText={this.state.data[0].cards[0]}/>

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