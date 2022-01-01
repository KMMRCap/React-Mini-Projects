import React from "react";
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <h1>{props.header}</h1>
            {props.nolink ? null : <Link to='/'>Landing Page</Link>}
        </header>
    );
}

export default Header;