import React from "react";
import Smurf from "./Smurf";

import {connect} from 'react-redux'

const Smurfs = props => {
    console.log(props.list)
    return (
        <div>
            {props.list ? (
                <div>
                    {props.list.map(smurf => {
                        return (
                            <Smurf key={smurf.id} smurf={smurf}/>
                        )
                    })}
                </div>) 
            : (<p>Please wait, entering the village!</p>)}
            <p>These are our smurfs!</p>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        list:state.list
    }
   }
   
   export default connect(mapStateToProps, {})(Smurfs)