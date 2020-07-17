import axios from 'axios'

export const PAGE_LOAD = 'PAGE_LOAD'

export const FORM_SUBMIT_STARTS = 'FORM_SUBMIT_STARTS'
export const FORM_SUBMIT_SUCCESS = 'FORM_SUBMIT_SUCCESS'

export const loadingPage = () => {
    return dispatch => {
        axios.get(`http://localhost:3333/smurfs`)
            .then(res => {
                dispatch({ type: PAGE_LOAD, payload: res.data})
    })
            .catch(err => console.log('error:', err))
}}

export const formSubmit = values => {
    return dispatch => {
        console.log(values)
        //Form is Submitting
        dispatch({ type: FORM_SUBMIT_STARTS})
        //Submit Form
        axios.post('http://localhost:3333/smurfs', values)
            .then(() => {
                axios.get(`http://localhost:3333/smurfs`)
                    .then(res => {
                        dispatch({ type: FORM_SUBMIT_SUCCESS, payload: res.data})
                        //res.data
                    })
                    .catch(err => console.log('error:', err))
                })
            .catch(err => console.log('error:', err))
        
    }
}