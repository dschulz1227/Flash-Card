import React, {Component} from 'react'

class Collections extends Component {

    constructor(props) {
        super(props)

        this.state = {
            collection: this.props.collection,
            key: this.props.Key

        }
        console.log(this.state.collection)
        
    }

   



    render() {
        console.log(this.state.collection)
        return ( 
            <div className="card">
                {this.state.collection.title}
                <button onClick={this.props.buttonClick.bind(this.state.collection)}>get bigger</button>
            </div>

            
        )
    }
}

export default Collections
