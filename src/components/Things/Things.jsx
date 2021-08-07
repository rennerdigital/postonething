import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import postService from '../../utils/postService';

class ThingsPage extends Component {
    constructor(props) {
      super(props);
      this.state = { title: "", allposts: {}} }
    }
  
    componentDidMount = async () => {
        const post2 = await postService.getAll();
        // console.log(post2)
        this.setstate ({
            allposts:post2
        })
        console.log(this.state.allposts)
      }

      render() {
        return (
          <div>
            <h1>All Things</h1>
          </div>
        );
      }
    }

  
  export default ThingsPage;