import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar'
import CreateForm from '../../components/CreateForm/CreateForm';
import { Link } from 'react-router-dom';

class CreatePage extends Component {
    constructor(props) {
      super(props);
      this.state = { title: "" }
    }
  
    // updateMessage = (msg) => {
    //   this.setState({message: msg});
    // }
  
    render(props) {
      return (
       <> 
        <div>
            
            <NavBar
                user={this.props.user}
                handleLogout={this.props.handleLogout} />
            <h1>Create Your One Thing</h1>
            <CreateForm {...props}/>
        </div>
        </>
      );
    }
  }
  
  export default CreatePage;
