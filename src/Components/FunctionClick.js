import React, {Component, setState} from 'react';
import Flashcard from './Flashcard';

class FunctionClick extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: "hello"
        }
    }

    clickHandler() {
        this.setState({message: "goodbye!"})
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.message}
                </div>

                <button
                    onClick={this
                    .clickHandler
                    .bind(this)}>Click</button>
            </div>
        )
    }
}
export default FunctionClick
