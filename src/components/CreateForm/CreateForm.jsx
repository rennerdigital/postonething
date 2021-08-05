import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import postService from '../../utils/postService';

class CreateForm extends React.Component {
    state = { title: "" };
  
    handleSubmit = async (e) => {
      e.preventDefault();
      // grab all the data from the state
      // send that to the server
      const post = await postService.create(this.state);
      this.props.handlePostCreate(post);
    };

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  
    render() {
      return (
        <div>
          Create
          <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
              value={this.state.title}
              name="title"
              onChange={this.handleChange}
            />
            <button type="submit">create</button>
          </form>
        </div>
      );
    }
  }

export default CreateForm;