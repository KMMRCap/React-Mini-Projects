import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav>
            <NavLink to='/flash-card-app/add-question' >Add Question</NavLink>
            <NavLink to='/flash-card-app/quiz' >Quiz</NavLink>
            <NavLink to='/flash-card-app/questions' >Questions</NavLink>
        </nav>
    );
}
 
export default Navbar;