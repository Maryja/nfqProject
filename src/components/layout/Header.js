import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props)=>{
    return (
        <header>
          <NavLink exact activeClassName='active' to='/'>Paslaugos</NavLink>
          <NavLink activeClassName='active' to='/orders'>Užsakymai</NavLink>
        </header>
    );
};
export default Header