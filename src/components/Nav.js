import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';


function Nav(props) {
    return (
        <div className="Nav">
            <ul>
                <li><NavLink to="/dogs" exact activeClassName="selected">Home</NavLink></li>
                {
                    props.names.map(n => (
                        <li key={n}>
                            <NavLink to={`/dogs1/${n}`} activeClassName="selected">{n}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Nav;