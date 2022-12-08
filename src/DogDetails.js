import React from 'react';
import { Link, Route, Navigate, Routes } from 'react-router-dom'
import './DogDetails.css'

const DogDetails = ({dog}) => {
    if (!dog) return <Routes><Route path="*" element={<Navigate to="/dogs" replace />}/></Routes>

    return (
        <div className='dog-details'>
            <h2>{dog.name}</h2>
            <img src={dog.src} alt={dog.name} />
            <h3>Age: {dog.age} years old</h3>
            <ul>
                {dog.facts.map((fact,i) => (
                    <li key={i}>{fact}</li>
                ))}
            </ul>
            <Link to='/dogs'>Go back</Link>
        </div>
    )
}

export default DogDetails;