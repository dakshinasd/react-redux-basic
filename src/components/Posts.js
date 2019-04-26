import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'; 

class Posts extends Component {
    
    render() {

        const {posts} = this.props; 
        
        const postList = posts.length ? (
            posts.map(post => {
                
                return(
                    <div className="card" key={post.id}>
                        <div className="card-title">
                            <Link to={`/${post.id}`}>
                                {post.title}
                            </Link>
                        </div>
                        <div className="card-body">
                            {post.body}
                        </div>
                    </div>
                )
            })
        ) : <div className="card"><h4>No Posts!</h4></div>
        
        return (
            <div>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Posts);
