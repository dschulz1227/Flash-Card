import React, { Component } from 'react'

class GetIdentity extends Component {

    constructor(props){
        super(props);
        this.state = {
          GetIdentity: [],
        };
        
        getAllCollections() {
            axios.get('http://localhost:5000/api/collections/id').then((res) => {
              const idcollection = res.data;
              console.log(idcollection);
              this.setState({
                idcollections: idcollections,
              });
            });
          }

    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default GetIdentity

