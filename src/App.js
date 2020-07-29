import React from 'react';
import './app.css'
import Frontcard from './Components/Flashcard';
import FlipCard from './Components/FlipCard';
import axios from 'axios';




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
                this.setState({
                  data: response.data,
                loading: false}); 
                              
            });         
    };

    render() {
      if(this.state.loading === true){
      return(<div></div>)

      }else{
        
        return (
          <body>
            <h1 className="jumbotron"> Flashcards </h1>
            <div>
              <p className="row"> <Frontcard displayText={this.state.data[0].title} /> </p>
              <p className="row"> <Frontcard displayText={this.state.data[1].title} /> </p>
            </div>
            {/* <div>
                {collections.length ? collections.map(collections => <div key={collections.id}>{collections.title}</div>)
                : null
                }
            </div>  */}
          </body>
        )
    }   
  }
  }

  export default App;

/* <Flashcard displayText={this.state.data[0].cards[0].word} />    <----THIS GIVES WORD OF FIRST CARD IN REACT STACK*/   