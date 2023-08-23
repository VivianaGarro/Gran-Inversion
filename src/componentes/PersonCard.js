import React from 'react';

class PersonCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            edad: this.props.edad
        }
    }

    render() {
        const {lastName, firstName, age, hairColor} = this.props;
        return (
            <div className="row justify-content-center">
                <div className="col-3 card mb-3 p-3">
                    <h2>{lastName} , {firstName}</h2>
                    <p>Edad: {age}</p>
                    <p>Color de Cabello: {hairColor}</p>
                    <button className="btn btn-warning" onClick={ this.cambiarEdoCivil}>Cambiar Estado  Civil</button>
                    
                </div>
                
            </div>
        )

        
    }
    
}
export default PersonCard;