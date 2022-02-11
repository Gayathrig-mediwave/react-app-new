import { Link } from "react-router-dom";
export const NavBar=()=>{
    return(
        <ul>
            <li><Link to="/">HomePage</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    );
    
};