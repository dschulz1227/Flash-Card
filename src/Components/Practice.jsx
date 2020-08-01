import React from 'react'

function Practice(props) {
    const myColl = props.myColl;
    
    
    const collItems = myColl.map((collList) =>  
   
   
    <li>{collList.push(collItems.title)}</li>  
  );  
    return (
        <div>
            <h2>Did it work</h2>
            <ul>{collItems}</ul>
            
        </div>
    )
}

export default Practice
