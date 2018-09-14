import React from 'react';
import {NavLink} from 'react-router-dom';

const NotFound = (props)=>{
    return (
        <div className='pagenotfound'>
          <h1>Tokio puslapio nėra</h1>
          <h2><NavLink to='/'>Grižti į pagrindinį puslapį</NavLink></h2>
        </div>
    );
};
export default NotFound