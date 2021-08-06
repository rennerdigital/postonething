import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Link } from 'react-router-dom';
import DeleteForm from '../../components/DeleteForm/DeleteForm';

class DeletePage extends Component {
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
                <h1>Delete Your One Thing?</h1>
                <DeleteForm {...props}/>
            </div>
            </>
        );
    }
}

export default DeletePage;