import React from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';


function DogList(props) {

    let dogsJsx = props.dogs.map(d => (
        <Link to={`/dogs3/${d.name}`} key={d.name}>
            <img src={d.src} alt={d.name} />
            <h3>{d.name}</h3>
        </Link>
    ));

    return (
        <div className="DogList">
            <h1>Doggone!</h1>
            <div className="grid">
                {dogsJsx}
            </div>
        </div>
    );
}

export default DogList;