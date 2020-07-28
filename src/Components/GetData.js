import React from 'react';
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap';
import '../app.css';

class GetData extends React.Component {

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

        )
    }

}

export default GetData;