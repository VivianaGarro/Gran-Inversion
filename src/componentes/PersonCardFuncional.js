import React, { useState } from "react";

const PersonCardFuncional = ({lastName, firstName, age, hairColor}) => {

    const [age, setAge] = useState(age);

        const cumple =() => {
            setAge (age, 2);
        }
        }

    return (
        <div>
            <h2>{firstName} {lastName}</h2>
            <p>Edad: {age}</p>
            <p>Ciudad: {hairColor}</p>
            <button className="btn btn-warning" onClick={cumple}>Boton Cumpleanos for {fistName}</button>
        </div>

    )



export default PersonCardFuncional;



