import React from 'react'
import NavBar from '../../components/NavBar/NavBar'

const ThingsPage = (props) => {
    return (
        <div>
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout} />
            <h1>All the Things</h1>
        </div>
    )
};

export default ThingsPage;