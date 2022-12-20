import React from "react";
import axios from "axios";

const baseURL = "http://localhost:8000"

const PostNewItem = () => {
    const [state, setState] = React.useState(
        {
            title: '',
            body: ''
        }
    );

    // タイトル書き換え
    const handleTitleChange = (event) => {
        console.log(state)
        const inputValue = event.target.value;
        setState((prevState) => ({ ...prevState, title: inputValue }));
    };

    // 本文書き換え
    const handleBodyChange = (event) => {
        console.log(state)
        const inputValue = event.target.value;
        setState((prevState) => ({ ...prevState, body: inputValue }));
    };

    // アイテムの投稿
    const handleSubmit = () => {
        axios.post(`${baseURL}/post`,{
            userId:1,
            id: 0,
            title: state.title,
            body: state.body
        })
    };

    return (
        <form onSubmit={() => handleSubmit()}>
            <input 
                value={state.title}
                onChange={(event) => {handleTitleChange(event)}}
            />
            <br/>
            <textarea
                value={state.body}
                onChange={(event) => {handleBodyChange(event)}}
            />
            <br/>
            <input type='submit' value='投稿'/>
        </form>
    );


}

export default PostNewItem;