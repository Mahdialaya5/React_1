import React from 'react';

class Person extends React.Component{
constructor(){
   super()
}

render(){
    return(
        <>
        {this.props.data.shows ?<div className='person'>
        <h1>{this.props.data.Person.fullName}</h1>
        <p>{this.props.data.Person.bio}</p>
        <p>{this.props.data.Person.profession}</p>
        </div>:null}
        </>
    )
}
}
export default Person