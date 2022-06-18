import React from 'react';

const Print = (props) =>{
    console.log(props); 
    return(
      <div>
        Name : { props.data.name }
      </div>
    )
}

export default Print;