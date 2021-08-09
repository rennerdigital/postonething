import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { Link } from 'react-router-dom';
import tokenService from "../../utils/tokenService";
import postService from "../../utils/postService";
import "./userpage.css"
// const Post = require("../../models/post");

const UserPage = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPost() {
            let getUser = tokenService.getUserFromToken();
            const { _id } = getUser;

            const getPosts = await postService.getUserPosts(_id);
            setPosts(getPosts)
            console.log("shwow>>", getPosts)
        }

        fetchPost()

    }, [])

    const handlePostDelete = async () => {
        const id = posts[0]._id;
        if (posts.length) {
            const deletePost = await postService.deleteOne(id);
            if (deletePost.title) {
                window.location.reload();
            }
        }

    }

    return (
        <div>
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout} />
            <h1>My One Thing</h1>
            {posts.length !== 0 && posts.map((m, i) => <li key={i}> {m.title} </li>)}
            {/* Code to display post goes here */}
            {/* <h5>{this.state.post.title}</h5> */}
            {/* {this.state.page === "post" && (
            <h1>
              {this.state.post ? this.state.post.title : "Create a new Post"}
            </h1>
            )} */}
            <div className="buttons">
                <Link to={!posts.length ? '/user/create' : "#"} className='NavBar-link' style={{ cursor: !posts.length ? "pointer" : "none", color: !posts.length ? "chartreuse" : "gray" }}>Create</Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <Link to='/user/update' style={{ cursor: !posts.length ? "none" : "pointer", color: !posts.length ? "gray" : "chartreuse" }} className='NavBar-link'>Update</Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <Link to='#' onClick={handlePostDelete} style={{ cursor: !posts.length ? "none" : "pointer", color: !posts.length ? "gray" : "chartreuse" }} className='NavBar-link'>Delete</Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <Link to='/'>Cancel</Link>
            </div>

        </div>

    )
}

export default UserPage;