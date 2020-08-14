import React, {useState} from "react";
import { formSubmit } from "../store/actions/smurfActions";
import {connect} from 'react-redux'

const initialForm = {
    name: '',
    age: 0,
    height: ''
}

const Form = props => {
    const [ form, setForm ] = useState(initialForm)

    const handleForm = e => {
        setForm({...form, [e.target.name]:e.target.value})
    }
    
    //Basic Submit logic
    const onSubmit = e => {
        e.preventDefault()
        const age = Number(form.age)
        const height = `${form.height}cm`
        const newSmurf = {
            name:form.name,
            age: age,
            height: height
        }
        props.formSubmit(newSmurf)
    }
    return (
        <div>
            <p>This is the form</p>
            <form onSubmit={onSubmit}>
                <input
                type='text'
                name='name' 
                value={form.name}
                onChange={handleForm}/>

                <input
                type='number'
                min='0'
                max='999' 
                name='age' 
                value={form.age}
                onChange={handleForm}/>

                <input
                type='number'
                name='height' 
                min='1'
                max='10'
                value={form.height}
                onChange={handleForm}/>

                <button>Submit a new Smurf</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        
    }
   }

export default connect(mapStateToProps, {formSubmit})(Form)