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

    //THIS IS THE GET REQUEST CALLED WHILE APP IS RENDERING
    componentDidMount() {
        axios
            .get('http://localhost:5000/api/collections')
            .then((response) => {
                const data = response.data;
                console.log(data);
                this.setState({data: response.data, loading: false});
            });
    };


    //THIS FUNCTION TAKES API DATA AND STORES IT INTO ARRAYS
    GetList=(data)=>{
        let thing = [];
        for(let i = 0 ; i <data[0].cards.length; i++){
            thing.push(<Flashcard flashcard={data[0].cards[i].definition} key={i}/>)
            thing.push(<Flashcard flashcard={data[0].cards[i].word} key={i}/>)
            thing.push(<Flashcard flashcard={data[1].cards[i].definition} key={i}/>)
            thing.push(<Flashcard flashcard={data[1].cards[i].word} key={i}/>)
        }
        
        this.GetList = this.GetList.bind(this)
        console.log(thing)
        return thing;
    }

    //THIS IS THE POST REQUEST FUNCTION
    postData=()=>{
        axios
        .post('http://localhost:5000/api/collections',{
            Word:'',
            Definition:''
        })
    }
        
    

    render() {

        if (this.state.loading === true) {
            return (
                null
            )

        } else {

            return (
                <body>
                    <div>
                        {/* <FlashcardList/> */}
                        <header>
                            <h1 className="jumbotron"> dev Flashcards
                            <div className="my-row"> 
                                <button className="headButton">Click </button>
                                <button className="headButton">Click </button>
                                <button className="headButton">Click </button>
                            </div>
                             </h1>
                            
                        </header>
                        <button onClick={() => this.GetList(this.state.data)}>Click Me</button>
                         {/* {this.GetList(this.state.data)}                         */}
                       
                       
                        {/* <div className="titleContainer">
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
                        </div> */}
                    </div>
                </body>
            )
        }
    }
}

export default App;

/* <Flashcard displayText={this.state.data[0].cards[0].word} />    <----THIS GIVES WORD OF FIRST CARD IN REACT STACK*/