import React from 'react';
import './app.css'
import Flashcard from './Components/Flashcard';
import FunctionClick from './Components/FunctionClick';
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
              <Flashcard displayText={this.state.data[0].title} />
              <Flashcard displayText={this.state.data[0].cards[0].word} />
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

