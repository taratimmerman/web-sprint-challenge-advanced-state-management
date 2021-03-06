import React, { useState } from 'react';
//1. Add in all necessary import components and library methods.
import { addSmurfs } from '../actions';
import { useDispatch } from 'react-redux';

//3. Add state holding name, position, nickname and description to component.
const initialState = {
    name: '',
    position: '',
    nickname: '',
    description: ''
}

const AddForm = () => {

    const [formValues, setFormValues] = useState(initialState)
    //2. Connect all needed redux state props and action functions to the component before exporting.
    const dispatch = useDispatch()

    //6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
    const handleSubmit = e => {
        const newSmurf = {...formValues}
        console.log(newSmurf)
 
         e.preventDefault();
         setFormValues(initialState)
         dispatch(
             addSmurfs(newSmurf)
         )
    };

    //5. Build eventhandler and listener needed to change the state.
    const handleChange = e => {
        const value = e.target.value;
        setFormValues({
            ...formValues,
            [e.target.name]:value,
        })
    };

    return (<section>
        <h2>Add Smurf</h2>
        {/* 4. Build form DOM to include inputs for name, position and description of the component. */}
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
                <label htmlFor="name">Name:</label><br />
                <input onChange={handleChange} name="name" id="name" />
            </div>

            <div className="form-group">
                <label htmlFor="position">Position:</label><br />
                <input onChange={handleChange} name="position" id="position" />
            </div>

            <div className="form-group">
                <label htmlFor="nickname">Nickname:</label><br />
                <input onChange={handleChange} name="nickname" id="nickname" />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description:</label><br />
                <input onChange={handleChange} name="description" id="description" />
            </div>

            {/* 7. Ensure that the included alert code only displays when error text is passed in from redux. */}
            <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: </div>

            <button type='submit'>Submit Smurf</button>
        </form>
    </section>);
}

export default AddForm;

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.