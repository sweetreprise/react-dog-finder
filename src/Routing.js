import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import DogList from './DogList'
import FilterDog from "./FilterDog";

const Routing = ({dogs}) => {
    return (
        <Routes>
            <Route path='/dogs' element={<DogList dogs={dogs} />}>
            </Route>
            <Route path='/dogs/:name/*' element={<FilterDog dogs={dogs} />}>
            </Route>
            <Route path="*" element={<Navigate to="/dogs" replace />}/>
        </Routes>
    )
}

export default Routing;