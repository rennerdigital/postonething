import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { Link } from 'react-router-dom';

export default function UpdatePage(props) {
    return (
        <div>
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout} />
            <h1>Update Your One Thing</h1>
        </div>
    )
}
