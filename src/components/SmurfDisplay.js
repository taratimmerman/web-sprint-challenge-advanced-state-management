//1. Import in all needed components and library methods.
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSmurfs } from '../actions';
import Smurf from './Smurf';

export const SmurfDisplay = () => {

    const dispatch = useDispatch();

    //2. Connect all needed redux state props and action functions to the component before exporting.
    //3. Fetch all smurfs when the component first mounts.
    useEffect(() => {
        dispatch(fetchSmurfs());
    }, []);

    const smurfs = useSelector((state) => state.smurfs);
    //4. Render loading text or graphic if the application is currently loading.
    const isLoading = useSelector((state) => state.isFetching);

    return (
        <div>
          {/* 5. Render a list of all Smurfs using the Smurf component if the application is not currently loading. */}
          {isLoading ? (
            <h1>Loading Smurfs</h1>
          ) : (
            smurfs.map((smurf) => <Smurf smurf={smurf} key={smurf.id} />)
          )}
          <div></div>
        </div>
      );
    };
    
    export default SmurfDisplay;

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.