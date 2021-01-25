import React from 'react';

class Smurf extends React.Component {
    render() {
      //1. Access smurf to be displayed through props.
        const { smurf } = this.props;

        return (
            <div data-testid="smurf" className="card">
              {/* 2. Display the name, position, nickname and description of the provided smurf as needed. */}
                <h5>{smurf.name}</h5>
                <h6>{smurf.nickname}</h6>
                <h6>{smurf.position}</h6>
                <p>{smurf.decription}</p>
            </div>
          );
        }
      }

export default Smurf;

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.