import React from "react";

const Smurf = props => {
    console.log(props)
    return (
        <div>
            <h3>This is a Smurf!</h3>
            <p>His name is {props.smurf.name}, he is {props.smurf.age} years old, and he is {props.smurf.height} tall!</p>
        </div>
    )
}

export default Smurf