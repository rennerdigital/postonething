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
            {/* <h5>{this.state.post.desc}</h5> */}
            <div className="buttons">
            <Link to='/user/create' className='NavBar-link'>Create</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/user/update' className='NavBar-link'>Update</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/user/del' className='NavBar-link'>Delete</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/'>Cancel</Link>
            </div>
            
        </div>

    )
}

export default UserPage;