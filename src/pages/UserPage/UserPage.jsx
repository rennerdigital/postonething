import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { Link } from 'react-router-dom';
import "./userpage.css"

const UserPage = (props) => {
    return (
        <div>
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout} />
            <h1>Your One Thing</h1>
            <textarea rows="4" cols="100" placeholder="post your one thing here..." className="yourthing" />
            <div className="buttons">
            <button>Post My One Thing</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button>Update My One Thing</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button>Delete My One Thing</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/'>Cancel</Link>
            </div>
            
        </div>

    )
}

export default UserPage;