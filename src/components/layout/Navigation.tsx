import React from 'react';
import { Link } from 'react-router-dom';


export const Navigation =  () => {
    return (
        <div className="nav-container">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/picture">Picture</Link>
                    </li>
                    <li>
                        <Link to="/music">Music</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}