import React from 'react'

function PostForm(props) {
    return (
        <div>
            <form>
                <label>Title:</label>
                <input type="text" name="newTitle" id="newTitle"></input>
                <label>Content:</label>
                <input type="text" name="newBody" id="newBody"></input>
                <button onClick={(e) => {props.addPost(e)}}>submit</button>
            </form>
        </div>
    )
}

export default PostForm