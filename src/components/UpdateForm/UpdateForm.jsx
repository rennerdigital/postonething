import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import postService from '../../utils/postService';
import tokenService from '../../utils/tokenService';

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "", id: ""
    };
  }

  componentDidMount = async () => {
    console.log("check>>", this.props)
    let getUser = tokenService.getUserFromToken();
    const { _id } = getUser;

    const getPosts = await postService.getUserPosts(_id);
    this.setState({ title: getPosts[0].title, id: getPosts[0]._id })
    console.log("shwow>>", getPosts)

  }



  handleSubmit = async (e) => {
    e.preventDefault();

    const { title, id} = this.state;

      const updatedPost = await postService.update(id, title);
      if (updatedPost.title) {
        window.location.href = "/user"
      }

    // grab all the data from the state
    // send that to the server
    //const post = await this.props.update()
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