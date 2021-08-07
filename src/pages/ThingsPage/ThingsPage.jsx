import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Link } from 'react-router-dom';
import postService from '../../utils/postService';

class ThingsPage extends Component {
    constructor(props) {
      super(props);
      this.state = { title: "", allposts: [] }
    }
  
    componentDidMount = async () => {
        const post2 = await postService.getAll();
        // console.log(post2)
        

        let arrayPosts = []

        for (let item in post2){
            arrayPosts.push(post2[`${item}`]);
        }

        this.setState ({
            allposts:arrayPosts
        })

        console.log(this.state.allposts)
      }

      render() {
        return (
            <>
            <div>
            <NavBar
                    user={this.props.user}
                    handleLogout={this.props.handleLogout} />
            <h1>All The Things</h1>
                {this.state.allposts.map ((item)=>(
                    <li>
                        {item.title}
                    </li>
                ))}
            
            </div>
            </>
        );
      }
    } 


  
  export default ThingsPage;