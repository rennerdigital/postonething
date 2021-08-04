import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './homepage.css';

const HomePage = (props) => {
    return (
        <div className="HomePage">
            <NavBar />
            <h1>Post One Thing</h1>
            <h5>a social experiment by rennerdigital</h5>
        </div>
    )
};

export default HomePage;