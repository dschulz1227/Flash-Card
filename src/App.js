import React from 'react';
import './app.css'
import GetData from './Components/GetData.js'
import Flashcard from './Components/Flashcard';
import FunctionClick from './Components/FunctionClick';
import axios from 'axios';




  class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collections: [{}]
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/api/collections')
            .then((response) => {
                console.log(response.data);
                this.setState({collections: response.data})
                
            })
    }

    render() {
        const {collections} = this.state
        return (
            <div>
                {collections.length
                    ? collections.map(collections => <div key={collections.id}>{collections.title}</div>)
                    : null
                }
            </div>
        )}
  }

  export default App;

    // return (
    //     <body>
    //         <h1 className="jumbotron">Flashcards</h1>
    //         <div className="row">

    //             {/* {< FunctionClick />} */}
    //             <div className="col">
    //                 {< Flashcard />}
    //             </div>
    //             <div className="col">
    //                 {< Flashcard/>}
    //             </div>
    //         </div>
    //         <div className ="row"></div>
    //     </body>
    // );



