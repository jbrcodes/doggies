import React from 'react';
import { useParams } from 'react-router-dom';
import Error404 from './Error404';
import './DogDetails.css';


function DogDetails(props) {
    const { name } = useParams();

    // Which way are we called? Option 1 or 3 (in App.js)?
    let dog = null;
    if (props.dogs) {
        // Option 1
        dog = props.dogs.find(d => d.name === name);
    } else {
        // Option 3
        dog = props.dog;
    }

    if (!dog) {
        return <Error404 />
    }

    return (
        <div className="DogDetails">
            <img src={dog.src} alt={dog.name} />

            <div>
                <h1>{dog.name}</h1>
                <p>Age: {dog.age}</p>
                <h2>Fun Facts</h2>
                <ul>
                {
                    dog.facts.map(f => <li key={f}>{f}</li>)
                }
                </ul>
            </div>
        </div>
    );
}

export default DogDetails;