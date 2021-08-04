import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './aboutpage.css';

const AboutPage = (props) => {
    return (
        <div className="AboutPage">
            <NavBar />
            <h1>What on Earth is this?</h1>
            <h5>Simply put, Post One Thing is fifty percent capstone project for an <a href="https://github.com/rennerdigital">aspiring software engineer</a>, and fifty percent anti-social social network.</h5>
            <h3>The rules are simple. Be kind, and be civil.</h3>
            <h5>Your identity will remain anonymous. Post anything - your deepest and darkest secret, or just say hi. Post YOUR thing. Read other things. Read all the things.</h5>
            <h3>Now, let's go <Link to=''>post one thing</Link>.</h3>
            <h5>...and if you'd like to post me one thing, you can do so here.</h5>
        </div>
    )
};

export default AboutPage;