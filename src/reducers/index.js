import {FETCHING_SMURFS_START, FETCHING_SMURFS_SUCCESS, FETCHING_SMURFS_FAIL, ADD_SMURF} from '../actions';

//1. Add in the initialState needed to hold: 
export const initialState = {
    //      - an array of smurfs
    smurfs: [],
    //      - a boolean indicating if the app is loading
    isFetching: false,
    //      - error text
    error: ''
}

//2. Setup your reducer to take the state and action as peremeters
export const reducer = (state = initialState, action) => {
    //3. Add in cases to your reducer to handle:
    switch (action.type) {
        //      - The start of an api call
        case(FETCHING_SMURFS_START):
        return({
            ...state,
            isFetching: true,
            error: ''
        })
        //      - The end of an api call
        case(FETCHING_SMURFS_SUCCESS):
        return({
            ...state,
            isFetching: false,
            smurfs: [...action.payload]
        })
        case(FETCHING_SMURFS_FAIL):
        return({
            ...state,
            error: action.payload
        })
        //      - The adding a smurf to the smurf list when added into payload
        case(ADD_SMURF):
        const newSmurf = {
            name: action.payload,
            position: action.payload,
            nickname: action.payload,
            description: action.payload   
        };
        return({
            ...state,
            smurfs: [...state.smurfs, newSmurf]
        })
        default:
            return(state)
    }
}

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary