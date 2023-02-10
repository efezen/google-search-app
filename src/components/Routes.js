import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Results from "./Results";
function Routess() {
  return (
    <div className='p-4'>
        <Routes>
            <Route exact path='/' />
                <Navigate to="/search" />
            <Route exact path='/search' />
                <Results/>
            <Route exact path='/images' />
                <Results/>
            <Route exact path='/news' />
                <Results/>
            <Route exact path='/videos' />
                <Results/>
        </Routes>
    </div>
  )
}

export default Routess;