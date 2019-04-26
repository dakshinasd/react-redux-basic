import React, {Component} from 'react'
import axios from 'axios';
import {connect} from 'react-redux';

import {deletePost} from '../actions/post.actions';

class Post extends Component {
    

    handleDelete = () => {

        this.props.deletePost(this.props.post.id);
        this.props.history.push("/");
    }

    render() {

        const {post} = this.props;
        const postData = post ? (
            <div className="card">
                <div className="card-title">
                    {post.title}
                </div>
                <div className="post-body">
                    {post.body}
                </div>
                <button className="waves-effect waves-light btn" onClick={this.handleDelete}>Delete</button>
            </div>
        ) : <div className="error">Error</div>
        return (
            <div>
                {postData}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    const id = parseInt(ownProps.match.params.post_id);
    
    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        
        deletePost: (id) => { dispatch(deletePost(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
