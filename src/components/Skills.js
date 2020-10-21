import React, { Component } from 'react'
import PostForm from './PostForm'

class Blog extends Component {
    render() {
        const blogList = this.props.posts.map((p, idx)=>{
        return <li key={idx}>{p.title} {p.body}</li>
        })
        return (
            <div>
                <h1>Blog page</h1>
                {blogList}
                <PostForm addPost={this.props.addPost} />
            </div>
        )
    }
}

export default Blog