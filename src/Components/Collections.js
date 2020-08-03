import React, {Component} from 'react'

class Collections extends Component {

    constructor(props) {
        super(props)

        this.state = {
            collection: this.props.collection,
            key: this.props.Key

        }
        // console.log(this.state.collection) this.changeCollection =
        // this.changeCollection.bind(this)
    }

    //    changeCollection=()=>    this    .state    .collection    .map((card, i)
    // => {        if (card.title === this.state.currentCard.title) {
    // this.setState({                collection: this.state.collection[i]
    //  })            return this.state.collection;        }        return
    // this.state.collection;    })

    render() {
        console.log(this.state.collection)

        return (
            <div className="card">
                {this.state.collection.title}

                {/* <button onClick={this.changeCollection}>Change Collections

            </button> */}

            </div>

        )
    }
}

export default Collections
