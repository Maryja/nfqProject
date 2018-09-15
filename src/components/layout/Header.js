import React from 'react';
import {NavLink} from 'react-router-dom';
import {header} from '../../sandbox/named-exports';
import TypeWriter from 'react-typewriter';

const Header = (props)=>{
    return (
        <header>
          <div className="text">
            <TypeWriter typing={1}>{header}</TypeWriter>
          </div>
          <nav>
          <NavLink exact activeClassName='active' to='/'>Home</NavLink>
          <NavLink activeClassName='active' to='/orders'>Orders</NavLink>
          </nav>
        </header>
    );
};
export default Header