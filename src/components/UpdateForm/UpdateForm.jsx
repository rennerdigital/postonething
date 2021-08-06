import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import postService from '../../utils/postService';

class UpdateForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // title: props.post.title
      };
    }
  
    handleSubmit = async (e) => {
      e.preventDefault();
      // grab all the data from the state
      // send that to the server
      const post = await postService.update(this.state);
    };
  
    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label></label>
            <input
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <br></br>
            <br></br>
            <button type="submit">Update My One Thing</button>
          </form>
        </div>
      );
    }
  }

  export default UpdateForm;