import React from "react";
import { Link} from 'react-router-dom';
import './DogList.css'

const DogList = ({dogs}) => {

    return (
        <>
        <h1>Hewwo, here are the doggos.</h1>
        <div className='doglist'>
                {dogs.map(dog => (
                    <div key={dog.name}>
                        <img src={dog.src} alt={dog.name} />
                        <p>
                            <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
                        </p>
                    </div>
                ))}
        </div>
        </>
    )
}

export default DogList;