import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar'
import { Link } from 'react-router-dom';
import UpdateForm from '../../components/UpdateForm/UpdateForm';

class UpdatePage extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "" }
    }

    render(props) {
        return (
            <>
            <div>
                <NavBar
                    user={this.props.user}
                    handleLogout={this.props.handleLogout} />
                <h1>Update Your One Thing</h1>
                <UpdateForm {...props}/>
            </div>
            </>
        )
    }
}

export default UpdatePage;